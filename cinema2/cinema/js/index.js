let bookedSeats = [];

document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('taken')) {
                selectSeat(seat);
            } else {
                alert('Это место занято!');
            }
        });
    });
});

function toggleInfo(infoId) {
    const infoBlocks = document.querySelectorAll('.info');
    infoBlocks.forEach(info => {
        info.style.display = 'none'; 
    });
    const infoBlock = document.getElementById(infoId);
    if (infoBlock) {
        infoBlock.style.display = 'block'; 
    }
}

function selectSeat(seat) {
    if (!seat.classList.contains('selected')) {
        seat.classList.add('selected');
        bookedSeats.push(seat.textContent);
    } else {
        alert('Вы уже выбрали это место!');
    }
}

function resetSelection() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });
    bookedSeats = []; 
}

function bookTickets() {
    if (bookedSeats.length > 0) {
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        alert("Выбранные места: " + bookedSeats.join(', ') + "\nТелефон: " + phone + "\nEmail: " + email);
        
        bookedSeats.forEach(seatNumber => {
            const seat = [...document.querySelectorAll('.seat')].find(s => s.textContent === seatNumber);
            if (seat) {
                seat.classList.add('taken');
                seat.classList.remove('selected');
            }
        });
        bookedSeats = []; 
    } else {
        alert('Пожалуйста, выберите хотя бы одно место.');
    }
}

function getSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    return Array.from(selectedSeats).map(seat => seat.textContent); 
}
