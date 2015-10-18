var util = require("util");
var ServiceClass = require("./../ServiceClass");

function UserManagement(skautIS) {
  ServiceClass.call(this, skautIS);
  this.serviceName = "UserManagement";
  this.serviceLocation = "http://test-is.skaut.cz/JunakWebservice/UserManagement.asmx";
}

util.inherits(UserManagement, ServiceClass);

UserManagement.prototype.HolidayDetailNotHoliday = function(ID_Login, Date, callback) {
  this.soapRequest("https://is.skaut.cz/HolidayDetailNotHoliday", "HolidayDetailNotHoliday", "holidayDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "Date", type: "string", value: Date, nullable: true}], [{"paramName":"Date","paramType":"s:dateTime"}], false, callback);
}
UserManagement.prototype.LoginUpdateRoleAuto = function(ID_Login, ID_Table, ID, ID_Action, ID_Group, RequiredPermissions, callback) {
  this.soapRequest("https://is.skaut.cz/LoginUpdateRoleAuto", "LoginUpdateRoleAuto", "loginUpdateRoleAutoInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_Table", type: "string", value: ID_Table, nullable: true}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "ID_Action", type: "string", value: ID_Action, nullable: true}, {name: "ID_Group", type: "int", value: ID_Group, nullable: true}, {name: "RequiredPermissions", type: "string", value: RequiredPermissions, nullable: true}], [{"paramName":"NewRole","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.PluginAll = function(ID_Login, ID, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/PluginAll", "PluginAll", "pluginAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.PluginDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/PluginDetail", "PluginDetail", "pluginDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s:string"},{"paramName":"DisplayName","paramType":"s:string"},{"paramName":"IsEnabled","paramType":"s:boolean"},{"paramName":"Description","paramType":"s:string"}], false, callback);
}
UserManagement.prototype.PluginUpdate = function(ID_Login, ID, DisplayName, IsEnabled, Description, callback) {
  this.soapRequest("https://is.skaut.cz/PluginUpdate", "PluginUpdate", "plugin", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "IsEnabled", type: "bool", value: IsEnabled, nullable: true}, {name: "Description", type: "string", value: Description, nullable: true}], [], false, callback);
}
UserManagement.prototype.SettingsGroupAll = function(ID_Login, ID, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/SettingsGroupAll", "SettingsGroupAll", "settingsGroupAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.TempFileMaintrance = function(ID_Login, callback) {
  this.soapRequest("https://is.skaut.cz/TempFileMaintrance", "TempFileMaintrance", "tempFileMaintranceInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}], [{"paramName":"DatabaseMessage","paramType":"s:string"},{"paramName":"StorageMessage","paramType":"s:string"}], false, callback);
}
UserManagement.prototype.TableMaintrance = function(ID_Login, Databases, callback) {
  this.soapRequest("https://is.skaut.cz/TableMaintrance", "TableMaintrance", "tableMaintranceInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "Databases", type: "string", value: Databases, nullable: true}], [{"paramName":"Message","paramType":"s:string"}], false, callback);
}
UserManagement.prototype.TableRebuild = function(ID_Login, OnlyFast, callback) {
  this.soapRequest("https://is.skaut.cz/TableRebuild", "TableRebuild", "tableRebuildInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "OnlyFast", type: "bool", value: OnlyFast, nullable: false}], [], false, callback);
}
UserManagement.prototype.TempFileDownload = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/TempFileDownload", "TempFileDownload", "tempFileDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: false}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s1:guid"},{"paramName":"Filename","paramType":"s:string"},{"paramName":"Extension","paramType":"s:string"},{"paramName":"Content","paramType":"s:base64Binary"}], false, callback);
}
UserManagement.prototype.TempFileInsert = function(Extension, Content, Hash, Size, ID_Login, Filename, callback) {
  this.soapRequest("https://is.skaut.cz/TempFileInsert", "TempFileInsert", "tempFileInput", [{name: "Extension", type: "string", value: Extension, nullable: true}, {name: "Content", type: "string", value: Content, nullable: true}, {name: "Hash", type: "string", value: Hash, nullable: true}, {name: "Size", type: "int", value: Size, nullable: false}, {name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "Filename", type: "string", value: Filename, nullable: true}], [], false, callback);
}
UserManagement.prototype.RoleAllFunction = function(ID_Login, ID_User, callback) {
  this.soapRequest("https://is.skaut.cz/RoleAllFunction", "RoleAllFunction", "roleAllFunctionInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: false}], [], true, callback);
}
UserManagement.prototype.LoginAll = function(ID_ApplicationNotCurrent, ID_Login, Count, NotEqual, ID_Application, Success, callback) {
  this.soapRequest("https://is.skaut.cz/LoginAll", "LoginAll", "loginAllInput", [{name: "ID_ApplicationNotCurrent", type: "string", value: ID_ApplicationNotCurrent, nullable: true}, {name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "Count", type: "int", value: Count, nullable: true}, {name: "NotEqual", type: "bool", value: NotEqual, nullable: true}, {name: "ID_Application", type: "string", value: ID_Application, nullable: true}, {name: "Success", type: "bool", value: Success, nullable: true}], [], true, callback);
}
UserManagement.prototype.PersistentIPDetailIsPersitent = function(ID_Login, IP, callback) {
  this.soapRequest("https://is.skaut.cz/PersistentIPDetailIsPersitent", "PersistentIPDetailIsPersitent", "persistentIPDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "IP", type: "string", value: IP, nullable: true}], [{"paramName":"IsPersistent","paramType":"s:boolean"}], false, callback);
}
UserManagement.prototype.SettingsAllPublic = function(ID_Login, ID_Application, callback) {
  this.soapRequest("https://is.skaut.cz/SettingsAllPublic", "SettingsAllPublic", "settingsAllPublicInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: true}, {name: "ID_Application", type: "string", value: ID_Application, nullable: true}], [], true, callback);
}
UserManagement.prototype.GroupMemberApplication = function(ID_Login, Grant, callback) {
  this.soapRequest("https://is.skaut.cz/GroupMemberApplication", "GroupMemberApplication", "groupMemberApplicationInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "Grant", type: "bool", value: Grant, nullable: false}], [], false, callback);
}
UserManagement.prototype.InstanceDetail = function(ID_Login, ID_Application, callback) {
  this.soapRequest("https://is.skaut.cz/InstanceDetail", "InstanceDetail", "instanceDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: true}, {name: "ID_Application", type: "string", value: ID_Application, nullable: true}], [{"paramName":"ID","paramType":"s:string"},{"paramName":"DisplayName","paramType":"s:string"},{"paramName":"IsActual","paramType":"s:boolean"}], false, callback);
}
UserManagement.prototype.SettingsAll = function(ID_Login, DisplayName, ID_SettingsGroup, callback) {
  this.soapRequest("https://is.skaut.cz/SettingsAll", "SettingsAll", "settingsAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_SettingsGroup", type: "int", value: ID_SettingsGroup, nullable: true}], [], true, callback);
}
UserManagement.prototype.SettingsDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/SettingsDetail", "SettingsDetail", "settingsDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: true}, {name: "ID", type: "string", value: ID, nullable: true}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s:string"},{"paramName":"DisplayName","paramType":"s:string"},{"paramName":"Value","paramType":"s:string"},{"paramName":"Note","paramType":"s:string"}], false, callback);
}
UserManagement.prototype.SettingsUpdate = function(ID_Login, ID, DisplayName, Value, Note, callback) {
  this.soapRequest("https://is.skaut.cz/SettingsUpdate", "SettingsUpdate", "settingsItem", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "Value", type: "string", value: Value, nullable: true}, {name: "Note", type: "string", value: Note, nullable: true}], [], false, callback);
}
UserManagement.prototype.TableArchive = function(ID_Login, callback) {
  this.soapRequest("https://is.skaut.cz/TableArchive", "TableArchive", "tableArchiveInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}], [], false, callback);
}
UserManagement.prototype.UserAuthenticationDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationDetail", "UserAuthenticationDetail", "userAuthenticationDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s:int"},{"paramName":"ID_User","paramType":"s:int"},{"paramName":"DateCreate","paramType":"s:dateTime"},{"paramName":"ID_UserAuthenticationType","paramType":"s:string"},{"paramName":"UserAuthenticationType","paramType":"s:string"},{"paramName":"ID_UserAuthenticationState","paramType":"s:string"},{"paramName":"UserAuthenticationState","paramType":"s:string"},{"paramName":"Code","paramType":"s:string"},{"paramName":"Number","paramType":"s:string"},{"paramName":"ID_UserAuthenticated","paramType":"s:int"},{"paramName":"DateAuthenticated","paramType":"s:dateTime"},{"paramName":"Content","paramType":"s:base64Binary"},{"paramName":"FormExtension","paramType":"s:string"},{"paramName":"FormContent","paramType":"s:base64Binary"}], false, callback);
}
UserManagement.prototype.UserAuthenticationDetailForm = function(ID_Login, ID_User, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationDetailForm", "UserAuthenticationDetailForm", "userAuthenticationDetailFormInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: false}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s:int"},{"paramName":"ID_User","paramType":"s:int"},{"paramName":"DateCreate","paramType":"s:dateTime"},{"paramName":"ID_UserAuthenticationType","paramType":"s:string"},{"paramName":"UserAuthenticationType","paramType":"s:string"},{"paramName":"ID_UserAuthenticationState","paramType":"s:string"},{"paramName":"UserAuthenticationState","paramType":"s:string"},{"paramName":"Code","paramType":"s:string"},{"paramName":"Number","paramType":"s:string"},{"paramName":"ID_UserAuthenticated","paramType":"s:int"},{"paramName":"DateAuthenticated","paramType":"s:dateTime"},{"paramName":"Content","paramType":"s:base64Binary"},{"paramName":"FormExtension","paramType":"s:string"},{"paramName":"FormContent","paramType":"s:base64Binary"}], false, callback);
}
UserManagement.prototype.UserAuthenticationInsert = function(ID_Login, Number, Code, NumberDataBox, ID_Person, ID_User, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationInsert", "UserAuthenticationInsert", "userAuthentication", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "Number", type: "string", value: Number, nullable: true}, {name: "Code", type: "string", value: Code, nullable: true}, {name: "NumberDataBox", type: "string", value: NumberDataBox, nullable: true}, {name: "ID_Person", type: "int", value: ID_Person, nullable: true}, {name: "ID_User", type: "int", value: ID_User, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.UserAuthenticationStateAll = function(ID_Login, ID, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationStateAll", "UserAuthenticationStateAll", "userAuthenticationStateAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.UserAuthenticationTypeAll = function(ID_Login, ID, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationTypeAll", "UserAuthenticationTypeAll", "userAuthenticationTypeAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.UserAuthenticationRequest = function(ID_Login, ID_Person, ID_User, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationRequest", "UserAuthenticationRequest", "userAuthentication", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_Person", type: "int", value: ID_Person, nullable: true}, {name: "ID_User", type: "int", value: ID_User, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.UserAuthenticationUpdateForm = function(ID_Login, ID, ID_User, DateCreate, ID_UserAuthenticationType, UserAuthenticationType, ID_UserAuthenticationState, UserAuthenticationState, Code, Number, ID_UserAuthenticated, DateAuthenticated, Content, FormExtension, FormContent, callback) {
  this.soapRequest("https://is.skaut.cz/UserAuthenticationUpdateForm", "UserAuthenticationUpdateForm", "userAuthentication", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "DateCreate", type: "string", value: DateCreate, nullable: true}, {name: "ID_UserAuthenticationType", type: "string", value: ID_UserAuthenticationType, nullable: true}, {name: "UserAuthenticationType", type: "string", value: UserAuthenticationType, nullable: true}, {name: "ID_UserAuthenticationState", type: "string", value: ID_UserAuthenticationState, nullable: true}, {name: "UserAuthenticationState", type: "string", value: UserAuthenticationState, nullable: true}, {name: "Code", type: "string", value: Code, nullable: true}, {name: "Number", type: "string", value: Number, nullable: true}, {name: "ID_UserAuthenticated", type: "int", value: ID_UserAuthenticated, nullable: true}, {name: "DateAuthenticated", type: "string", value: DateAuthenticated, nullable: true}, {name: "Content", type: "string", value: Content, nullable: true}, {name: "FormExtension", type: "string", value: FormExtension, nullable: true}, {name: "FormContent", type: "string", value: FormContent, nullable: true}], [], false, callback);
}
UserManagement.prototype.UserRoleUpdateIsActive = function(ID_Login, ID, ID_User, ID_Role, ID_Group, callback) {
  this.soapRequest("https://is.skaut.cz/UserRoleUpdateIsActive", "UserRoleUpdateIsActive", "userRole", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_Group", type: "int", value: ID_Group, nullable: true}], [], false, callback);
}
UserManagement.prototype.UserUpdatePasswordAdmin = function(ID_Login, ID, Password, Password2, callback) {
  this.soapRequest("https://is.skaut.cz/UserUpdatePasswordAdmin", "UserUpdatePasswordAdmin", "userUpdatePasswordAdminInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "Password", type: "string", value: Password, nullable: true}, {name: "Password2", type: "string", value: Password2, nullable: true}], [], false, callback);
}
UserManagement.prototype.ActionAll = function(ID_Login, DisplayName, ID_Table, ID_TableRelated, ID_Operation, callback) {
  this.soapRequest("https://is.skaut.cz/ActionAll", "ActionAll", "actionAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_Table", type: "string", value: ID_Table, nullable: true}, {name: "ID_TableRelated", type: "string", value: ID_TableRelated, nullable: true}, {name: "ID_Operation", type: "string", value: ID_Operation, nullable: true}], [], true, callback);
}
UserManagement.prototype.ErrorAll = function(ID_Login, ID_User, DisplayName, ID_ErrorType, DateFrom, DateTo, IsProcessed, callback) {
  this.soapRequest("https://is.skaut.cz/ErrorAll", "ErrorAll", "errorAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_ErrorType", type: "string", value: ID_ErrorType, nullable: true}, {name: "DateFrom", type: "string", value: DateFrom, nullable: true}, {name: "DateTo", type: "string", value: DateTo, nullable: true}, {name: "IsProcessed", type: "bool", value: IsProcessed, nullable: true}], [], true, callback);
}
UserManagement.prototype.ErrorDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/ErrorDetail", "ErrorDetail", "errorDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s:int"},{"paramName":"DisplayName","paramType":"s:string"},{"paramName":"ID_User","paramType":"s:int"},{"paramName":"ID_Person","paramType":"s:int"},{"paramName":"Person","paramType":"s:string"},{"paramName":"ID_ErrorType","paramType":"s:string"},{"paramName":"ErrorType","paramType":"s:string"},{"paramName":"Date","paramType":"s:dateTime"},{"paramName":"URL","paramType":"s:string"},{"paramName":"Description","paramType":"s:string"},{"paramName":"IsProcessed","paramType":"s:boolean"},{"paramName":"Browser","paramType":"s:string"},{"paramName":"IP","paramType":"s:string"}], false, callback);
}
UserManagement.prototype.ErrorInsert = function(ID_Login, ID, DisplayName, ID_User, ID_Person, Person, ID_ErrorType, ErrorType, Date, URL, Description, IsProcessed, Browser, IP, callback) {
  this.soapRequest("https://is.skaut.cz/ErrorInsert", "ErrorInsert", "error", [{name: "ID_Login", type: "string", value: ID_Login, nullable: true}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Person", type: "int", value: ID_Person, nullable: true}, {name: "Person", type: "string", value: Person, nullable: true}, {name: "ID_ErrorType", type: "string", value: ID_ErrorType, nullable: true}, {name: "ErrorType", type: "string", value: ErrorType, nullable: true}, {name: "Date", type: "string", value: Date, nullable: true}, {name: "URL", type: "string", value: URL, nullable: true}, {name: "Description", type: "string", value: Description, nullable: true}, {name: "IsProcessed", type: "bool", value: IsProcessed, nullable: true}, {name: "Browser", type: "string", value: Browser, nullable: true}, {name: "IP", type: "string", value: IP, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.ErrorUpdate = function(ID_Login, ID, DisplayName, ID_User, ID_Person, Person, ID_ErrorType, ErrorType, Date, URL, Description, IsProcessed, Browser, IP, callback) {
  this.soapRequest("https://is.skaut.cz/ErrorUpdate", "ErrorUpdate", "error", [{name: "ID_Login", type: "string", value: ID_Login, nullable: true}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Person", type: "int", value: ID_Person, nullable: true}, {name: "Person", type: "string", value: Person, nullable: true}, {name: "ID_ErrorType", type: "string", value: ID_ErrorType, nullable: true}, {name: "ErrorType", type: "string", value: ErrorType, nullable: true}, {name: "Date", type: "string", value: Date, nullable: true}, {name: "URL", type: "string", value: URL, nullable: true}, {name: "Description", type: "string", value: Description, nullable: true}, {name: "IsProcessed", type: "bool", value: IsProcessed, nullable: true}, {name: "Browser", type: "string", value: Browser, nullable: true}, {name: "IP", type: "string", value: IP, nullable: true}], [], false, callback);
}
UserManagement.prototype.GroupTypeAll = function(ID_Login, DisplayName, ID_Table, CanLogin, callback) {
  this.soapRequest("https://is.skaut.cz/GroupTypeAll", "GroupTypeAll", "groupTypeAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_Table", type: "string", value: ID_Table, nullable: true}, {name: "CanLogin", type: "bool", value: CanLogin, nullable: true}], [], true, callback);
}
UserManagement.prototype.LogAll = function(ID_Login, ID_TableDisplay, DisplayObjectId, ID_User, ID_Operation, callback) {
  this.soapRequest("https://is.skaut.cz/LogAll", "LogAll", "logAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_TableDisplay", type: "string", value: ID_TableDisplay, nullable: true}, {name: "DisplayObjectId", type: "int", value: DisplayObjectId, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Operation", type: "string", value: ID_Operation, nullable: true}], [], true, callback);
}
UserManagement.prototype.LogDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/LogDetail", "LogDetail", "logDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [{"paramName":"ID","paramType":"s:int"},{"paramName":"ID_User","paramType":"s:int"},{"paramName":"ID_Person","paramType":"s:int"},{"paramName":"Person","paramType":"s:string"},{"paramName":"Date","paramType":"s:dateTime"},{"paramName":"ID_TableDisplay","paramType":"s:string"},{"paramName":"TableDisplay","paramType":"s:string"},{"paramName":"DisplayObjectId","paramType":"s:int"},{"paramName":"ID_Table","paramType":"s:string"},{"paramName":"Table","paramType":"s:string"},{"paramName":"ID_Operation","paramType":"s:string"},{"paramName":"Operation","paramType":"s:string"},{"paramName":"ObjectID","paramType":"s:int"},{"paramName":"HistoryObjectId","paramType":"s:int"},{"paramName":"IsAutomatic","paramType":"s:boolean"}], false, callback);
}
UserManagement.prototype.LogDetailHistory = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/LogDetailHistory", "LogDetailHistory", "logDetailHistoryInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [], true, callback);
}
UserManagement.prototype.LoginUpdateRefresh = function(ID, callback) {
  this.soapRequest("https://is.skaut.cz/LoginUpdateRefresh", "LoginUpdateRefresh", "loginUpdateRefreshInput", [{name: "ID", type: "string", value: ID, nullable: false}], [{"paramName":"DateLogout","paramType":"s:dateTime"}], false, callback);
}
UserManagement.prototype.LoginUpdateLogout = function(ID, callback) {
  this.soapRequest("https://is.skaut.cz/LoginUpdateLogout", "LoginUpdateLogout", "loginUpdateLogoutInput", [{name: "ID", type: "string", value: ID, nullable: false}], [], false, callback);
}
UserManagement.prototype.GroupAll = function(ID_Login, ID, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/GroupAll", "GroupAll", "groupAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.LoginUpdate = function(ID, ID_UserRole, callback) {
  this.soapRequest("https://is.skaut.cz/LoginUpdate", "LoginUpdate", "loginUpdateInput", [{name: "ID", type: "string", value: ID, nullable: false}, {name: "ID_UserRole", type: "int", value: ID_UserRole, nullable: false}], [{"paramName":"ID_Unit","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.OperationAll = function(ID_Login, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/OperationAll", "OperationAll", "operationAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.PermissionAll = function(ID_Login, ID, DisplayName, ID_GroupType, IsStatic, ID_Role, callback) {
  this.soapRequest("https://is.skaut.cz/PermissionAll", "PermissionAll", "permissionAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_GroupType", type: "string", value: ID_GroupType, nullable: true}, {name: "IsStatic", type: "bool", value: IsStatic, nullable: true}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}], [], true, callback);
}
UserManagement.prototype.ActionVerify = function(ID_Login, ID, ID_Table, ID_Action, IsRaiseError, callback) {
  this.soapRequest("https://is.skaut.cz/ActionVerify", "ActionVerify", "actionVerifyInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "ID_Table", type: "string", value: ID_Table, nullable: true}, {name: "ID_Action", type: "string", value: ID_Action, nullable: true}, {name: "IsRaiseError", type: "bool", value: IsRaiseError, nullable: true}], [], true, callback);
}
UserManagement.prototype.PermissionAllLogin = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/PermissionAllLogin", "PermissionAllLogin", "permissionAllLoginInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "string", value: ID, nullable: true}], [], true, callback);
}
UserManagement.prototype.RoleAll = function(ID_Login, DisplayName, ID_UnitType, ID_GroupType, callback) {
  this.soapRequest("https://is.skaut.cz/RoleAll", "RoleAll", "roleAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_UnitType", type: "string", value: ID_UnitType, nullable: true}, {name: "ID_GroupType", type: "string", value: ID_GroupType, nullable: true}], [], true, callback);
}
UserManagement.prototype.RoleDelete = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/RoleDelete", "RoleDelete", "roleDeleteInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [], false, callback);
}
UserManagement.prototype.RoleDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/RoleDetail", "RoleDetail", "roleDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [{"paramName":"ID_Login","paramType":"s1:guid"},{"paramName":"ID","paramType":"s:int"},{"paramName":"DisplayName","paramType":"s:string"},{"paramName":"ID_UnitType","paramType":"s:string"},{"paramName":"UnitType","paramType":"s:string"},{"paramName":"ID_GroupType","paramType":"s:string"},{"paramName":"GroupType","paramType":"s:string"},{"paramName":"IsHidden","paramType":"s:boolean"}], false, callback);
}
UserManagement.prototype.RoleInsert = function(ID_Login, ID, DisplayName, ID_UnitType, UnitType, ID_GroupType, GroupType, IsHidden, callback) {
  this.soapRequest("https://is.skaut.cz/RoleInsert", "RoleInsert", "role", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_UnitType", type: "string", value: ID_UnitType, nullable: true}, {name: "UnitType", type: "string", value: UnitType, nullable: true}, {name: "ID_GroupType", type: "string", value: ID_GroupType, nullable: true}, {name: "GroupType", type: "string", value: GroupType, nullable: true}, {name: "IsHidden", type: "bool", value: IsHidden, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.RolePermissionAll = function(ID_Login, ID_Role, ID_Permission, callback) {
  this.soapRequest("https://is.skaut.cz/RolePermissionAll", "RolePermissionAll", "rolePermissionAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_Permission", type: "string", value: ID_Permission, nullable: true}], [], true, callback);
}
UserManagement.prototype.RolePermissionDelete = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/RolePermissionDelete", "RolePermissionDelete", "rolePermissionDeleteInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [], false, callback);
}
UserManagement.prototype.RolePermissionInsert = function(ID_Login, ID, ID_Role, ID_Permission, IsHierarchic, callback) {
  this.soapRequest("https://is.skaut.cz/RolePermissionInsert", "RolePermissionInsert", "rolePermission", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_Permission", type: "string", value: ID_Permission, nullable: true}, {name: "IsHierarchic", type: "bool", value: IsHierarchic, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.RolePermissionUpdate = function(ID_Login, ID, ID_Role, ID_Permission, IsHierarchic, callback) {
  this.soapRequest("https://is.skaut.cz/RolePermissionUpdate", "RolePermissionUpdate", "rolePermission", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_Permission", type: "string", value: ID_Permission, nullable: true}, {name: "IsHierarchic", type: "bool", value: IsHierarchic, nullable: true}], [], false, callback);
}
UserManagement.prototype.RoleUpdate = function(ID_Login, ID, DisplayName, ID_UnitType, UnitType, ID_GroupType, GroupType, IsHidden, callback) {
  this.soapRequest("https://is.skaut.cz/RoleUpdate", "RoleUpdate", "role", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}, {name: "ID_UnitType", type: "string", value: ID_UnitType, nullable: true}, {name: "UnitType", type: "string", value: UnitType, nullable: true}, {name: "ID_GroupType", type: "string", value: ID_GroupType, nullable: true}, {name: "GroupType", type: "string", value: GroupType, nullable: true}, {name: "IsHidden", type: "bool", value: IsHidden, nullable: true}], [], false, callback);
}
UserManagement.prototype.UserAll = function(ID_Login, ID, ID_Person, ID_Unit, UserName, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/UserAll", "UserAll", "userAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}, {name: "ID_Person", type: "int", value: ID_Person, nullable: true}, {name: "ID_Unit", type: "int", value: ID_Unit, nullable: true}, {name: "UserName", type: "string", value: UserName, nullable: true}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.UserRoleAll = function(ID_Login, ID_User, ID_Role, ID_GroupType, IsActive, CanEdit, callback) {
  this.soapRequest("https://is.skaut.cz/UserRoleAll", "UserRoleAll", "userRoleAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_GroupType", type: "string", value: ID_GroupType, nullable: true}, {name: "IsActive", type: "bool", value: IsActive, nullable: true}, {name: "CanEdit", type: "bool", value: CanEdit, nullable: true}], [], true, callback);
}
UserManagement.prototype.UserRoleALLUnit = function(ID_Login, ID_Unit, ID_Role, callback) {
  this.soapRequest("https://is.skaut.cz/UserRoleALLUnit", "UserRoleALLUnit", "userRoleALLUnitInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID_Unit", type: "int", value: ID_Unit, nullable: false}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}], [], true, callback);
}
UserManagement.prototype.UserRoleDelete = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/UserRoleDelete", "UserRoleDelete", "userRoleDeleteInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}], [], false, callback);
}
UserManagement.prototype.UserRoleInsert = function(ID_Login, ID, ID_User, ID_Role, ID_Group, callback) {
  this.soapRequest("https://is.skaut.cz/UserRoleInsert", "UserRoleInsert", "userRole", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_Group", type: "int", value: ID_Group, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.UserRoleUpdate = function(ID_Login, ID, ID_User, ID_Role, ID_Group, callback) {
  this.soapRequest("https://is.skaut.cz/UserRoleUpdate", "UserRoleUpdate", "userRole", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "ID_User", type: "int", value: ID_User, nullable: true}, {name: "ID_Role", type: "int", value: ID_Role, nullable: true}, {name: "ID_Group", type: "int", value: ID_Group, nullable: true}], [], false, callback);
}
UserManagement.prototype.UserUpdate = function(ID_Login, ID, IsEnabled, Password, PasswordActual, callback) {
  this.soapRequest("https://is.skaut.cz/UserUpdate", "UserUpdate", "userUpdateInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: false}, {name: "IsEnabled", type: "bool", value: IsEnabled, nullable: true}, {name: "Password", type: "string", value: Password, nullable: true}, {name: "PasswordActual", type: "string", value: PasswordActual, nullable: true}], [], false, callback);
}
UserManagement.prototype.WeekDayAll = function(ID_Login, DisplayName, callback) {
  this.soapRequest("https://is.skaut.cz/WeekDayAll", "WeekDayAll", "weekDayAllInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "DisplayName", type: "string", value: DisplayName, nullable: true}], [], true, callback);
}
UserManagement.prototype.LoginInsert = function(UserName, Password, ID_UserRole, ID_Application, IP, IsPersistent, ID_PersistentLogin, callback) {
  this.soapRequest("https://is.skaut.cz/LoginInsert", "LoginInsert", "loginInsertInput", [{name: "UserName", type: "string", value: UserName, nullable: true}, {name: "Password", type: "string", value: Password, nullable: true}, {name: "ID_UserRole", type: "int", value: ID_UserRole, nullable: true}, {name: "ID_Application", type: "string", value: ID_Application, nullable: true}, {name: "IP", type: "string", value: IP, nullable: true}, {name: "IsPersistent", type: "bool", value: IsPersistent, nullable: true}, {name: "ID_PersistentLogin", type: "string", value: ID_PersistentLogin, nullable: true}], [{"paramName":"ID","paramType":"s1:guid"},{"paramName":"ID_UserRole","paramType":"s:int"},{"paramName":"ID_Unit","paramType":"s:int"},{"paramName":"ID_PersistentLogin","paramType":"s1:guid"},{"paramName":"DateLogout","paramType":"s:dateTime"}], false, callback);
}
UserManagement.prototype.UserDetail = function(ID_Login, ID, callback) {
  this.soapRequest("https://is.skaut.cz/UserDetail", "UserDetail", "userDetailInput", [{name: "ID_Login", type: "string", value: ID_Login, nullable: false}, {name: "ID", type: "int", value: ID, nullable: true}], [{"paramName":"ID","paramType":"s:int"},{"paramName":"IsActive","paramType":"s:boolean"},{"paramName":"IsEnabled","paramType":"s:boolean"},{"paramName":"IsDebug","paramType":"s:boolean"},{"paramName":"UserName","paramType":"s:string"},{"paramName":"DatePasswordChange","paramType":"s:dateTime"},{"paramName":"IncorrectPasswordCount","paramType":"s:int"},{"paramName":"PasswordRequest","paramType":"s1:guid"},{"paramName":"PasswordRequestTimeout","paramType":"s:dateTime"},{"paramName":"ID_Person","paramType":"s:int"},{"paramName":"Person","paramType":"s:string"},{"paramName":"SecurityCode","paramType":"s:string"},{"paramName":"HasMembership","paramType":"s:boolean"},{"paramName":"ID_UserAuthentication","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.UserInsert = function(UserName, Password, FirstName, LastName, NickName, Email, ID_Sex, Birthday, callback) {
  this.soapRequest("https://is.skaut.cz/UserInsert", "UserInsert", "userInsertInput", [{name: "UserName", type: "string", value: UserName, nullable: true}, {name: "Password", type: "string", value: Password, nullable: true}, {name: "FirstName", type: "string", value: FirstName, nullable: true}, {name: "LastName", type: "string", value: LastName, nullable: true}, {name: "NickName", type: "string", value: NickName, nullable: true}, {name: "Email", type: "string", value: Email, nullable: true}, {name: "ID_Sex", type: "string", value: ID_Sex, nullable: true}, {name: "Birthday", type: "string", value: Birthday, nullable: true}], [{"paramName":"ID","paramType":"s:int"}], false, callback);
}
UserManagement.prototype.UserPasswordRequest = function(UserName, Email, callback) {
  this.soapRequest("https://is.skaut.cz/UserPasswordRequest", "UserPasswordRequest", "userPasswordRequestInput", [{name: "UserName", type: "string", value: UserName, nullable: true}, {name: "Email", type: "string", value: Email, nullable: true}], [{"paramName":"Status","paramType":"s:string"}], false, callback);
}
UserManagement.prototype.UserUpdatePassword = function(PasswordRequest, Password, callback) {
  this.soapRequest("https://is.skaut.cz/UserUpdatePassword", "UserUpdatePassword", "userUpdatePasswordInput", [{name: "PasswordRequest", type: "string", value: PasswordRequest, nullable: false}, {name: "Password", type: "string", value: Password, nullable: true}], [], false, callback);
}

module.exports = UserManagement;
