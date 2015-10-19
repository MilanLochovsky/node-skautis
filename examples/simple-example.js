var SkautIS = require('./../lib/index');

var skautIS = new SkautIS("2188738e-d0f1-4f66-9a81-5c5f0dade8ad", true, false);
var ID_Person = null;
var ID_Unit = null;

    skautIS.setToken("7775b2b5-ffa9-47fb-90a2-807be9605e7a");

//console.log(skautIS.getLoginURL("http://ret.ur/"));

skautIS.UserManagement.LoginUpdateRefresh(skautIS.skautisToken, function(err, data) {
  //console.log(data);
});

skautIS.UserManagement.UserDetail(skautIS.skautisToken, null, function(err, data) {
  if(err) {
    console.dir(err);
    return;
  }

  console.log("----------------------------");

  ID_Person = data.ID_Person;

  skautIS.OrganizationUnit.PersonRegistrationAllPerson(skautIS.skautisToken, ID_Person , 2012, null, null, function(err, data) {
    if(err) {
      console.dir(err);
      return;
    }
    ID_Unit = data[0].ID_Unit;
    skautIS.OrganizationUnit.RealtyAll(skautIS.skautisToken, null, null, null, null, null, function(err, data) {
      if(err) {
        console.dir(err);
        return;
      }
      console.dir(data);
    });
    /*
    skautIS.OrganizationUnit.RealtyTypeAll(null, null, skautIS.applicationId, function(err, data) {
      if(err) {
        console.dir(err);
        return;
      }
      console.dir(data);
    });*/
  });

  /*
  skautIS.OrganizationUnit.PersonContactAll(skautIS.skautisToken, ID_Person , null, null, null, function(err, data) {
    for(var k in data) {
      console.log(data[k].ContactType + ": " + data[k].Value);
    }
  });
  */
});
