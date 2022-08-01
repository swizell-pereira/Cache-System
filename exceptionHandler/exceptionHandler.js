"use strict";
exports.__esModule = true;
exports.ExceptionHandler = void 0;
var ExceptionHandler = /** @class */ (function () {
    function ExceptionHandler() {
    }
    ExceptionHandler.prototype.printServerConnectionError = function (errorMessage) {
        console.log("Failed to start Server: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.printvalidationError = function (errorMessage, operation) {
        console.log("".concat(operation, " data failed : ").concat(errorMessage));
    };
    ExceptionHandler.prototype.handleFailedToGetClient = function (errorMessage) {
        console.log("Failed to get client: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.handleFailedToReadData = function (errorMessage) {
        console.log("Failed to read data from server: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.handleFailedToCloseClient = function (errorMessage) {
        console.log("Failed to close client: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.handleFailedToConnectToDb = function (errorMessage) {
        console.log("Failed to connect to Db: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.handleFailedToSaveDataToDb = function (errorMessage) {
        console.log("Failed to save data to db: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.handleFailedToUpdateToDb = function (errorMessage) {
        console.log("Failed to update to Db: ".concat(errorMessage, " "));
    };
    ExceptionHandler.prototype.handleFailedToGetDataToDb = function (errorMessage) {
        console.log("Failed to get from Db: ".concat(errorMessage, " "));
    };
    return ExceptionHandler;
}());
exports.ExceptionHandler = ExceptionHandler;
