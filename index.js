var checkoutDate = new Date();
checkoutDate.setDate(checkoutDate.getDate() + 1);
console.log(checkoutDate);

var checkoutDate = new Date();
checkoutDate.setDate(checkoutDate.getDate() + 12);
console.log(checkoutDate);

function addWorkDays(startDate, days) {
  var dow = startDate.getDay();
  var daysToAdd = days;
  if (dow === 0) daysToAdd++;
  if (dow + daysToAdd >= 6) {
    var remainingWorkDays = daysToAdd - (5 - dow);
    daysToAdd += 2;
    if (remainingWorkDays > 5) {
      daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
      if (remainingWorkDays % 5 === 0) {
        daysToAdd -= 2;
      }
    }
  }
  startDate.setDate(startDate.getDate() + daysToAdd);
  return startDate;
}

var d = new Date();
console.log(addWorkDays(d, 4));
