var util = require("util");
var querystring = require("querystring");

var Telephony = require("./services/Telephony");
var UserManagement = require("./services/UserManagement");
var OrganizationUnit = require("./services/OrganizationUnit");

/*

POST /JunakWebservice/Power.asmx HTTP/1.1
Host: test-is.skaut.cz
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "https://is.skaut.cz/EnrollEnergyAll"

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <EnrollEnergyAll xmlns="https://is.skaut.cz/">
      <EnrollEnergyAllInput>
        <ID_Login>guid</ID_Login>
      </EnrollEnergyAllInput>
    </EnrollEnergyAll>
  </soap:Body>
</soap:Envelope>
*/

// SKautIS class

// SkautIS(string applicationId)
// SkautIS(string applicationId, boolean isTestMode)
// SkautIS(string applicationId, boolean isTestMode, function debug)
// SkautIS(string applicationId, boolean isTestMode, boolean debug)
// SkautIS(string sapplicationId, function debug)

function SkautIS(applicationId, isTestMode, debug) {

  if(typeof applicationId == "undefined" || applicationId == null || applicationId == "") {
    throw new Error("applicationId musí být nastaveno!");
  }

  if(typeof isTestMode == "function") {
    this.debugFunction = debug;
  } else if(typeof debug == "function") {
    this.debugFunction = debug;
  } else if(typeof debug == "boolean" && debug == true) {
    this.debugFunction = function(msg) {
      if(typeof msg == "string") {
        console.log(msg);
      }
      else {
        console.dir(msg, {depth: 3});
      }
    }
  }
  else {
    this.debugFunction = function(msg) {};
  }

  this.isTestMode = (typeof isTestMode == "boolean") ? isTestMode : false;
  this.applicationId = applicationId;

  this.Telephony = new Telephony(this);
  this.UserManagement = new UserManagement(this);
  this.OrganizationUnit = new OrganizationUnit(this);

  if(this.isTestMode) {
    this.skautisURL = "http://test-is.skaut.cz/";
  }
  else {
    this.skautisURL = "https://is.skaut.cz/"
  }
}

SkautIS.prototype.isTestMode = null;
SkautIS.prototype.applicationId = null;
SkautIS.prototype.skautisURL = null;
SkautIS.prototype.skautisToken = null;
SkautIS.prototype.debugFunction = null;

SkautIS.prototype.debugMessage = function(msg) {
  if(typeof this.debugFunction == "function") {
    this.debugFunction(msg);
  }
}

SkautIS.prototype.getLoginURL = function(callBackURL) {
  var query = {};
  query['appid'] = this.applicationId;

  if(typeof callBackURL != "undefined" && callBackURL.trim() != "" ) {
    query['ReturnUrl'] = callBackURL;
  }

  return this.skautisURL + "Login/?" + querystring.stringify(query);
}

SkautIS.prototype.setToken = function(token) {
  this.skautisToken = token;
}

SkautIS.prototype.getLogoutURL = function(callBackURL) {
  var query = {};
  query['appid'] = this.applicationId;
  query['token'] = this.applicationId;

  return this.skautisURL + "Login/LogOut.aspx?" + querystring.stringify(query);
}

module.exports = SkautIS;
