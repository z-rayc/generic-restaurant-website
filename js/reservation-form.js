// TODO: Add security to not let people insert code

var form = document.querySelector("form");
var userName = document.querySelector("#name");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");

var persons = document.querySelector("#persons");
var dateTime = document.querySelector("#date-time");

var message = document.querySelector("#message");

form.onsubmit = function(e) {
    e.preventDefault();
    // alert("Table reservation has been sent. You will get an e-mail once the reservation has been confirmed.")
    
    getDateTime();
}

function printInfo() {
    let info = 
        `Name: ${userName.value}, \n`
        + `E-mail: ${email.value}, \n`
        + `Phone: ${phone.value}, \n`
        + `Persons: ${persons.value}, \n`
        + `Date and Time: ${dateTime.value}`;

        // TODO: Correct date and time format

        if (message.value.trim()) {
            info += `, \nMessage: ${message.value}`;
        }

    console.log(info);
}

function getDateTime() {
    let newDate = new Date(dateTime.value);
    console.log(newDate.toTimeString());
    return newDate;
}