$(document).ready(function() {

    /// BUTTON
    
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    
    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })


    /// SLIDER main 

$('.slider').slick({
    arrows:false,
    dots:true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    autoplay: false,
    fade: true,
    cssEase: 'linear'
  })


  /// SLIDER Guitars

  $('.slider-news').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    adaptiveHeight: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    draggable: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
        slidesToShow: 3,
        centerMode: false, 
        dots: false,
        arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        centerMode: false, 
        dots: true,
        arrows: false,
        }
      }
     ]
  });


  ////Gallery

  $('.gallery-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});






});


function initMap() {

  const CENTER = { lat: 50.453451764092684, lng: 30.517154601622465 };
  const MAP = new google.maps.Map(document.getElementById("map"), {
      center: CENTER,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    const SVG_MARKER = {
        scale: 2,
        anchor: new google.maps.Point(0, 35),
      };


      marker = new google.maps.Marker({
        position: CENTER,
        map: MAP,
        icon:'./img/marker.svg',
        animation: google.maps.Animation.DROP
    });

}

