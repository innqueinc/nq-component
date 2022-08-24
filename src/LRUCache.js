class LRUCache {
    constructor(limit = 10) {
        this.limit = limit;
        this.cache = new Map();
    }

    get(key) {
        return this.cache.get(key);
    }

    put(key, value) {
        this.delete(key);// if key already exist need to delete first to perform update
        if (this.cache.size === this.limit) {
            this.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }

    values() {
        return Array.from(this.cache.values());
    }

    delete(key) {
        this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }

    size() {
        return this.cache.size;
    }
}

export default LRUCache;
