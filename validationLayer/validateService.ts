import {ExceptionHandler} from '../exceptionHandler/exceptionHandler';
let exceptionHandler = new ExceptionHandler();

export class ValidateService {
    validateKey(key, operation) {
        try {
            if(Buffer.byteLength(key) > 250) {
                throw new Error(`Key should be upto 250 bytes`)
            }
        }
        catch(err) {
            exceptionHandler.printvalidationError(err, operation)
        }
    }

    validateValue(value, operation) {
        try {
            if(Buffer.byteLength(value) > 1000000) {
                throw new Error(`Value should be upto 1 megaBytes`)
            }
        }
        catch(err) {
            exceptionHandler.printvalidationError(err, operation)
        }
    }
}