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
    alert("Table reservation has been sent. You will get an e-mail once the reservation has been confirmed.")

    printInfo();
}

function printInfo() {
    let info = 
        `Name: ${userName.value}, \n`
        + `E-mail: ${email.value}, \n`
        + `Phone: ${phone.value}, \n`
        + `Persons: ${persons.value}, \n`
        + `Date and Time: ${getDateTimeString(dateTime.value)}`;

        if (message.value.trim()) {
            info += `, \nMessage: ${message.value}`;
        }

    console.log(info);
}

function getDateTimeString(date) {
    let newDate = new Date(date);
    let dateString = newDate.getDate() + "." + (newDate.getMonth()+1)
        + "." + newDate.getFullYear() + ", "
        + newDate.getHours() + ":" + newDate.getMinutes();
    return dateString;
}