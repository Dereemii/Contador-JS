//CYBER 2020 - CONTADOR
if (
    document.getElementById("day") &&
    document.getElementById("hour") &&
    document.getElementById("minute") &&
    document.getElementById("second")
) {
    console.log("elements found in the DOM -- chronometer");
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date("November 2, 2020 00:00:00").getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("day").innerText = Math.floor(distance / day)),
            (document.getElementById("hour").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minute").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("second").innerText = Math.floor(
                (distance % minute) / second
            ));

        
        }, second);
} else {
    console.log("elements not found in the DOM -- chronometer");
}

