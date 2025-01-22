
document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const eventList = document.getElementById('eventList');
    const saveEventBtn = document.getElementById('saveEvent');
    const searchBar = document.getElementById('searchBar');
  
    function generateCalendar() {
        for (let i = 1; i <= 30; i++) {
            const day = document.createElement('div');
            day.innerText = i;
            day.dataset.date = `2025-01-${i.toString().padStart(2, '0')}`;
            day.addEventListener('click', () => openEventModal(day.dataset.date));
            calendar.appendChild(day);
        }
    }

    function openEventModal(date) {
        document.getElementById('eventDate').value = date;
        document.getElementById('eventModalLabel').innerText = `Add Event for ${date}`;
        new bootstrap.Modal(document.getElementById('eventModal')).show();
    }

    saveEventBtn.addEventListener('click', () => {
        const name = document.getElementById('eventName').value;
        const date = document.getElementById('eventDate').value;
        const time = document.getElementById('eventTime').value;
        const desc = document.getElementById('eventDescription').value;

        if (name && date && time && desc) {
            addEvent(name, date, time, desc);
            bootstrap.Modal.getInstance(document.getElementById('eventModal')).hide();
        } else {
            alert('Please fill all fields!');
        }
    });

    function addEvent(name, date, time, desc) {
        const eventItem = document.createElement('li');
        eventItem.className = 'list-group-item';
        eventItem.innerHTML = `<strong>${name}</strong> - ${date} ${time}<br>${desc}`;
        eventList.appendChild(eventItem);
    }

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const events = document.querySelectorAll('#eventList .list-group-item');
        events.forEach(event => {
            event.style.display = event.innerText.toLowerCase().includes(query) ? '' : 'none';
        });
    });
    generateCalendar();
});



