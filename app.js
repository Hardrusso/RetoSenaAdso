let costoInicialXProducto = 300;
let cantidadProducto = 1000;
let costoM3Importacion = 1850000;
let volumenPorProducto = 0.015
let iArancel = 0.06;
let iArancel1 = 0.08;
let pesoUnidad = 1.5;
let flete1Ton = 600000;
let iva = 0.19;
let precioVentaPublico = 1.35;
let trm = 4229;

function costoInicial(){
    const costoInicial = costoInicialXProducto * cantidadProducto * trm;
    return costoInicial
}
console.log(costoInicial());


function costoImportacionxM3(){
    const costoImportacion = costoM3Importacion * volumenPorProducto * cantidadProducto;
    return costoImportacion
}
console.log(costoImportacionxM3());


function arancel (){
    const costo = costoInicial();
    if (cantidadProducto <= 100){
        const arancel1 = costo*iArancel1;
        return arancel1;
    }else{
        const arancel2 = costo*iArancel;
        return arancel2;
    }
}
console.log(arancel());


function flete(){
    const pesoTotal = pesoUnidad * cantidadProducto;
    const flete = pesoTotal * flete1Ton / 1000;
    return flete;
}
console.log(flete());


function ivaTotal(){
    const costo = costoInicial();
    const ivaTotal = costo * iva;
    return ivaTotal;
}
console.log(ivaTotal());

function costoTotalImportacion(){
    const costo = costoInicial();
    const importacion = costoImportacionxM3();
    const arancelTotal = arancel();
    const fleteTotal = flete();
    const ivaTotal1 = ivaTotal();
    const costoTotalImportacion = costo + importacion + arancelTotal + fleteTotal + ivaTotal1;
    return costoTotalImportacion;
}
console.log(costoTotalImportacion());

function precioCostoUnitario(){
    const costoTotal = costoTotalImportacion();
    const precioCostoUnitario = costoTotal/cantidadProducto;
    return precioCostoUnitario;
}
console.log(precioCostoUnitario());

function precioVenta(){
    const costoTotal = costoTotalImportacion();
    const precioVenta = costoTotal * precioVentaPublico/cantidadProducto;
    return precioVenta
}
console.log(precioVenta());