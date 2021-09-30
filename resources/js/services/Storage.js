const Storage = {
    prefix: process.env.MIX_STORAGE_KEY || 'laravel_vue',

    set (key, data) {
        localStorage.setItem(this.getKey(key), data)
    },

    get (key, def = null) {
        return localStorage.getItem(this.getKey(key)) || def
    },

    setJSON (key, data) {
        let json = JSON.stringify(data)
        this.set(key, json)
    },

    getJSON (key) {
        let data = this.get(key)
        return JSON.parse(data)
    },

    getKey (key) {
        return `${this.prefix}_${key}`
    },

    remove (key) {
        if (Array.isArray(key)) {
            key.forEach(value => {
                localStorage.removeItem(this.getKey(value))
            })
        } else {
            localStorage.removeItem(this.getKey(key))
        }
    }
}

export { Storage }
