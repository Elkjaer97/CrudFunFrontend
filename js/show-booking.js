

async function wait4Fetch(){
    await getAllBookings();
    printBookingList();
}

wait4Fetch();

// Denne method printer hele vores bookinglist ud
function printBookingList() {
    // Looper for hver booking der er i databasen, og skriver info ud på skærmen.
    for (let key of bookingMap.keys()) {
        let bookingKey = bookingMap.get(key);

        let childAppender = document.createElement('div');
        childAppender.setAttribute("class", "appending");
        inputWrapper.appendChild(childAppender);

        //Overskrift
        const svommebasin = document.createElement("h1");
        svommebasin.innerHTML = "Svømmebasin nr:";
        //Info om basin
        const basin = document.createElement("p");
        basin.innerHTML = bookingKey.basin;

        const svommebane = document.createElement("h1")
        svommebane.innerHTML = "Bane nr:"

        //Info om bane
        const bane = document.createElement("p");
        bane.innerHTML = bookingKey.bane;

        //Laver en edit button og giver den values
        const editButton = document.createElement('input');
        editButton.type = "button";
        editButton.setAttribute('value', 'Edit svømmebasin og svømmebane');
        editButton.setAttribute('class', 'button');

        //Appender dem så de vises på siden
        childAppender.appendChild(svommebasin);
        childAppender.appendChild(basin);
        childAppender.appendChild(svommebane);
        childAppender.appendChild(bane);
        childAppender.appendChild(editButton);

        // Når vi trykker på edit, kommer delebutton og ny sumbit change button frem
        editButton.onclick = function () {

            const editSvommebasin = document.createElement('input');
            editSvommebasin.setAttribute('value', bookingKey.basin);

            const editSvommebane = document.createElement('input');
            editSvommebane.setAttribute('value', bookingKey.bane);

            const submitButton = document.createElement('input');
            submitButton.type = 'button';
            submitButton.setAttribute('value', "Submit Change");
            submitButton.setAttribute('class', 'button');

            const deleteButton = document.createElement('input');
            deleteButton.setAttribute("class", "button");
            deleteButton.type = "button";
            deleteButton.setAttribute("value", "Delete Booking");

            //Appender de nye ting knapper, efter tryk på Edit
            svommebasin.appendChild(editSvommebasin);
            svommebane.appendChild(editSvommebane);
            childAppender.appendChild(submitButton);
            childAppender.appendChild(deleteButton);

            //Function for submit
            submitButton.onclick = function (){
                updateBooking(bookingKey.bookId, editSvommebasin.value, editSvommebane.value);
                location.href ="../html/show-svømmehal.html"

            }
            //Function for delete
            deleteButton.onclick = function () {
               deleteBooking(bookingKey.bookId);
               location.href = "../html/show-svømmehal.html"
            }
        }
    }
}

// Update methoden
async function updateBooking(id, newBasin, newBane){

    const URL = "http://localhost:8080/booking/update/" + id;

    const updateBookingJson = {
        "bookId": id,
        "basin": newBasin,
        "bane": newBane
    }

    const updateBookingObj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateBookingJson)
    }
    await fetch(URL, updateBookingObj);
}
// Delete methoden
async function deleteBooking(id){
    const URL = "http://localhost:8080/booking/delete/" + id;
    const deleteBookingObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }
    await fetch(URL, deleteBookingObj);
}





