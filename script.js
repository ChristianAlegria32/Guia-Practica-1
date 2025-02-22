function verifyAge() {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const resultado = document.getElementById('resultado');

    if (!nombre || isNaN(edad)) {
        resultado.style.backgroundColor = '#ffebee';
        resultado.textContent = 'Por favor, completa todos los campos correctamente.';
        return;
    }

    const mensaje = edad >= 18 
        ? `Hola ${nombre}, eres mayor de edad.`
        : `Hola ${nombre}, eres menor de edad.`;

    resultado.style.backgroundColor = edad >= 18 ? '#e8f5e9' : '#ffe6e6';
    resultado.textContent = mensaje;
}