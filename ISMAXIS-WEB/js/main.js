$('.hero-owl-slider').owlCarousel({
  margin: 0,
  center: true,
  loop: true,
  dots: true,
  autoplay: true,
  nav: false,
  smartSpeed: 800,
  responsive: {
  0: {
     items: 1,
  },
   320: {
     items: 2,
  },
  1000: {
     items: 3,
  }
    }
});


 $('.top-product-owl').owlCarousel({
    loop: true,
        margin: 10,
        items: 7,
         dots: false,
        nav: true,
        navText: ["<span class='ti-angle-left'><span/>", "<span class='ti-angle-right'><span/>"],
        autoHeight: false,
        autoplay: false,
        responsive: {

            0: {
                items: 1,
            },
            320: {
                items: 2,
            },
             600: {
                items: 3,
            },
            700: {
                items: 4,
            },
            1000: {
                items: 7,
            }
        }
    });

  $(document).ready(function(){
    $('.active-list').click(function(){
       $('.main-nav-list').toggleClass('showSubnav');
    });
  });
   $(document).ready(function(){
    $('.nav-toggler').click(function(){
      $('.top-main-icon').addClass('showMainnav');
       $('.nav-body').addClass('showMainnav');
       $('.main-nav-list').removeClass('showSubnav');
    });
  });
   $(document).ready(function(){
    $('.togglout-main-icon').click(function(){
      $('.top-main-icon').removeClass('showMainnav');
       $('.nav-body').removeClass('showMainnav');
    });
  });
   $(document).ready(function(){
    $('.nav-body').click(function(){
      $('.top-main-icon').removeClass('showMainnav');
       $('.nav-body').removeClass('showMainnav');
    });
  });

    $(document).ready(function() {
  var headerHeight = $('.top-advert').outerHeight();

  $('.toggle-up').click(function(e){

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });

});

    $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>50){
        $(".toggle-up").addClass("show-toggle-up");
      }
      else{
        $(".toggle-up").removeClass("show-toggle-up");
      }
    });
});