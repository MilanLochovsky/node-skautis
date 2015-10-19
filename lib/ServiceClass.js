var util = require("util");
var url = require("url");
var http = require("http");
var https = require("https");
var xml2js = require("xml2js");

function ServiceClass(skautIS) {
  this.namespace = "https://is.skaut.cz/";
  this.skautIS = skautIS;
}

ServiceClass.prototype.skautIS = null;
ServiceClass.prototype.serviceName = null;
ServiceClass.prototype.serviceLocation = null

ServiceClass.prototype.parseError = function(xmlBody, callback) {
  this.skautIS.debugMessage("=== Error XML data:");
  this.skautIS.debugMessage(xmlBody);
  var parser = new xml2js.Parser();
  _this = this;
  parser.parseString(xmlBody, function (err, result) {
      _this.skautIS.debugMessage("=== Error XML2JS data:");
      _this.skautIS.debugMessage(result);
      var code = result['soap:Envelope']['soap:Body'][0]['soap:Fault'][0]['faultcode'][0];
      var string = result['soap:Envelope']['soap:Body'][0]['soap:Fault'][0]['faultstring'][0];
      if(typeof callback == "function") {
        var e = new Error(string);
        e.name = code;
        callback(e, null);
      }
  });
}

ServiceClass.prototype.traverseResponseData = function(data, find, result) {
  if(typeof data == "object") {
    for(var key in data) {
      if(key == find) {
        result(data[key]);
      }
      else {
        this.traverseResponseData(data[key], find, result);
      }
    }
  }
}

ServiceClass.prototype.parseResponse = function(xmlBody, params, isArray, callback) {
  this.skautIS.debugMessage("=== Response XML data:");
  this.skautIS.debugMessage(xmlBody);
  var parser = new xml2js.Parser();
  var _this = this;
  parser.parseString(xmlBody, function (err, result) {
      _this.skautIS.debugMessage("=== Response XML2JS data:");
      _this.skautIS.debugMessage(result);
      _this.traverseResponseData(result, "soap:Body", function(data) {
      var p1 = data[0][Object.keys(data[0])][0];
      var p2 = p1[Object.keys(p1)[1]];

      if(p2[0] == "") {
        callback(null, []);
        return;
      }

      if(isArray) {
        ret = [];
        var data = p2[0][Object.keys(p2[0])[0]];
        //console.dir(data,{depth: 4});
        for(var k in data) {
          ret2 = {};
          for(var k2 in data[k]) {
            if(typeof data[k][k2][0]['$'] == "undefined") {
              ret2[k2] = data[k][k2][0];
            }
            else {
              ret2[k2] = null;
            }
          }
          ret.push(ret2);
        }
        callback(null, ret);
      }
      else {
        //console.dir(p2[0], { depth: 4 });
        var d = p2[0];
        ret = {};
        for(var k in d) {
          if(typeof d[k][0]['$'] == "undefined") {
            ret[k] = d[k][0];
          }
          else {
            ret[k] = null;
          }
        }
        callback(null, ret);
      }
    });
  });
}

ServiceClass.prototype.soapRequest = function(soapAction, action, requestType, requestParams, responseParams, isArray, callback) {
  this.skautIS.debugMessage("=== Start SOAP request");
  this.skautIS.debugMessage("=== Test mode?: " + this.skautIS.isTestMode);

  for(var p in requestParams) {
    if(typeof requestParams[p].value == "undefined") {
      requestParams[p].value = null;
    }

    if(typeof requestParams[p].value == "string" && requestParams[p].value.trim() == "") {
      requestParams[p].value = null;
    }

    if(!requestParams[p].nullable && requestParams[p].value == null) {
      callback(new TypeError(requestParams[p].name + " can not be null or empty!"), null);
    }

    if(!requestParams[p].nullable || (requestParams[p].nullable && requestParams[p].value != null)) {
      if(requestParams[p].type == "int" && isNaN(parseInt(requestParams[p].value))) {
        callback(new TypeError(requestParams[p].name + " parameter type must be integer!"), null);
        return;
      }

      if(requestParams[p].type == "float" && isNaN(parseFloat(requestParams[p].value))) {
        callback(new TypeError(requestParams[p].name + " parameter type must be float!"), null);
        return;
      }

      if(requestParams[p].type == "bool" && (requestParams[p].value != true || requestParams[p].value != false || requestParams[p].value != "true" || requestParams[p].value != "false")) {
        callback(new TypeError(requestParams[p].name + " parameter type must be boolean!"), null);
        return;
      }
    }
  }

  var soapBody = '<?xml version="1.0" encoding="utf-8"?>\n' +
  '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n'
   +  ' <soap:Body>\n' +
      '  <%s xmlns="%s">\n' +
        '   <%s>\n' +
          '%s' +
        '   </%s>\n' +
      '  </%s>\n' +
    ' </soap:Body>\n' +
  '</soap:Envelope>';

  var requestData = "";
  for(var key in requestParams) {
    if(requestParams[key].value != null) {
      requestData+= "    " + util.format("<%s>%s</%s>", requestParams[key].name, requestParams[key].value, requestParams[key].name) + "\n";
    }
  }

  var requestBody = util.format(soapBody, action, this.namespace, requestType, requestData, requestType, action);

  this.skautIS.debugMessage("=== Request body:");
  this.skautIS.debugMessage(requestBody);
  this.skautIS.debugMessage("=== Start SOAP HTTP request");

  var requestSettings = {
      host: url.parse(this.skautIS.skautisURL).hostname,
      path: url.parse(this.serviceLocation).pathname,
      port: (this.skautIS.isTestMode ? 80 : 443),
      method: "POST",
      headers: {
          'skautIS_Token': '"' + this.skautIS.skautisToken + '"',
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction' : '"' + soapAction + '"',
          'Content-Length': Buffer.byteLength(requestBody)
      }
  };

  var buffer = "";
  var _this = this;
  var req = (this.skautIS.isTestMode ? http : https).request( requestSettings, function( res )    {
     _this.skautIS.debugMessage( "=== Request status code: " + res.statusCode );
     var buffer = "";
     res.on( "data", function( data ) { buffer = buffer + data; } );
     res.on( "end", function( data ) {
       _this.skautIS.debugMessage("=== End SOAP HTTP request");

       if(typeof callback == "function" && res.statusCode == 200) {
         _this.parseResponse(buffer, responseParams, isArray, callback);
       }

       if(typeof callback == "function" && res.statusCode != 200) {
         _this.parseError(buffer, callback);
       }
     });
  });

  req.on('error', function(e) {
      this.skautIS.debugMessage('=== Problem with request: ' + e.message);
      if(typeof callback == "function") {
        callback(e, null);
      }
  });

  req.write(requestBody);
  req.end();
}

module.exports = ServiceClass;
