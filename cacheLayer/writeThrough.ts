import {CacheServices} from './cacheServices';
import {CacheManager} from './cacheManager';
import { ICacheAccessPatternFactory } from './cascheAccessPatternFactory';
import { MessageDaoFactory } from '../databaseLayer/daos/accessMessageDaoImplementation';
import {Logger} from '../logger';
let cacheManager = new CacheManager();
let cacheServices = new CacheServices();
let messageDaoFactory = new MessageDaoFactory();
let logger = new Logger();

const replacementPolicy = {
    replacementPolicy: 'LRU'
}
let cache;

export class WriteThrough implements ICacheAccessPatternFactory {
    async setData(key, value) {
        if(!cache) cache = cacheServices.createCache(3);
        if(cache.memory.has(key)) {
            cacheServices.replaceKeyToPositionOne(cache.memory,key)
            let messageDao =  await messageDaoFactory.getDbType('mongoDb');
            messageDao.findDataAndUpdate(key,value);
        }
        else {
            if (cache.memory.size == cache.capacity) {
               let element = cacheServices.elementToRemoveBasedOnReplacementPolicy(replacementPolicy.replacementPolicy, cache.memory);
               cacheManager.delete(cache.memory,element[0]);
            }
            cacheManager.write(cache.memory, key, value)
            let messageDao =  await messageDaoFactory.getDbType('mongoDb');
            messageDao.saveData(key, value);
        }
    }

    async getData(key, value) {
        if(!cache) cache = cacheServices.createCache(3);
        if(cache.memory.has(key)) {
            cacheServices.replaceKeyToPositionOne(cache.memory,key);
            logger.logMessage('key is present');
        }
        else {
           logger.logMessage('key is not present in cache');
        }   
    }
}
