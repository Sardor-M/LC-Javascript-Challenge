var TimeLimitedCache = function() {
    this.cache = new Map();
}

TimeLimitedCache.prototype.set = function(key, value, duration) {
   
    const now = Date.now();
    const expirationTime = now + duration;
    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        entry.value = value;
        entry.expirationTime = expirationTime;
        return true;
    } else {
        this.cache.set(key, {value: value, expirationTime: expirationTime});
        return false;
    }
};

TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();

    if (this.cache.has(key)){
        const entry = this.cache.get(key);
        if(entry.expirationTime < now) {
            this.cache.delete(key);
            return -1;
        } else {
            return entry.value;
        }
    } else {
        return -1;
    }
};

TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    
    let count = 0;
    for (const entry of this.cache.values()){
        if(entry.expirationTime >= now){
            count++;
        }
    }
    return count;
};

