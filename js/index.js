$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar-main").addClass("sticky");
            
        }else{
            $(".navbar-main").removeClass("sticky")

        }
    });
  //  toggle menu/navbar-main script

    $('.menu-btn').click(function(){
        $('.navbar-main .menu').toggleClass("active");
        $('.navbar-main .menu-btn i').toggleClass("active");
    });
});

