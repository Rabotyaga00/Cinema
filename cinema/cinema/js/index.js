document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', () => {
        alert("Бронирование завершено!");
    });

    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('taken')) {
                seat.classList.toggle('selected');
                updateTotalCost();
            } else {
                alert('Это место занято!');
            }
        });
    });

    // Update total cost based on selected seats
    function updateTotalCost() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const totalCost = selectedSeats.length * 500; // Assume 500 is the price per seat
        document.getElementById('total-cost').innerText = `Общая стоимость: ${totalCost} рублей`;
    }

    // Reset selection
    document.getElementById('reset-selection').addEventListener('click', () => {
        seats.forEach(seat => seat.classList.remove('selected'));
        updateTotalCost();
    });

    // Toggle info blocks
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const infoBlocks = document.querySelectorAll('.info');
            infoBlocks.forEach(info => info.style.display = 'none');
            const infoBlock = button.nextElementSibling;
            if (infoBlock) {
                infoBlock.style.display = 'block';
            }
        });
    });
});
