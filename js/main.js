$(document).ready(function () {
  const flowers_slider = new Swiper('.flowers-slider', {
    loop: true,
    slidesPerView:6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 6,
      }
    }
 
  });



  const revSlider = new Swiper('.rev-slider', {
    loop: true,
    slidesPerView:1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   
 
  });



  $('#review-1').on('click',function(){
    $.fancybox.open([
      {
        src  : 'https://www.ejin.ru/wp-content/uploads/2019/05/jarkaja-osen.jpeg',
        opts : {
          caption : 'First caption',
          thumb   : 'https://www.ejin.ru/wp-content/uploads/2019/05/jarkaja-osen.jpeg'
        }
      },
      {
        src  : 'https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg'
        }
      }
    ], {
      loop : false
    });
  });


  
 
  
});


