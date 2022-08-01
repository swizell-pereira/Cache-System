
export class CacheServices {
    createCache(capacity) {
        let cache = {
            memory: new Map(),
            capacity: capacity
        };
        return cache;
    }

    replaceKeyToPositionOne(cascheMemory, key) {
        const val = cascheMemory.get(key)
        cascheMemory.delete(key)
        cascheMemory.set(key, val)
        return val;
    }

    setTimerForCacheExpiration(lruCache,key) {
        let timer = setInterval( function () {
            if(lruCache.size>0) {
                lruCache.delete(key);
            }
            else 
            clearInterval(timer);
        }, 10 * 1000)
    }

    elementToRemoveBasedOnReplacementPolicy(replacePolicy, cache) {
        let elementToRemove;
        if(replacePolicy == 'LRU') {
            elementToRemove = this.getFirstElement(cache)
        }
        if(replacePolicy == 'MRU') {
            elementToRemove = this.getLastElement(cache)
        }
        return elementToRemove
    }

    getFirstElement(cache) {
        const iterator = cache.entries()
        const firstIteration = iterator.next();
        return firstIteration.value;
    }

    getLastElement(cache) {
        const iterator = cache.entries()
        let lastIteration
        for (let i=0; i<(cache.size); i++) {
            lastIteration = iterator.next()
        }
        return lastIteration.value;
    }
}