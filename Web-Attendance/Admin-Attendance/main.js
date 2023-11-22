const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");
const themeToggler=document.querySelector(".theme-toggler");
const date =document.getElementById("date");
const day =document.getElementById("day");
const month= document.getElementById("month");
const year =document.getElementById("year");

const today= new Date();
const weekdays=["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","Saturday"];
const allmonths=["January","February","March","April","May","June","July","August","September","October","November","December"];


   
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 2, targetTime.getMinutes() + 30, 0);
    
    function updateCountdown() {
      const now = new Date();
      const timeDifference = targetTime - now;
      
      if (timeDifference <= 0) {
        // Countdown reached zero or has passed
        document.getElementById('hour').textContent = '00';
        document.getElementById('min').textContent = '00';
        document.getElementById('sec').textContent = '00';
        clearInterval(countdownInterval);
        return;
      }
      
      const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');
      
      document.getElementById('hour').textContent = hours;
      document.getElementById('min').textContent = minutes;
      document.getElementById('sec').textContent = seconds;
    }
    
    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initial update
    updateCountdown();


date.innerHTML=(today.getDate<10?"0":"")+today.getDate();
day.innerHTML=weekdays[today.getDay()];
month.innerHTML=allmonths[today.getMonth()];
year.innerHTML=today.getFullYear();


menuBtn.addEventListener('click', ()=>{
  sideMenu.style.display="block";
});

closeBtn.addEventListener('click', ()=>{
  sideMenu.style.display="none";
});

themeToggler.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-theme-variables');
  
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});

signUpButton.addEventListener('click', ()=>{
  main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', ()=>{
  main.classList.remove("right-panel-active");
});



