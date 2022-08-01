const net = require('net');
import {Logger} from '../../logger';
import {ExceptionHandler} from '../../exceptionHandler/exceptionHandler';
import { ClientService } from './clientServices';
let exceptionHandler = new ExceptionHandler();
let clientService = new ClientService();
let logger = new Logger();

interface IServer {
    port: number;
    host: string;
    establishConnection:() => void;
}

export class Server implements IServer {
    public port: number; 
    public host: string
    
    constructor(port: number, host: string) {
        this.port = port;
        this.host = host;
    }
    
    async establishConnection() {
        const server = await  net.createServer();
        await server.listen(this.port, this.host, async () => {
            logger.logMessage(`server listening on ${this.host}:${this.port}`);
        }).on('error', (err) => {
            exceptionHandler.printServerConnectionError(err);
        });
        await clientService.getConnectedClient(server);
    }
}
