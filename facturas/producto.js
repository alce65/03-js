export class Producto {
    #description;
    #price;
    #quantity;

    get description() {
        return this.#description;
    }

    get price() {
        return this.#price;
    }

    get quantity() {
        return this.#quantity;
    }

    constructor(description = '', price = 0, quantity = 1) {
        this.#description = description;
        this.#price = price;
        this.#quantity = quantity;
    }
}
