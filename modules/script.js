

const menuBtn = document.querySelector('.menuBtn');

const menu = document.querySelector('.menu');

const btnclose = document.querySelector('.btn-close');

const butRes = document.querySelector('.butRes');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

butRes.addEventListener('click', () => {
  modal.showModal()
})

btnclose.addEventListener('click', () => {
  modal.close()
})

document.querySelectorAll('.seat2:not(.sold)').forEach(function(seat) {
  seat.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});

document.querySelectorAll('.seat4:not(.sold)').forEach(function(seat) {
  seat.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});

document.querySelectorAll('.seat6:not(.sold)').forEach(function(seat) {
  seat.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});

document.querySelector('.breakfast').scrollIntoView({behavior: 'smooth'})

mybutton = document.getElementById("back");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}