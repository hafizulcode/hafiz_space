// Animate On Scroll (AOS) Initialization
AOS.init({
  duration: 1000,
  once: true
});

// Interactive Floating Menu
document.querySelector('.fab-button').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.fab-options').classList.toggle('show');
});

// Dynamic Prayer Times Loader
function updatePrayerTimes() {
  // Add API integration here
  const times = {
    fajr: '4:30 AM',
    dhuhr: '12:30 PM',
    asr: '4:00 PM',
    maghrib: '6:30 PM',
    isha: '8:00 PM'
  };
  
  Object.entries(times).forEach(([prayer, time]) => {
    document.querySelector(`#${prayer}-time`).textContent = time;
  });
}

// Quran Player Controls
document.querySelectorAll('.quran-card audio').forEach(player => {
  player.addEventListener('play', function() {
    document.querySelectorAll('audio').forEach(other => {
      if(other !== this) other.pause();
    });
  });
});