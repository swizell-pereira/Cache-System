"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RequestHandler = void 0;
var accessPatterImplementation_1 = require("../../cacheLayer/accessPatterImplementation");
var responseHandler_1 = require("../responseHandler/responseHandler");
var validateService_1 = require("../../validationLayer/validateService");
var accessPatternFactory = new accessPatterImplementation_1.AccessPatternFactory();
var responseHandler = new responseHandler_1.RasponseHandler();
var validateService = new validateService_1.ValidateService();
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
    }
    RequestHandler.prototype.serializeRequest = function (request) {
        return request.toString().split(" ");
    };
    RequestHandler.prototype.handleRequest = function (request, socket) {
        return __awaiter(this, void 0, void 0, function () {
            var requestArguments, command, accessMode, accessMode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestArguments = this.serializeRequest(request);
                        if (requestArguments.length === 0) {
                            responseHandler.sendResponse(socket, 'Error no arguments passed');
                        }
                        command = requestArguments[0];
                        if (requestArguments[1])
                            validateService.validateKey(requestArguments[1], command);
                        if (requestArguments[2])
                            validateService.validateValue(requestArguments[2], command);
                        if (!(command === "Set")) return [3 /*break*/, 3];
                        return [4 /*yield*/, accessPatternFactory.getAccesssMode('writeThrough')];
                    case 1:
                        accessMode = _a.sent();
                        return [4 /*yield*/, accessMode.setData(requestArguments[1], requestArguments[2])];
                    case 2:
                        _a.sent();
                        responseHandler.sendResponse(socket, 'Data is set');
                        _a.label = 3;
                    case 3:
                        if (!(command === "Get")) return [3 /*break*/, 6];
                        return [4 /*yield*/, accessPatternFactory.getAccesssMode('writeThrough')];
                    case 4:
                        accessMode = _a.sent();
                        return [4 /*yield*/, accessMode.getData(requestArguments[1], requestArguments[2])];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
