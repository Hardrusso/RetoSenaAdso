<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formularioInicial</title>

    <!-- Agrega el enlace a los estilos de Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 py-10 px-4">

<div class="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">

    <h1 class="text-3xl font-semibold mb-4">Inventario Productos</h1>

    <form action="registro.php" method="post">
        <div class="mb-4">
            <label for="nombreProducto" class="block text-sm font-medium text-gray-600">Nombre:</label>
            <input type="text" name="nombreProducto" id="nombreProducto" required
                class="mt-1 p-2 rounded border w-full">
        </div>

        <div class="mb-4">
            <label for="precioUnitario" class="block text-sm font-medium text-gray-600">Precio Unitario:</label>
            <input type="text" name="precioUnitario" id="precioUnitario" required
                class="mt-1 p-2 rounded border w-full">
        </div>

        <div class="mb-4">
            <label for="cantidadProducto" class="block text-sm font-medium text-gray-600">Cantidad Importada:</label>
            <input type="text" name="cantidadProducto" id="cantidadProducto" required
                class="mt-1 p-2 rounded border w-full">
        </div>

        <div class="mb-4">
            <label for="pesoUnidad" class="block text-sm font-medium text-gray-600">Peso en Kg por Unidad:</label>
            <input type="text" name="pesoUnidad" id="pesoUnidad" required
                class="mt-1 p-2 rounded border w-full">
        </div>

        <div class="mb-4">
            <label for="volumenUnidad" class="block text-sm font-medium text-gray-600">Volumen en m3 por Unidad:</label>
            <input type="text" name="volumenUnidad" id="volumenUnidad" required
                class="mt-1 p-2 rounded border w-full">
        </div>

        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Agregar nuevo registro</button>
    </form>

</div>

<script src="/app.js"></script>

</body>
</html>
