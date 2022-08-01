"use strict";
exports.__esModule = true;
exports.CacheServices = void 0;
var CacheServices = /** @class */ (function () {
    function CacheServices() {
    }
    CacheServices.prototype.createCache = function (capacity) {
        var cache = {
            memory: new Map(),
            capacity: capacity
        };
        return cache;
    };
    CacheServices.prototype.replaceKeyToPositionOne = function (cascheMemory, key) {
        var val = cascheMemory.get(key);
        cascheMemory["delete"](key);
        cascheMemory.set(key, val);
        return val;
    };
    CacheServices.prototype.setTimerForCacheExpiration = function (lruCache, key) {
        var timer = setInterval(function () {
            if (lruCache.size > 0) {
                lruCache["delete"](key);
            }
            else
                clearInterval(timer);
        }, 10 * 1000);
    };
    CacheServices.prototype.elementToRemoveBasedOnReplacementPolicy = function (replacePolicy, cache) {
        var elementToRemove;
        if (replacePolicy == 'LRU') {
            elementToRemove = this.getFirstElement(cache);
        }
        if (replacePolicy == 'MRU') {
            elementToRemove = this.getLastElement(cache);
        }
        return elementToRemove;
    };
    CacheServices.prototype.getFirstElement = function (cache) {
        var iterator = cache.entries();
        var firstIteration = iterator.next();
        return firstIteration.value;
    };
    CacheServices.prototype.getLastElement = function (cache) {
        var iterator = cache.entries();
        var lastIteration;
        for (var i = 0; i < (cache.size); i++) {
            lastIteration = iterator.next();
        }
        return lastIteration.value;
    };
    return CacheServices;
}());
exports.CacheServices = CacheServices;
