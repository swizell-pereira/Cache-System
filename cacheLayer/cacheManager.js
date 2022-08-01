"use strict";
exports.__esModule = true;
exports.cacheManager = exports.CacheManager = void 0;
var cacheServices_1 = require("./cacheServices");
var cacheServices = new cacheServices_1.CacheServices();
var CacheManager = /** @class */ (function () {
    function CacheManager() {
    }
    CacheManager.prototype.read = function (lruCache, key) {
        return lruCache.get(key);
    };
    CacheManager.prototype.write = function (lruCache, key, value) {
        lruCache.set(key, value);
        cacheServices.setTimerForCacheExpiration(lruCache, key);
    };
    CacheManager.prototype["delete"] = function (lruCache, key) {
        lruCache["delete"](key);
    };
    return CacheManager;
}());
exports.CacheManager = CacheManager;
exports.cacheManager = new CacheManager();
