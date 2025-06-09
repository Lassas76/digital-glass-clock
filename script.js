let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  if (!is24Hour) {
    hours = hours % 12 || 12; // Convert 0 to 12
  }

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  document.getElementById('time').textContent = `${hh}:${mm}:${ss}`;
  document.getElementById('ampm').textContent = is24Hour ? '' : ampm;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById('formatToggle').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('formatToggle').textContent = is24Hour
    ? 'Switch to 12-Hour'
    : 'Switch to 24-Hour';
  updateClock();
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
