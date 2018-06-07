$(document).ready(function () {



    $('#MenuIcon').hide();
    $('#MainMenu').hide();
    $(window).scroll(function () {

        if ($(document).scrollTop() > 400) {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.local-nav').addClass('navbar-fixed-top');
            $('#MenuIcon').show();
            $('#MainMenu').show();
        } else {
            $('.navbar').addClass('navbar-fixed-top');
            $('.local-nav').removeClass('navbar-fixed-top');
            $('#MenuIcon').hide();
            $('#MainMenu').hide();
        }

    });

    $("#MenuIcon").click(function () {
        open = true;
        console.log("Menu Icon Clicked", open);
        $("#MainMenu").css("left", "0px");

        function showMenu() {
            $("#MainMenu").css("clip-path", "polygon(0 0,100% 0,100% 100%,0% 100%)");
            $("#MenuIcon").animate({
                right: '-100'
            }, 300);
        }
        setTimeout(showMenu, 100);
        $("#MenuIcon").hide();
    });

    $("#close").click(function () {
        open = false;
        $("#MainMenu").css("clip-path", "polygon(0 0,0% 0,100% 100%,0% 100%)");

        function hideMenu() {
            $("#MainMenu").css("left", "-300px");
            $("#MenuIcon").animate({
                right: '10'
            }, 300);
        }
        setTimeout(hideMenu, 300);

        function originalLayout() {
            $("#MenuIcon").show();
            $("#MainMenu").css("clip-path", "polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout, 600);
    });

    $('#MainMenu a').click(function() {
        open = false;
        $("#MainMenu").css("clip-path", "polygon(0 0,0% 0,100% 100%,0% 100%)");

        function hideMenu() {
            $("#MainMenu").css("left", "-300px");
            $("#MenuIcon").animate({
                right: '10'
            }, 300);
        }
        setTimeout(hideMenu, 300);

        function originalLayout() {
            $("#MenuIcon").show();
            $("#MainMenu").css("clip-path", "polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout, 600);
    });



});