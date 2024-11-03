// Set the target date for the next championship
const championshipDate = new Date("June 21, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = championshipDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.querySelector(
    ".countdown-timer"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-timer").innerHTML =
      "The championship has started!";
  }
}, 1000);
