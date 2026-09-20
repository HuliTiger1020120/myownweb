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



    // Contact Form Web3Forms Handler with Strict Proxy & Fake Email Detection
    window.validateEmailAddress = function (emailStr) {
      var email = (emailStr || "").trim().toLowerCase();
      if (!email) return { valid: false, message: "Please enter your email address." };

      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
      if (!emailRegex.test(email)) {
        return { valid: false, message: "Please enter a valid email address format (e.g. name@gmail.com or name@company.com)." };
      }

      var parts = email.split("@");
      var user = parts[0] || "";
      var domain = parts[1] || "";
      var domainParts = domain.split(".");

      if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
        return { valid: false, message: "Please enter a valid domain extension (e.g. .com, .org, .edu, .in)." };
      }

      var blockedUsers = ["test", "admin", "123", "abc", "xyz", "demo", "asdf"];
      if (blockedUsers.indexOf(user) !== -1) {
        return { valid: false, message: "Test or generic email addresses are not permitted." };
      }

      var allowedProviders = [
        "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "msn.com",
        "yahoo.com", "yahoo.co.in", "ymail.com", "icloud.com", "me.com", "mac.com",
        "proton.me", "protonmail.com", "pm.me", "zoho.com", "zohomail.com", "aol.com", "gmx.com", "mail.com"
      ];

      if (allowedProviders.indexOf(domain) !== -1) {
        return { valid: true };
      }

      var proxyKeywords = [
        "test", "temp", "proxy", "disposable", "fake", "trash", "junk", "burner",
        "mailinator", "yopmail", "guerrilla", "10minute", "dropmail", "getnada",
        "sharklasers", "mohmal", "crazymailing", "fakeinbox", "byom", "dispostable",
        "maildrop", "spam", "anon", "throwaway", "example", "sample", "invalid"
      ];

      for (var i = 0; i < proxyKeywords.length; i++) {
        if (domain.indexOf(proxyKeywords[i]) !== -1) {
          return { valid: false, message: "Proxy, test, or temporary email domains (@" + domain + ") are not permitted. Please enter your real Gmail or professional email address." };
        }
      }

      return { valid: true };
    };

    window.validateContactForm = function (e, el) {
      var emailEl = el || document.getElementById("contact-email") || $('input[name="email"]')[0];
      if (!emailEl) return true;
      var emailInput = $(emailEl);
      var errorMsg = $("#email-error-msg");

      var check = window.validateEmailAddress(emailEl.value);

      if (!check.valid) {
        if (errorMsg.length === 0) {
          emailInput.after('<div id="email-error-msg" class="text-danger tw-mt-2 tw-text-sm" style="color: #ff4d4d !important; font-size: 0.875rem; margin-top: 6px; font-weight: 600;">' + check.message + '</div>');
        } else {
          errorMsg.text(check.message).show();
        }
        emailInput.addClass("is-invalid");
        if (emailEl.setCustomValidity) emailEl.setCustomValidity(check.message);
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

    window.showToastMessage = function (title, text, type) {
      type = type || "success";
      var container = document.getElementById("toast-container");
      if (!container) return;

      var toast = document.createElement("div");
      toast.className = "toast-message " + type;
      toast.style.cssText = "position: relative; transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35); width: 320px; overflow: hidden; background-color: #ffffff; border-left: 4px solid #16a34a; box-shadow: 0 10px 25px rgba(0,0,0,0.2); padding: 14px 18px; border-radius: 8px; font-family: inherit;";
      toast.innerHTML = 
        '<div class="toast-message__content" style="display: flex; align-items: center; gap: 14px;">' +
          '<div class="toast-message__icon" style="font-size: 26px; color: #16a34a; line-height: 1;"><i class="ph ph-check-circle"></i></div>' +
          '<div style="flex-grow: 1;">' +
            '<h6 class="toast-message__title" style="margin: 0; font-size: 1rem; font-weight: 700; color: #111827;">' + title + '</h6>' +
            '<p class="toast-message__text" style="margin: 4px 0 0 0; font-size: 0.85rem; color: #4b5563; line-height: 1.3;">' + text + '</p>' +
          '</div>' +
          '<button class="toast-message__close" onclick="this.closest(\'.toast-message\').remove()" style="background: transparent; border: none; font-size: 18px; color: #9ca3af; cursor: pointer;"><i class="ph ph-x"></i></button>' +
        '</div>';

      container.appendChild(toast);

      setTimeout(function () {
        toast.classList.add("active");
      }, 10);

      setTimeout(function () {
        toast.classList.remove("active");
        setTimeout(function () {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 500);
      }, 5000);
    };

    window.handleContactFormSubmit = function (e) {
      if (e && e.preventDefault) e.preventDefault();
      
      var form = document.getElementById("contact-form");
      if (!form) return false;

      var emailInput = document.getElementById("contact-email") || form.querySelector('input[name="email"]');
      if (!emailInput) return false;

      var check = window.validateEmailAddress(emailInput.value);
      if (!check.valid) {
        window.validateContactForm(e, emailInput);
        alert(check.message);
        emailInput.focus();
        return false;
      }

      var btn = form.querySelector('button[type="submit"]');
      var originalBtnText = btn ? btn.innerHTML : "SUBMIT MESSAGE";
      if (btn) {
        btn.innerHTML = "SENDING...";
        btn.disabled = true;
      }

      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData));

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async function (response) {
          var res = await response.json();
          if (btn) {
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
          }
          if (response.status == 200) {
            window.showToastMessage("Message Sent Successfully!", "Thank you for reaching out. I will get back to you shortly.", "success");
            alert("Message Sent Successfully!\n\nThank you for reaching out to Huligesh D Hosamani Pavar. Your message has been sent successfully and I will reply back to your email address shortly.");
            form.reset();
            var errorMsg = document.getElementById("email-error-msg");
            if (errorMsg) errorMsg.style.display = "none";
            emailInput.classList.remove("is-invalid");
          } else {
            alert(res.message || "Something went wrong. Please try again.");
          }
        })
        .catch(function (error) {
          if (btn) {
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
          }
          alert("Something went wrong. Please check your network connection and try again.");
        });

      return false;
    };

    $("#contact-email").on("input change", function () {
      window.validateContactForm(null, this);
    });

    $("#contact-form").on("submit", function (e) {
      return window.handleContactFormSubmit(e);
    });

    initRipples();
  });
})(jQuery);

