/*Ye whatsapp wala hai */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);


/*ye gallery wala scroll ka hai */
const elements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:0.2
});


/*ye facility ke cards ka hai */
elements.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".view-btn");
    
    buttons.forEach(function(btn){
    
    btn.addEventListener("click", function(e){
    
    e.preventDefault();
    e.stopPropagation();
    
    const card = this.closest(".product-card");
    const info = this.nextElementSibling;
    
    card.classList.toggle("active");
    info.classList.toggle("show");
    
    if(info.classList.contains("show")){
    this.textContent="Hide Details";
    }else{
    this.textContent="View Details";
    }
    
    });
    
    });
    
    });


/*ye date wala hai */

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

const observe = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
},{threshold:0.2});

reveals.forEach(r => observer.observe(r));


document.addEventListener("DOMContentLoaded", function(){

  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  
  /* get IST date */
  let today = new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"});
  today = new Date(today);
  
  let y = today.getFullYear();
  let m = String(today.getMonth()+1).padStart(2,'0');
  let d = String(today.getDate()).padStart(2,'0');
  
  let todayDate = `${y}-${m}-${d}`;
  
  /* last day of current month */
  let lastDay = new Date(y, today.getMonth()+1, 0).getDate();
  let maxMonthDate = `${y}-${m}-${lastDay}`;
  
  /* check-in rules */
  checkin.min = todayDate;
  checkin.max = maxMonthDate;
  
  /* check-out rules */
  checkin.addEventListener("change", function(){
  
  checkout.min = checkin.value;
  
  let date = new Date(checkin.value);
  date.setDate(date.getDate()+15);
  
  let yy = date.getFullYear();
  let mm = String(date.getMonth()+1).padStart(2,'0');
  let dd = String(date.getDate()).padStart(2,'0');
  
  checkout.max = `${yy}-${mm}-${dd}`;
  
  });
  
  });

    /* PAYMENT */
  const people = document.getElementById("people");
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  const totalAmount = document.getElementById("totalAmount");
  
  const pricePerPerson = 333;
  
  function calculatePrice(){
  
  let p = parseInt(people.value);
  
  let checkinDate = new Date(checkin.value);
  let checkoutDate = new Date(checkout.value);
  
  if(!p || !checkin.value || !checkout.value) return;
  
  let diff = checkoutDate - checkinDate;
  
  let days = diff / (1000 * 60 * 60 * 24) + 1;
  
  let total = p * days * pricePerPerson;
  
  totalAmount.value = "₹ " + total;
  
  }
  
  people.addEventListener("input", calculatePrice);
  checkin.addEventListener("change", calculatePrice);
  checkout.addEventListener("change", calculatePrice);
