const currentDay = document.querySelector('#current-Day');
const utc = document.querySelector('#UTC-Time');
const date = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

days.forEach((day, index) => {
    if (index == date.getDay()) {
        currentDay.innerHTML = `<strong>Current Day:</strong> ${day}`;
    }
})
utc.innerHTML = `<strong>Current UTC Time:</strong> ${date.getUTCMilliseconds()}`;