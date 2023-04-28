(function(){
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
})();

$(document).ready(function(){

  $('.responsive').slick({
    prevArrow: $('main .new-arrivals .title .control-btns .slick-left'),
    nextArrow: $('main .new-arrivals .title .control-btns .slick-right'),
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('header .sec-head .offcanvas-btn').click(function() {
    if (parseInt($(window).width()) < 1024) {
      $('header .thr-head').toggle('show');
      $('header .thr-head i.fa-close').click(function(){
        $('header .thr-head').hide('');
      });
    };
  });



  $('footer .main-footer .list-items .head').click(function() {
    if (parseInt($(window).width()) < 768) {
        $(this).next().toggle('show');
    }
  });
})


function tabGallry(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
};

function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "flex";
}
