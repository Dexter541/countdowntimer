   const countdown = document.querySelector("#countdown");
        const daysEl = document.querySelector("#days");
        const hoursEl = document.querySelector("#hours");
        const minutesEl = document.querySelector("#minutes");
        const secondsEl = document.querySelector("#seconds");

        
        targetDate = new Date().getTime() + 20 * 24 * 60 * 60 * 1000;
        

        setInterval(() => {
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = seconds;

        }, 1000);