costoInicialXProducto = 300
cantidadProducto = 1000
costoM3Importacion = 1850000
volumenPorProducto = 0.015
iArancel = 0.06
iArancel1 = 0.08
pesoUnidad = 1.5
flete1Ton = 600000
iva = 0.19
precioVentaPublico = 1.35
trm = 4229

def costoInicial():
    costoInicial = costoInicialXProducto * cantidadProducto * trm
    return costoInicial

print(costoInicial())

def costoImportacionxM3():
    costoImportacion = costoM3Importacion * volumenPorProducto * cantidadProducto
    return costoImportacion

print(costoImportacionxM3())

def arancel():
    costo = costoInicial()
    if cantidadProducto <= 100:
        arancel1 = costo * iArancel1
        return arancel1
    else:
        arancel2 = costo * iArancel
        return arancel2

print(arancel())

def flete():
    pesoTotal = pesoUnidad * cantidadProducto
    flete = pesoTotal * flete1Ton / 1000
    return flete

print(flete())

def ivaTotal():
    costo = costoInicial()
    ivaTotal = costo * iva
    return ivaTotal

print(ivaTotal())

def costoTotalImportacion():
    costo = costoInicial()
    importacion = costoImportacionxM3()
    arancelTotal = arancel()
    fleteTotal = flete()
    ivaTotal1 = ivaTotal()
    costoTotalImportacion = costo + importacion + arancelTotal + fleteTotal + ivaTotal1
    return costoTotalImportacion

print(costoTotalImportacion())

def precioCostoUnitario():
    costoTotal = costoTotalImportacion()
    precioCostoUnitario = costoTotal / cantidadProducto
    return precioCostoUnitario

print(precioCostoUnitario())

def precioVenta():
    costoTotal = costoTotalImportacion()
    precioVenta = costoTotal * precioVentaPublico / cantidadProducto
    return precioVenta

print(precioVenta())
