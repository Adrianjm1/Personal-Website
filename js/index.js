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




//CAROUSEL

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

