$(document).ready(function () {
  // 남자 서브메뉴
  $(".man_sub").css({ display: "none" });

  $(".main_man").mouseenter(function () {
    $(".man_sub").stop().slideDown();
    $(".woman_sub").css({ display: "none" });
    $(".kids_sub").css({ display: "none" });
  });

  $(".man_sub").mouseleave(function () {
    $(".man_sub").stop().slideUp();
  });

  $(document).mouseleave(function () {
    $(".man_sub").stop().slideUp();
  });

  // 여자 서브메뉴
  $(".woman_sub").css({ display: "none" });

  $(".main_woman").mouseenter(function () {
    $(".woman_sub").stop().slideDown();
    $(".man_sub").css({ display: "none" });
    $(".kids_sub").css({ display: "none" });
  });

  $(".woman_sub").mouseleave(function () {
    $(".woman_sub").stop().slideUp();
  });

  $(document).mouseleave(function () {
    $(".woman_sub").stop().slideUp();
  });

  // 아이 서브메뉴
  $(".kids_sub").css({ display: "none" });

  $(".main_kids").mouseenter(function () {
    $(".kids_sub").stop().slideDown();
    $(".man_sub").css({ display: "none" });
    $(".woman_sub").css({ display: "none" });
  });

  $(".kids_sub").mouseleave(function () {
    $(".kids_sub").stop().slideUp();
  });

  $(document).mouseleave(function () {
    $(".kids_sub").stop().slideUp();
  });
});
