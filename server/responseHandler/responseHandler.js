"use strict";
exports.__esModule = true;
exports.RasponseHandler = void 0;
var RasponseHandler = /** @class */ (function () {
    function RasponseHandler() {
    }
    RasponseHandler.prototype.sendResponse = function (socket, message) {
        socket.write(message);
    };
    return RasponseHandler;
}());
exports.RasponseHandler = RasponseHandler;
