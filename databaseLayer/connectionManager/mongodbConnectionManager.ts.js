"use strict";
exports.__esModule = true;
exports.MongodbCientManager = void 0;
var exceptionHandler_1 = require("../../exceptionHandler/exceptionHandler");
var exceptionHandler = new exceptionHandler_1.ExceptionHandler();
var MongoClient = require('mongodb').MongoClient;
var constants_1 = require("../../constants");
var MongodbCientManager = /** @class */ (function () {
    function MongodbCientManager() {
    }
    MongodbCientManager.prototype.establishConnection = function (connectionUrl) {
        return new Promise(function (resolve, reject) {
            var dbConnection = null;
            try {
                MongoClient.connect(connectionUrl, function (err, client) {
                    dbConnection = client.db(constants_1.dataBase.dbName);
                    resolve(dbConnection);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    MongodbCientManager.prototype.closeConnection = function () {
        MongoClient.close();
    };
    return MongodbCientManager;
}());
exports.MongodbCientManager = MongodbCientManager;
