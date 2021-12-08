const getBookingURL = "http://localhost:8080/booking/get"
const inputWrapper = document.querySelector(".inputWrapper")
let bookingMap = new Map();

async function getBookings(){
    return fetch(getBookingURL).then(response => response.json());
}

async function callGetBooking(){ // LÆS
    const promise = getBookings(); // LÆS
    await promise.then(createBookingMap); // LÆS
}

//let bookingMap = new Map();

function createBookingMap(data) {
    data.forEach(booking => {
        bookingMap.set(booking.bookId, booking)
    })
}

async function getAllBookings(){
    await callGetBooking();
}