class Collection {
    constructor(models = []) {
        this._models = models;
    }

    at(idx) {
        return this._models[idx];
    }

    add(model) {
        this._models.push(model);
    }

    *[Symbol.iterator]() {
        for(const model of this._models) {
            yield model;
        }
    }
}