const Recepcion = require('./Recepcion');
const Editor = require('./Editor');

const recepcion = new Recepcion();
const editor = new Editor();

const turnosDia = [
    { horaLlegada: 480, mascota: 'Toby', tipo: 'General', motivo: 'Control de vacunas', veterinario: 'Dr. Gómez', costo: 50000 },
    { horaLlegada: 485, mascota: 'Max', tipo: 'General', motivo: 'Revisión de piel', veterinario: 'Dra. Ríos', costo: 45000 },
    { horaLlegada: 490, mascota: 'Luna', tipo: 'Urgencia', motivo: 'Intoxicación', veterinario: 'Dr. Gómez', costo: 120000 },
    { horaLlegada: 500, mascota: 'Simón', tipo: 'General', motivo: 'Corte de uñas', veterinario: 'Dra. Ríos', costo: 25000 },
    { horaLlegada: 505, mascota: 'Kira', tipo: 'Urgencia', motivo: 'Herida en pata', veterinario: 'Dr. Gómez', costo: 90000 },
    { horaLlegada: 520, mascota: 'Nala', tipo: 'General', motivo: 'Desparasitación', veterinario: 'Dra. Ríos', costo: 40000 },
    { horaLlegada: 540, mascota: 'Rocky', tipo: 'Urgencia', motivo: 'Dificultad respirar', veterinario: 'Dr. Gómez', costo: 150000 }
];

let tiempoActual = 480;
let turnoIndex = 0;
let consultorioLibreEn = 480;
const duracionAtencion = 20;

console.log('========================================');
console.log('   SIMULACIÓN COMPLETA - PATITAS v0.2   ');
console.log('========================================\n');

while (turnoIndex < turnosDia.length || recepcion.hayPacientes()) {
    while (turnoIndex < turnosDia.length && turnosDia[turnoIndex].horaLlegada <= tiempoActual) {
        recepcion.registrarLlegada(turnosDia[turnoIndex]);
        turnoIndex++;
    }

    if (consultorioLibreEn <= tiempoActual && recepcion.hayPacientes()) {
        const paciente = recepcion.llamarSiguiente();
        if (paciente) {
            const horaAtencion = Math.max(tiempoActual, paciente.horaLlegada);
            
            // Registrar en el editor clínico (con capacidad de deshacer/rehacer)
            editor.agregarAtencion(paciente.mascota, {
                fecha: '06/10',
                motivo: paciente.motivo,
                veterinario: paciente.veterinario,
                costo: paciente.costo
            });

            consultorioLibreEn = horaAtencion + duracionAtencion;
        }
    }
    tiempoActual++;
}

// Demostración de corrección de error con deshacer
console.log('--- DEMOSTRACIÓN DE CORRECCIÓN (Deshacer) ---');
console.log('Simulando registro erróneo en mascota "Firulais"...');
editor.agregarAtencion('Firulais', { fecha: '06/10', motivo: 'Error de registro', veterinario: 'N/A', costo: 0 });
console.log('Historial de Firulais antes de deshacer:', editor.registro.obtenerHistorial('Firulais').obtenerTamanio());

console.log('Aplicando deshacer (Undo)...');
editor.deshacer();
console.log('Historial de Firulais después de deshacer:', editor.registro.obtenerHistorial('Firulais') ? editor.registro.obtenerHistorial('Firulais').obtenerTamanio() : 0);

console.log('\n--- HISTORIALES FINALES DE PACIENTES ---');
['Toby', 'Max', 'Luna', 'Simón', 'Kira', 'Nala', 'Rocky'].forEach(mascota => {
    const lista = editor.registro.obtenerHistorial(mascota);
    if (lista) {
        console.log(`🐾 ${mascota}:`);
        lista.recorrer(atencion => {
            console.log(`   - [${atencion.motivo}] Veterinario: ${atencion.veterinario} ($${atencion.costo.toLocaleString()})`);
        });
    }
});