let costoInicialXProducto = 300;
let cantidadProducto = 500;
let costoM3Importacion = 1850000;
let iArancel = 0.06;
let iArancel1 = 0.08;
let pesoUnidad = 1.5;
let flete1Ton = 600000;
let iva = 0.19;
let costoVenta = 1.35;
let trm = 4229;
function costoInicial(){
    const costoInicial = costoInicialXProducto * cantidadProducto * trm;
    return costoInicial
}
console.log(costoInicial());
function costoImportacion(){
    const costoImportacion = costoM3Importacion * 0.023 * cantidadProducto;
    return costoImportacion
}
console.log(costoImportacion());
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
    const importacion = costoImportacion();
    const arancelTotal = arancel();
    const fleteTotal = flete();
    const ivaTotal1 = ivaTotal();
    const costoTotalImportacion = costo + importacion + arancelTotal +
fleteTotal + ivaTotal1;
    return costoTotalImportacion;
}
console.log(costoTotalImportacion());
function precioCostoUnitario(){
    const costoTotal =  costoTotalImportacion();
    const precioCostoUnitario = costoTotal/cantidadProducto;
    return precioCostoUnitario;
}
console.log(precioCostoUnitario());
function precioVenta(){
    const costoTotal =  costoTotalImportacion();
    const precioVenta = costoTotal * 1.35/cantidadProducto;
    return precioVenta
}
console.log(precioVenta());