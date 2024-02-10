import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');
const currentTime = new Date();
let timerID;
let selectedDate = '';

startBtn.disabled = true;

Notiflix.Notify.init({
  width: '350px',
  position: 'center-center',
  timeout: 10000,
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    console.log(selectedDates[0]);

    selectedDate = new Date(selectedDates[0]);

    if (selectedDate <= currentTime) {
      startBtn.disabled = true;
      Notiflix.Notify.info('Please select a date in the future!');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  timerID = setInterval(() => {
    const currentTime = new Date();
    convertMs(selectedDate - currentTime);
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function convertMs(ms) {
  if (ms <= 0) {
    clearInterval(timerID);
  }

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timerID);
  }

  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);
}
