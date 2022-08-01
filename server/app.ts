
import { socket } from '../constants';
import { Server } from './services/server'

async function startApplication() {
    let serverInstance = new Server(socket.port, socket.host);
    await serverInstance.establishConnection();
    
}

startApplication();
