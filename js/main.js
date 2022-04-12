const nexticon = '<i class="fa-solid fa-angle-right"></i>'
const previcon = '<i class="fa-solid fa-angle-left"></i>'

$('.owl-carousel').owlCarousel({
    margin:30,
    nav:true,
    navText:[previcon,nexticon],
    dots:false,
    smartSpeed: 600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})