# Bitácora de Desarrollo - Patitas Motor v0.1
**Módulo:** Estructuras de Datos (Listas Enlazadas)  
**Proyecto:** Patitas Motor (Clínica Veterinaria)  

---

## 1. MiniReto 1: La consulta cero (Nodo y recorrido manual)

### Diagrama conceptual de nodos enlazados
```text
[ CABEZA ]
   │
   ▼
┌─────────────────────────────┐        ┌─────────────────────────────┐        ┌─────────────────────────────┐
│ dato: {fecha: "02/02", ...} │        │ dato: {fecha: "15/03", ...} │        │ dato: {fecha: "20/05", ...} │
│ siguiente: ─────────────────┼───────►│ siguiente: ─────────────────┼───────►│ siguiente: null             │
└─────────────────────────────┘        └─────────────────────────────┘        └─────────────────────────────┘

## 5. MiniReto 8: Tabla de Estructuras del Motor Patitas v0.2

| Estructura | Principio | Uso en Patitas Motor | Operación Principal | Complejidad |
| :--- | :--- | :--- | :--- | :--- |
| **Lista Enlazada** | Secuencial / Punteros | Historial clínico de atenciones por mascota | Acceso / Búsqueda / Eliminación | $O(n)$ (Inserciones $O(1)$) |
| **Cola (Queue)** | FIFO (First In, First Out) | Sala de espera y gestión de turnos de la recepción | `encolar()` / `desencolar()` | $O(1)$ |
| **Pila (Stack)** | LIFO (Last In, First Out) | Sistema de deshacer y rehacer (`undo/redo`) | `apilar()` / `desapilar()` | $O(1)$ |