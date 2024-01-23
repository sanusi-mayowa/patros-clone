// Get all the links in the navigation
const navLinks = document.querySelectorAll('.navbar ul li a');

// Function to update active link on scroll
function onScroll() {
    let scrollPos = window.scrollY + 200; // Adjust this value to suit your layout

    navLinks.forEach(link => {
        let href = link.getAttribute('href');
        let section = document.querySelector(href);
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            navLinks.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to update active link on click
function onClick(event) {
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

// Attach event listeners
window.addEventListener('scroll', onScroll);
navLinks.forEach(link => link.addEventListener('click', onClick));



// JavaScript to handle showing/hiding the arrow icon based on scroll position
window.addEventListener('scroll', () => {
  const arrowIcon = document.getElementById('arrow-icon');
  const nextSection = document.getElementById('about');

  // Calculate the distance from the top of the viewport to the next section
  const nextSectionTop = nextSection.getBoundingClientRect().top;

  // Show the arrow icon when the next section is in view
  if (nextSectionTop < window.innerHeight * 0.8) {
    arrowIcon.classList.add('show');
  } else {
    arrowIcon.classList.remove('show');
  }
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetOffset =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  });
});





$(document).ready(function () {

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");
    const targetElement = $(targetId);

    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top,
        },
        1000
      );
    }
  });
});









$(document).ready(function () {
  $(".filter li").on("click", function () {
    $(".filter li").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).data("value");

    if (filterValue === "all") {
      $(".port2 li").show();
    } else {
      $(".port2 li").hide();
      $('.port2 li[data-type="' + filterValue + '"]').show();
    }
  });
});


 function toggleClass() {
   var box = document.getElementById("box");

   if (box.classList.contains("animated-box")) {
     box.classList.remove("animated-box");
     box.classList.add("slide-out");
     setTimeout(function () {
       box.classList.remove("slide-out");
       box.classList.add("slide-in");
     }, 300);
   } else {
     box.classList.remove("slide-in");
     box.classList.add("slide-out");
     setTimeout(function () {
       box.classList.remove("slide-out");
       box.classList.add("animated-box");
     }, 300);
   }
 }