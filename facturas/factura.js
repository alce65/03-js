import { Empresa } from './empresa.js';
import { Producto } from './producto.js';

export class Factura {
    #empresa; //  Empresa
    #cliente; // Empresa
    #productos; // Array<Producto>
    #total;
    #tipoIVA;
    #formaPago;

    constructor(
        empresa = new Empresa(), //  Empresa
        cliente = new Empresa(), // Empresa
        productos = [new Producto()], // Array<Producto>
        tipoIVA = 21, // number,
        formaPago = 'transferencia' // string
    ) {
        this.#empresa = empresa;
        this.#cliente = cliente;
        this.#productos = productos;
        this.#tipoIVA = tipoIVA;
        this.#formaPago = formaPago;
        this.#total = 0;
    }
    print() {
        // conts

        console.log(`
        Empresa : ${this.#empresa.print()}
        -------------------------------
        Cliente : ${this.#cliente.print()}
        -------------------------------
        ___________________________________
        ${this.#tipoIVA}
        ${this.#formaPago}
        ${this.#total}           
        `);
    }
}
