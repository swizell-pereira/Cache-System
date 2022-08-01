import { RequestHandler } from '../requestHandler/requestHandler';
import { Logger } from '../../logger';
import { RasponseHandler } from '../responseHandler/responseHandler';
import {ExceptionHandler} from '../../exceptionHandler/exceptionHandler';
let exceptionHandler = new ExceptionHandler();
let requestHandler = new RequestHandler();
let responseHandler = new RasponseHandler();
let logger = new Logger();

export class ClientService {
    async getConnectedClient(server) {
        await server.on('connection', async (socket) => { 
            var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
            logger.logMessage(`new client connected: ${clientAddress}`);
            this.readDataFromClient(socket, clientAddress);
        }).on('error', (err) => {
            exceptionHandler.handleFailedToGetClient(err);
        });
    }

    readDataFromClient(socket, clientAddress) {
        socket.on('data', async (data) => {
            logger.logMessage(`Client ${clientAddress}: ${data}`);
            await requestHandler.handleRequest(data, socket)
            let responseMessage = `${socket.remoteAddress} + ':' + ${socket.remotePort} + " said " + ${data} + '\n'`
            responseHandler.sendResponse(socket,responseMessage)
        });
    }
}
