export class RasponseHandler {
    sendResponse(socket, message) {
        socket.write(message);
    }
}