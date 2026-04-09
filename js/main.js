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
    var centerRevealSectionSelectors = [
      "#desktopOldProjects",
      "#webOldProjects",
      "#webProjects",
      "#desktopProjects",
      "#mobileProjects",
    ];
    var isPersonalProjectsPage =
      $("#desktopOldProjects").length > 0 && $("#mobileProjects").length > 0;
    var revealCards = [];

    if (isPersonalProjectsPage) {
      var revealDelayStep = 0.08;
      revealCards = Array.prototype.slice.call(
        document.querySelectorAll(".wrapper.style2 .row > [class*='col-']")
      );
    } else {
      revealCards = Array.prototype.slice.call(
        document.querySelectorAll(
          centerRevealSectionSelectors
            .map(function (selector) {
              return selector + " .row > [class*='col-']";
            })
            .join(", ")
        )
      );
    }

    if (revealCards.length > 0) {
      document.body.classList.add("js-center-reveal");

      revealCards.forEach(function (card, index) {
        card.classList.remove("wow", "fadeInLeft", "fadeInRight");
        card.classList.add("reveal-on-center");
        card.style.transitionDelay =
          ((index % 3) * 0.08).toFixed(2) + "s";
      });

      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
          function (entries, currentObserver) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) {
                return;
              }

              entry.target.classList.add("is-revealed");
              currentObserver.unobserve(entry.target);
            });
          },
          {
            threshold: 0.15,
            rootMargin: "-40% 0px -40% 0px",
          }
        );

        revealCards.forEach(function (card) {
          observer.observe(card);
        });
      } else {
        revealCards.forEach(function (card) {
          card.classList.add("is-revealed");
        });
      }
    }

    new WOW().init();
  });
  
})(jQuery);
