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

