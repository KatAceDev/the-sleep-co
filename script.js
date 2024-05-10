$( document ).ready(function() {
    $('.hamburger-btn').click(function(){
        $('.mobile-menu').slideToggle();  
      });

    //  Initiates AOS
      AOS.init({
        duration: 500
      });


});