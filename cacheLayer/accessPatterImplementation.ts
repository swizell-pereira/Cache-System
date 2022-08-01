import {WriteThrough} from './writeThrough';
import {WriteAround} from './writeAround';
import {WriteBack} from './writeBack';

export class AccessPatternFactory { 
    
    async getAccesssMode(accessMode) {
        if(accessMode == 'writeThrough')
        {
            return new WriteThrough();
        }
        if(accessMode == 'writeBack') {
            return new WriteBack();
        }
        if(accessMode == 'writeAround') {
            return new WriteAround();
        }
    }
}