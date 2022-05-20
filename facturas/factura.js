import { Empresa } from './empresa.js';
import { Producto } from './producto.js';

export class Factura {
    #empresa; //  Empresa
    #cliente; // Empresa
    #productos; // Array<Producto>
    #total;
    #totalIva;
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
        this.#calculate();
    }
    #calculate() {
        this.#productos.forEach((item) => {
            this.#total += item.price * item.quantity;
        });
        this.#totalIva = (this.#total * this.#tipoIVA) / 100;
    }
    print() {
        let productos = '';
        this.#productos.forEach((item) => {
            productos += `
            ${item.description} - ${item.price}€ - ${item.quantity}`;
        });
        console.log(`
        Empresa : ${this.#empresa.print()}
        -------------------------------
        Cliente : ${this.#cliente.print()}
        -------------------------------
            ${productos}
        ___________________________________
        IVA: ${this.#tipoIVA}%
        Forma de pago: ${this.#formaPago}
        Total:  ${this.#total}  €
        IVA ${this.#totalIva} €
        Total + IVA ${this.#total + this.#totalIva} €  `);
    }
}
