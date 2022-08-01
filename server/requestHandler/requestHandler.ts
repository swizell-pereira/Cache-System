import {AccessPatternFactory} from '../../cacheLayer/accessPatterImplementation';
import { RasponseHandler } from '../responseHandler/responseHandler';
import { ValidateService } from '../../validationLayer/validateService';
let accessPatternFactory = new AccessPatternFactory();
let responseHandler = new RasponseHandler();
let validateService = new ValidateService();

export class RequestHandler {
    serializeRequest(request) {
        return request.toString().split(" ");
    }

    async handleRequest(request, socket) {
        const requestArguments = this.serializeRequest(request);
            if(requestArguments.length === 0) {
                responseHandler.sendResponse(socket,'Error no arguments passed')
            }
            const command = requestArguments[0];
            if(requestArguments[1]) validateService.validateKey(requestArguments[1], command)
            if(requestArguments[2]) validateService.validateValue(requestArguments[2], command)
            if (command === "Set") {
               let accessMode =  await accessPatternFactory.getAccesssMode('writeThrough');
               await accessMode.setData(requestArguments[1], requestArguments[2]) 
               responseHandler.sendResponse(socket,'Data is set')
            }
            if (command === "Get") {
                let accessMode =  await accessPatternFactory.getAccesssMode('writeThrough');
                await accessMode.getData(requestArguments[1], requestArguments[2]) 
            }  
    }
}