import { CacheServices } from './cacheServices'
let cacheServices = new CacheServices();

interface ICacheManager {
    read(lruCache, key),
    write(lruCache, key, value)
}

export class CacheManager implements ICacheManager{
    read(lruCache, key) {
        return lruCache.get(key)
    }

    write(lruCache, key, value) {
        lruCache.set(key, value)
        cacheServices.setTimerForCacheExpiration(lruCache, key);
    }

    delete(lruCache, key) {
        lruCache.delete(key)
    }
}

export let cacheManager = new CacheManager()