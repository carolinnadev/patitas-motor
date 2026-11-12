const Cola = require('../src/Cola');

console.log('=== PRUEBAS DE COLA (FIFO) ===\n');
const colaTurnos = new Cola();

colaTurnos.encolar({ mascota: 'Toby', motivo: 'Control de vacunas' });
colaTurnos.encolar({ mascota: 'Max', motivo: 'Revisión de piel' });
colaTurnos.encolar({ mascota: 'Luna', motivo: 'Intoxicación' });

console.log('Frente actual:', colaTurnos.verFrente().mascota); // Toby
console.log('Tamaño de la cola:', colaTurnos.obtenerTamanio()); // 3

console.log('Desencolando:', colaTurnos.desencolar().mascota); // Toby
console.log('Desencolando:', colaTurnos.desencolar().mascota); // Max
console.log('Nuevo frente:', colaTurnos.verFrente().mascota); // Luna
console.log('Tamaño final:', colaTurnos.obtenerTamanio()); // 1