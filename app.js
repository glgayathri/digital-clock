

clock = () => {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    //console.log(`${hours}:${minutes}:${seconds}` );

    (hours < 10) ? hours = "0" + hours : hours;
    (minutes < 10) ? minutes = "0" + minutes : minutes;
    (seconds < 10) ? seconds = "0" + seconds : seconds; 

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = `: ${minutes}`;
    document.getElementById("second").innerHTML = `: ${seconds}`;
}


setInterval(clock, 1000);