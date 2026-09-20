/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Menu Controls JS
04. offcanvas Menu JS
05. offcanvas two Menu JS
06. Sidebar Js
07. AOS Js
08. Backtotop Js
09. Magnific Popup Js
10. Counter Js
11. Feature Widget Animation Js
12. Service Two Images Hover Animation Js
13. Bg Image For Attribute  Js
14. Mouse active Js





****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  document.addEventListener("DOMContentLoaded", () => {
    // Create GSAP timeline
    const tl = gsap.timeline();
    const svg = document.getElementById("preloaderSvg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    // Text animation
    tl.to(".preloader-heading .load-text, .preloader-heading .cont", {
      delay: 1,
      y: -80,
      opacity: 0,
      duration: 0.6,
    })
      // SVG curve animation
      .to(svg, {
        duration: 0.6,
        attr: { d: curve },
        ease: "power2.inOut",
      })
      // Flatten SVG
      .to(svg, {
        duration: 0.6,
        attr: { d: flat },
        ease: "power2.inOut",
      })
      // Slide preloader up
      .to(".preloader", {
        y: "-130%",
        duration: 0.8,
        ease: "power4.inOut",
      })
      // Remove from DOM flow
      .set(".preloader", {
        display: "none",
        zIndex: -1,
      });
  });

  ////////////////////////////////////////////////////
  // 02. Sticky Js
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  ////////////////////////////////////////////////////
  // 03. Menu Controls JS
  $(".tw-hamburger-toggle").on("click", function () {
    $(".tw-header-side-menu").slideToggle("tw-header-side-menu");
  });
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    let navContent = document.querySelector(".tw-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".tw-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;
    let arrow = $(".tw-main-menu-mobile .has-dropdown > a");
    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='ph ph-caret-right'></i>";
      self.append(function () {
        return arrowBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".tw-submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. offcanvas Menu JS
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".tw-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  ////////////////////////////////////////////////////
  // 05. offcanvas two Menu JS
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".tw-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  $(document).on("click", ".tw-main-menu-mobile a", function () {
    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 06. Sidebar Js
  $(".tw-menu-bar").on("click", function () {
    $(".twoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 07. AOS Js
  AOS.init({
    once: false, // animation will happen every time you scroll
    offset: 0, // start animation when element enters the viewport
    anchorPlacement: "top-bottom", // when the bottom of the element hits the bottom of the screen
  });

  // 08. Backtotop Js
  function back_to_top() {
    var btn = $("#back_to_top");
    var btn_wrapper = $(".back-to-top-wrapper");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        btn_wrapper.addClass("back-to-top-btn-show");
      } else {
        btn_wrapper.removeClass("back-to-top-btn-show");
      }
    });

    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  }
  back_to_top();

  ////////////////////////////////////////////////////
  // 09. Magnific Popup Js
  $(".open-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  ////////////////////////////////////////////////////
  // 10. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 11. Feature Widget Animation Js
  function service_animation() {
    var active_bg = $(".feature-widget .active-bg");
    var element = $(".feature-widget .current");
    $(".feature-widget .feature-2-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".feature-widget").on("mouseleave", function () {
      element = $(".feature-widget .current");
      activeService(active_bg, element);
      element.closest(".feature-2-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
  }
  service_animation();
  function activeService(active_bg, e) {
    if (!e.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".feature-widget").offset().top;
    e.closest(".feature-2-item").removeClass("mleave");
    e.closest(".feature-2-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
  }
  $(".feature-widget .feature-2-item").on("click", function () {
    $(".feature-widget .feature-2-item").removeClass("current");
    $(this).addClass("current");
  });

  ////////////////////////////////////////////////////
  // 12. Service Two Images Hover Animation Js
  $(".service-two-list-wrap .service-two-list-item").on(
    "mouseenter",
    function () {
      $("#service-two-thumb").removeClass().addClass($(this).attr("rel"));
      $(this).addClass("active").siblings().removeClass("active");
    },
  );

  ////////////////////////////////////////////////////
  // 13. Bg Image For Attribute  Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 14. Mouse active Js
  $(document).ready(function () {
    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".service-ip-wrapper")
        .removeClass("active");
    });
  });

  $(document).ready(function () {
    function initRipples() {
      $(".ripple-image").each(function () {
        var $container = $(this);
        var $img = $container.find("img").first();

        if ($img.length === 0) return;

        var img = new Image();
        img.src = $img.attr("src");

        img.onload = function () {
          var imgURL = img.src;

          $container.css({
            "background-image": "url(" + imgURL + ")",
            "background-size": "cover",
            "background-position": "center center",
          });

          // init ripples plugin
          if (typeof $container.ripples === "function") {
            $container.ripples({
              resolution: 400,
              perturbance: 0.03,
              imageUrl: imgURL,
            });
          }

          $img.hide();
        };
      });
    }



    // Contact Form Web3Forms AJAX Handler with Strict Proxy & Fake Email Detection
    window.validateContactForm = function (e, el) {
      var emailEl = el || document.getElementById("contact-email") || $('input[name="email"]')[0];
      if (!emailEl) return true;
      var emailInput = $(emailEl);
      var email = $.trim(emailInput.val()).toLowerCase();
      var errorMsg = $("#email-error-msg");

      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
      
      var allowedProviders = [
        "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "msn.com",
        "yahoo.com", "yahoo.co.in", "ymail.com", "icloud.com", "me.com", "mac.com",
        "proton.me", "protonmail.com", "pm.me", "zoho.com", "zohomail.com", "aol.com", "gmx.com"
      ];

      var proxyKeywords = [
        "test", "temp", "proxy", "disposable", "fake", "trash", "junk", "burner",
        "mailinator", "yopmail", "guerrilla", "10minute", "dropmail", "getnada",
        "sharklasers", "mohmal", "crazymailing", "fakeinbox", "byom", "dispostable",
        "maildrop", "spam", "anon", "throwaway", "example", "sample", "invalid"
      ];

      var parts = email.split("@");
      var user = parts[0] || "";
      var domain = parts.length > 1 ? parts[1] : "";
      var domainParts = domain.split(".");

      var isProxyOrFake = false;
      var reasonText = "";

      if (!emailRegex.test(email) || domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2 || user === "test" || user === "admin") {
        isProxyOrFake = true;
        reasonText = "Please enter a valid Gmail or professional email address (e.g. name@gmail.com or name@company.com).";
      } else if (allowedProviders.indexOf(domain) !== -1) {
        isProxyOrFake = false;
      } else {
        for (var i = 0; i < proxyKeywords.length; i++) {
          if (domain.indexOf(proxyKeywords[i]) !== -1) {
            isProxyOrFake = true;
            reasonText = "Proxy, test, or temporary email domains (@" + domain + ") are not allowed. Please enter your real Gmail or professional email address.";
            break;
          }
        }
      }

      if (isProxyOrFake) {
        var msgText = reasonText || "Proxy, test, or temporary emails are not permitted. Please enter your real Gmail or professional email address.";
        if (errorMsg.length === 0) {
          emailInput.after('<div id="email-error-msg" class="text-danger tw-mt-2 tw-text-sm" style="color: #ff4d4d !important; font-size: 0.875rem; margin-top: 6px; font-weight: 600;">' + msgText + '</div>');
        } else {
          errorMsg.text(msgText).show();
        }
        emailInput.addClass("is-invalid");
        if (emailEl.setCustomValidity) emailEl.setCustomValidity(msgText);
        if (e && e.preventDefault) e.preventDefault();
        return false;
      }

      if (emailEl.setCustomValidity) emailEl.setCustomValidity("");
      if (errorMsg.length > 0) {
        errorMsg.hide();
      }
      emailInput.removeClass("is-invalid");
      return true;
    };

    $("#contact-email").on("input change", function () {
      window.validateContactForm(null, this);
    });

    $("#contact-form").on("submit", function (e) {
      if (!window.validateContactForm(e)) {
        return false;
      }
      e.preventDefault();
      var form = $(this);
      var btn = form.find('button[type="submit"]');
      var originalBtnText = btn.html();
      btn.html("SENDING...").prop("disabled", true);

      var formData = new FormData(this);
      var json = JSON.stringify(Object.fromEntries(formData));

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let res = await response.json();
          btn.html(originalBtnText).prop("disabled", false);
          if (response.status == 200) {
            alert("Thank you! Your message has been sent successfully to Huligesh D Hosamani Pavar.");
            form[0].reset();
          } else {
            alert(res.message || "Something went wrong. Please try again.");
          }
        })
        .catch((error) => {
          btn.html(originalBtnText).prop("disabled", false);
          alert("Something went wrong. Please check your network connection and try again.");
        });
    });

    initRipples();
  });
})(jQuery);

