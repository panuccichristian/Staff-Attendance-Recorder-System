function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getMinutes();

    // pad single digits with leading zeros
    hours   = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2,'0');
    seconds  =  String(seconds).padStart(2,'0');
    const currentTime = '${hours}:${minutes}:${seconds}';
    document.getElementById('clock').textcontent =currentTime;

}

//update clock immediatly and every second
updateClock();
setInterval(updateClock, 1000); 
    
