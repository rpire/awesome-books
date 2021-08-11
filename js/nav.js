/* eslint-disable no-undef */
function setTimeDate() {
  const { DateTime } = luxon;
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('date').innerHTML = now;
}

setTimeDate();