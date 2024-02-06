import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const currentTime = new Date();
let timerID = null;

startBtn.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const timeDifference = selectedDates[0].getTime() - currentTime.getTime();

    console.log(timeDifference);

    if (
      selectedDates[0].getTime() < currentTime.getTime() ||
      selectedDates[0].getTime() == currentTime.getTime()
    ) {
      alert('Please select a date in the future!');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }

    startBtn.addEventListener('click', () => {
      timerID = setInterval(() => {
        function convertMs(ms) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(ms / day);
          const hours = Math.floor((ms % day) / hour);
          const minutes = Math.floor(((ms % day) % hour) / minute);
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          daysSpan.textContent = days;
          hoursSpan.textContent = hours;
          minutesSpan.textContent = minutes;
          secondsSpan.textContent = seconds;

          return { days, hours, minutes, seconds };
        }
        const currentTime = new Date();
        const timeDifference =
          selectedDates[0].getTime() - currentTime.getTime();
        if (
          daysSpan.textContent == 0 &&
          hoursSpan.textContent == 0 &&
          minutesSpan.textContent == 0 &&
          secondsSpan.textContent === 0
        ) {
          return;
        }
        convertMs(timeDifference);
      }, 1000);
      startBtn.disabled = true;
    });
  },
});
