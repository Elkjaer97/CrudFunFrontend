'use strict';

const saveBookingUrl = "http://localhost:8080/booking/save";


let postRequestBooking = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let bookingJson = {
    "bookId": "",
    "basin": "",
    "bane": ""
}

function createBooking(){
    let inpValue1 = document.getElementById("svommebasin");
    let inpValue2 = document.getElementById("bane");

    bookingJson.basin = inpValue1.value;
    bookingJson.bane = inpValue2.value;

    postRequestBooking.body = JSON.stringify(bookingJson)
    fetch(saveBookingUrl, postRequestBooking).catch((error) => console.log(error));
}


