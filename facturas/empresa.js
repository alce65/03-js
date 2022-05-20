export class Empresa {
    #name;
    #address;
    #phone;
    #nif;

    /* Ejemplos de getter y setter
    
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    } */

    constructor(name = '', address = '', phone = '', nif = '') {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#nif = nif;
    }
    print() {
        return `${this.#name} - ${this.#nif}
        -------------
        ${this.#address} - ${this.#phone}`;
    }
}
