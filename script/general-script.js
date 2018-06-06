
$(document).ready(function(){

    //giving smooth scroll effect for navbar and landing button
    // $('.nav').localScroll();
    // $('.landing-btn').localScroll();
    
    //Navbar scroll effect
    $(window).scroll(function() {//Gets fired when the user scrolls
        if($(document).scrollTop() > 50) {
            console.log('Added');
            $('nav').addClass('navbar-fade');//adding navbar-fade class to nav
            $('nav').removeClass('navbar-custom');//removing navbar-custom class to nav
        }
        else {
            $('nav').removeClass('navbar-fade');//removing navbar-fade class to nav
            $('nav').addClass('navbar-custom');//adding navbar-custom class to nav
        }
    });
    //Form Validation
    // $('#contact-form').validate();

});
