$(document).ready(function () {
    $("#menu").click(function () {
      $(this).toggleClass("fa-times");
      $("header").toggleClass("toggle");
    });
  
    $(window).on("scroll load", function () {
      $("#menu").removeClass("fa-times");
      $("header").removeClass("toggle");
    });
    
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 700) {
        $("#to-top").fadeIn();
      } else {
        $("#to-top").fadeOut();
      }
    });
  
    $("#to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  });
  
  // Typing Animation
  var options = {
    strings: ["Front-End Dev", "Web Developer", "Software Dev"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity,
    cursorChar: ".",
    backDelay: 3000,
    startDelay: 500,
    smartBackspace: true,
  };
  
  var typed = new Typed(".element", options);