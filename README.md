# Patitas Motor - v0.1

Motor backend desarrollado para la clínica veterinaria Patitas en Envigado, implementando estructuras de datos dinámicas desde cero (Listas Enlazadas) en Node.js.

## Estructura del Proyecto
- `src/Nodo.js`: Definición de la unidad mínima de atención.
- `src/ListaEnlazada.js`: Motor con operaciones O(1) de inserción, búsqueda y eliminación.
- `src/RegistroClinico.js`: Gestor de historiales médicos por mascota.
- `src/reporte.js`: Script ejecutable para generar el reporte general.
- `pruebas/`: Casos de prueba unitarios para nodos y lista.

## Cómo ejecutar
Ejecuta el reporte clínico principal con Node.js:
```bash
node src/reporte.js