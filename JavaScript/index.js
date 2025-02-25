function updateCountdown() {
    const eventDate = new Date("March 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);