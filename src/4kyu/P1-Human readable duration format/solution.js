function formatDuration(seconds) {
    let format = [];
    let years = 0;
    let days = 0;
    let hours = 0;
    let mins = 0;
    let sec = 0;
    let count = 0;
    if (seconds === 0) {
        return "now";
    }
    // years
    if (seconds >= 31536000) {
        count++;
        while (seconds >= 31536000) {
            years++;
            seconds = seconds - 31536000;
        }

        if (years > 1) {
            format[0] = years + " years,";
        } else if (years === 1) {
            format[0] = years + " year,";
        }
    }

    //Days
    if (seconds >= 86400) {
        count++;
        while (seconds >= 86400) {
            days++;
            seconds = seconds - 86400;
        }

        if (days > 1) {
            format[1] = days + " days,";
        } else if (days === 1) {
            format[1] = days + " day,";
        }
    }

    //hours
    if (seconds >= 3600) {
        count++;
        while (seconds >= 3600) {
            hours++;
            seconds = seconds - 3600;
        }

        if (hours > 1) {
            format[2] = hours + " hours,";
        } else if (hours === 1) {
            format[2] = hours + " hour,";
        }
    }

    //mins
    if (seconds >= 60) {
        count++;
        while (seconds >= 60) {
            mins++;
            seconds = seconds - 60;
        }

        if (mins > 1) {
            format[3] = mins + " minutes,";
        } else if (mins === 1) {
            format[3] = mins + " minute,";
        }
    }

    //sec

    while (seconds > 0) {
        sec++;
        seconds = seconds - 1;
    }

    if (sec > 1) {
        count++;
        format[4] = sec + " seconds,";
    } else if (sec === 1) {
        count++;
        format[4] = sec + " second,";
    }
    //   format = format.toString("");
    format = format.join("");
    format = format.split(",");
    console.log(count);
    console.log(format.length);
    let length = format.length - 2;
    if (count === 1) {
        format = format.join("");
        return format;
    } else if (count === 2) {
        format.splice(format.length - 2, 0, " and ");
    } else {
        for (let i = 0; i < format.length - 2; i++) {
            if (i % 2 != 0) {
                format.splice(i, 0, ", ");
            }
        }

        format[format.length - 2] = " and " + format[format.length - 2];
    }
    console.log("length" + format.length);
    console.log(count);
    format = format.join("");

    return format;
}

console.log(formatDuration(1), "1 second");