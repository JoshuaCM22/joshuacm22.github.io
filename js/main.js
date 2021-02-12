(function ($) {
  var $nav = $("#horizontalNavigationBar");

  // Scrolly.
  $("#horizontalNavigationBar a, .scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height();
    },
  });

  $(document).ready(function () {
    new WOW().init();
  });
  
})(jQuery);
