"use strict";
exports.__esModule = true;
exports.ValidateService = void 0;
var exceptionHandler_1 = require("../exceptionHandler/exceptionHandler");
var exceptionHandler = new exceptionHandler_1.ExceptionHandler();
var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateKey = function (key, operation) {
        try {
            if (Buffer.byteLength(key) > 250) {
                throw new Error("Key should be upto 250 bytes");
            }
        }
        catch (err) {
            exceptionHandler.printvalidationError(err, operation);
        }
    };
    ValidateService.prototype.validateValue = function (value, operation) {
        try {
            if (Buffer.byteLength(value) > 1000000) {
                throw new Error("Value should be upto 1 megaBytes");
            }
        }
        catch (err) {
            exceptionHandler.printvalidationError(err, operation);
        }
    };
    return ValidateService;
}());
exports.ValidateService = ValidateService;
