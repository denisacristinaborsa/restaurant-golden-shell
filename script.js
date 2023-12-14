document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('hidden');
});

// Additional JavaScript for interactive elements like the carousel
// Countdown timer
const countdown = () => {
    const countToDate = new Date("November 23, 2025 17:00:00").getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Refresh every second
    setTimeout(countdown, 1000);
};

// Start the countdown
countdown();
// Existing JavaScript for countdown

// Accordion functionality
const accButtons = document.getElementsByClassName("accordion-button");
for (let i = 0; i < accButtons.length; i++) {
    accButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
