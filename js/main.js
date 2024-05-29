$(function () {
  $(".js-btn").on("click", function () {
    // js-btnクラスをクリックすると、
    $(".l-header__nav, .c-hamburger__line").toggleClass("open"); // メニューとバーガーの線にopenクラスをつけ外しする
  });
});

// toggle
$(function () {
  $(".c-toggle__header").click(function () {
    $(this).toggleClass("selected");
    $(this).next().slideToggle();
  });
});

jQuery(function ($) {
  $(window).on("load scroll", function () {
    var box = $(".fadeIn");
    var animated = "animated";

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass(animated);
      }
    });
  });
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
