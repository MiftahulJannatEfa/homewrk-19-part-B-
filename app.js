setInterval(function () {

   let date = new Date();
   let getHour = date.getHours();
   let getMin = date.getMinutes();
   let getSec = date.getSeconds();


   let hour = document.querySelector('.hour');
   let min = document.querySelector('.min');
   let sec = document.querySelector('.sec');
   let amPm = document.querySelector('.amPm');


   hour.innerHTML = getHour;
   min.innerHTML = getMin;
   sec.innerHTML = getSec;

   if (getHour > 12) {
      amPm.innerHTML = "PM";
   } else {
      amPm.innerHTML = "AM";
   }

   if (getHour > 12) {
      let finalHour = getHour - 12;
      // hour
      console.log(finalHour);
      if (finalHour < 10) {
         finalHour = '0' + finalHour;
      }
      hour.innerHTML = finalHour;
   } else {
      let finalHour = getHour;
      hour.innerHTML = finalHour;
   }
 
   min.innerHTML = getMin;
   sec.innerHTML = getSec;

});