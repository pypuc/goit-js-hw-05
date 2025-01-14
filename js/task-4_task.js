class StringBuilder {
    constructor (valueOriginal) {
        this._value = valueOriginal
    }
    get valueOriginal() {
        return this._value
    }
    append(str) {
        this._value += str;
    }
}