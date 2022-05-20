import { Empresa } from './empresa.js';
import { Factura } from './factura.js';
import { Producto } from './producto.js';

const ourCompany = new Empresa('Gingko', 'c/ Pez 1', '322323223', '6452345E');
const f1 = new Factura(
    ourCompany,
    new Empresa('Boracay', 'avda del gato', null, '362727Z'),
    [new Producto('Mouse ...', 12, 5), new Producto('PC', 1200, 2)]
);

console.log(f1);
f1.print();
