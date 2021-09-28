var seatsContainer = document.querySelector('.seats-container');

seatsContainer.addEventListener('click', selectSeat);
var movieSelect = document.getElementById('movie');
var ticketPrice = movieSelect.value;
 

function selectSeat(event){
    console.log(event.target);
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected');
    }

    updateTicketsCountAndPrice();
}

function updateTicketsCountAndPrice(){
    //no of tickets = no of selected seats
    var selectedSeats = document.querySelectorAll('.row .selected');
    var numberOfTickets = selectedSeats.length;
    document.getElementById('count').innerText = numberOfTickets;
    document.getElementById('total').innerText = numberOfTickets * Number(ticketPrice);
}

movieSelect.addEventListener('change', updateTicketPrice);

function updateTicketPrice(){
    ticketPrice = movieSelect.value;
    updateTicketsCountAndPrice();
}