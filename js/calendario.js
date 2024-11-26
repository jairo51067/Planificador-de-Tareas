let currentMonth = new Date().getMonth(); // Mes actual
let currentYear = new Date().getFullYear(); // Año actual

// Función para crear un calendario simple
function createCalendar(month, year) {
    const calendar = document.getElementById('calendar');
    const monthYearText = document.getElementById('month-year-text');
    const today = new Date();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Mostrar el nombre del mes y el año
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    monthYearText.innerHTML = `${monthNames[month]} ${year}`;

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th>Dom</th><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th></tr><tr>';

    // Espacios en blanco para los días antes del primer día del mes
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<td class="empty"></td>'; // Agrega la clase "empty"
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        // Si el día es hoy, agrega la clase "today"
        const isToday = (day === today.getDate()) && (month === today.getMonth()) && (year === today.getFullYear());
        calendarHTML += `<td class="${isToday ? 'today' : ''}">${day}</td>`;
        if ((day + firstDay) % 7 === 0) {
            calendarHTML += '</tr><tr>';
        }
    }

    calendarHTML += '</tr></table>';
    calendar.innerHTML = calendarHTML;
}

// Función para cambiar el mes
function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11; // Si es diciembre, vuelve a enero
        currentYear--; // Disminuye el año
    } else if (currentMonth > 11) {
        currentMonth = 0; // Si es enero, vuelve a diciembre
        currentYear++; // Aumenta el año
    }
    createCalendar(currentMonth, currentYear); // Crea el nuevo calendario
}

// Función para ir al día de hoy
function goToToday() {
    currentMonth = new Date().getMonth(); // Actualiza el mes actual
    currentYear = new Date().getFullYear(); // Actualiza el año actual
    createCalendar(currentMonth, currentYear); // Crea el calendario para el mes actual
}

// Llama a la función para crear el calendario inicialmente
createCalendar(currentMonth, currentYear);