function updateclock(){
    const now = new Date();
    let hour =now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = hour >=12? "PM":"AM";
    const clocksring=`${hour},${min},${sec},${ampm}`;
    document.getElementById("clock").textContent=clocksring;
    const options = { weekday: `short`, month: `short`, day: `numeric`, year: `numeric`};
    document.getElementById("date").textContent=now.toLocaleDateString(`en-US`,options);
}
setInterval(updateclock,1000);
updateclock();