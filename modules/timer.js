const timers = () => {
    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {

                const now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
            }, 0)
    }());
    
    let Interval;
    let second = 0;
    let tens = 0;
    let outputSecond = document.querySelectorAll('.second')
    let outputTens = document.querySelectorAll('.tens')
    clearInterval(Interval);
    Interval = setInterval(startTime, 10)
    function startTime(){
        tens++;
        if(tens <= 9){
            outputTens.forEach(elt =>{
                elt.innerHTML = '0' + tens;
            })
        }
        if(tens > 9){
            outputTens.forEach(elt =>{
                elt.innerHTML = tens;
            })
        }
        if(tens > 99){
            second++;
            outputSecond.forEach(seconds =>{
                seconds.innerHTML = '0' + second;
            })
            tens = 0;
             outputTens.forEach(elt =>{
                elt.innerHTML = '0' + tens;
            })
        }
        if(second > 9){
            outputSecond.forEach(seconds =>{
                seconds.innerHTML = second;
            })
        }
    }
};
export default timers;