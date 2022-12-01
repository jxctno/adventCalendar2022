const today_date = new Date();

let day = Number(today_date.getDate());

if (today_date.getDate() == 1 || today_date.getDate() == 21) {
    superscript = "st"
} else if (today_date.getDate() == 2 || today_date.getDate() == 22) {
    superscript = "nd"
} else if (today_date.getDate() == 3 || today_date.getDate() == 23) {
    superscript = "rd"
} else {
    superscript = "th"
} // get the bit after 1st/2nd for date

function today() {
    document.getElementById("todaydate").innerHTML = `Today is the ${day}<sup>${superscript}</sup> of December`
    document.getElementById(`door${day}`)
}


function openDay(doorNumber) {
    if (doorNumber <= day) {
        opendoor(doorNumber)
    } else {
        alert(`Not so fast!!! \nYou can't open a door until it's day! \nYou can only open up to day ${day} today!`)
    }
}

//          DAY | 1
const messages = [[""],]

function opendoor(doorNumber) {
    document.getElementById("message").style.visibility = "visible"; // Open message
    document.getElementById("calendar").style.visibility = "hidden";
}

function closemessage() {
    document.getElementById("message").style.visibility = "hidden"; // close message
    document.getElementById("calendar").style.visibility = "visible";
}