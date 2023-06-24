var swiper = new Swiper(".bg-slides-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  // freeMode: true,
  // watchSlidesProgress: true,
});
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  // effect scroll ============================

  window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  // =======================================

  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");
  const icon_home = document.querySelector('#icon_home');
  const icon_info = document.querySelector('#icon_info');
  const icon_food = document.querySelector('#icon_food');
  const icon_travel = document.querySelector('#icon_travel');
  const icon_contact = document.querySelector('#icon_contact');

  menuBtn.addEventListener("click", () => {
      navigation.classList.add("active")
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active")
  });

  icon_home.addEventListener("click", ()=> {
    navigation.classList.remove("active")
  });

  icon_info.addEventListener("click", () => {
    navigation.classList.remove("active")
  });

  icon_food.addEventListener("click", () => {
    navigation.classList.remove("active")
  });

  icon_travel.addEventListener("click", () => {
    navigation.classList.remove("active")
  });

  icon_contact.addEventListener("click", () => {
    navigation.classList.remove("active")
  });

  // Back to top =======================================
  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // ======= Weather ===========
  (function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');

/**
 * navbar toggle
 */

// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");
// const navLinks = document.querySelectorAll("[data-nav-link]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// const navToggleEvent = function (elem) {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function () {
//       navbar.classList.toggle("active");
//       overlay.classList.toggle("active");
//     });
//   }
// }

// navToggleEvent(navElemArr);
// navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 0) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// ========================== login ========================
