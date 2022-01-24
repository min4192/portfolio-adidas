$(document).ready(function () {
  // SPIRIT
  $(".right_btn").click(function (e) {
    e.preventDefault();
    $(".all")
      .css({ left: "0" })
      .animate({ left: -$(window).width() });
  });
  $(".left_btn").click(function (e) {
    e.preventDefault();
    $(".all")
      .css({ left: -$(window).width() })
      .animate({ left: "0" });
  });

  // popular
  var current=0;
  var $current=$(".box"+current).find("a");
  $current.addClass("act");
  
  $(".left_popbtn").click(function(e){
    e.preventDefault();
    if(current > 0){
      current--;
      $current.removeClass("act");
      $current=$(".box"+current).find("a");
      slideTarget(current);
    }
  });
  $(".right_popbtn").click(function(e){
    e.preventDefault();
    if(current < 2){
      current++;
      $current.removeClass("act");
      $current=$(".box"+current).find("a");
      slideTarget(current);
    }
  });
  function slideTarget(n){
    var pos=n*(-1920)+"px";
    current=n;
    $(".imgs_area").animate({left:pos}, 500, "easeInOutQuart",
      function(){
        $current.addClass("act");
      }
    );
  }
});
