/* tailwind.config = {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main_color_1: "#2c3e50",
        main_color_2: "#34495e",
      },
      screens: {
        sm: {max: "767px"},
      },
    },
  },
}; */
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 2000);
// start toggle menu mobile
const toggleMenu = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    let nav = document.querySelector("nav");
    nav.classList.toggle("open");
    document.body.classList.toggle("open-menu");
  }
};
document.querySelectorAll("#mobileMenuToggle").forEach(ele => {
  ele.addEventListener("click", () => {
    toggleMenu();
  });
});
// end toggle menu mobile
// start slick slider
// start our priec
if (document.body.contains(document.querySelector(".slider"))) {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dir: "rtl",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
}
// end our priec
// start our blog
if (document.body.contains(document.querySelector(".slider-2"))) {
  $(".slider-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
}
// end our blog
// end slick slider
// start button-down show Products
const showProducts = () => {
  $(function () {
    $(".show-course").slideUp(0);
  });

  let iconDown = document.querySelector(".button-down");
  let index = 1;
  iconDown.addEventListener("click", () => {
    $(function () {
      $(`.show-course-${index}`).slideDown(1000);
      index++;
    });
  });
};

// end button-down show Products
const setSVG = () => {
  let slickPrev = document.querySelectorAll(".slick-prev");
  let slickNext = document.querySelectorAll(".slick-next");
  slickNext.forEach(ele => {
    ele.innerHTML = `<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4009 0.462463C15.1997 1.07908 15.1997 2.07881 14.4009 2.69543L4.93816 10L14.4009 17.3046C15.1997 17.9212 15.1997 18.9209 14.4009 19.5375C13.6021 20.1542 12.307 20.1542 11.5082 19.5375L0.5991 11.1165C-0.1997 10.4999 -0.1997 9.50013 0.5991 8.88351L11.5082 0.462463C12.307 -0.154154 13.6021 -0.154154 14.4009 0.462463Z" fill="#2E3192"/>
  </svg>
  `;
  });
  slickPrev.forEach(ele => {
    ele.innerHTML = `<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5991 0.462463C1.3979 -0.154154 2.69301 -0.154154 3.49181 0.462463L14.4009 8.88352C15.1997 9.50013 15.1997 10.4999 14.4009 11.1165L3.49181 19.5375C2.69301 20.1542 1.3979 20.1542 0.5991 19.5375C-0.1997 18.9209 -0.1997 17.9212 0.5991 17.3046L10.0618 10L0.5991 2.69543C-0.1997 2.07881 -0.1997 1.07908 0.5991 0.462463Z" fill="#2E3192"/>
  </svg>  
  `;
  });
};
setSVG();

// start active links on scrol
const scollLinksActive = () => {
  $(function () {
    $("nav ul a").on("click", function (e) {
      $(this).siblings().removeClass("active-link");
      $(this).addClass("active-link");
    });
  });
  document.addEventListener("scroll", e => {
    if (window.scrollY >= document.querySelector("section.zilal-alquran").offsetTop) {
      document.querySelector(".active-link").classList.remove("active-link");
      document.querySelector(".home-link").classList.add("active-link");
    }
    if (window.scrollY >= document.querySelector("section.about").offsetTop) {
      document.querySelector(".active-link").classList.remove("active-link");
      document.querySelector(".about-link").classList.add("active-link");
    }
    if (window.scrollY >= document.querySelector("section.our-corses").offsetTop) {
      document.querySelector(".active-link").classList.remove("active-link");
      document.querySelector(".Products-link").classList.add("active-link");
    }
    /*  if (window.scrollY >= document.querySelector("section.our-pricing").offsetTop) {
      document.querySelector(".active-link").classList.remove("active-link");
      document.querySelector(".pricing-link").classList.add("active-link");
    } */
    if (window.scrollY >= document.querySelector("section.contanct-us").offsetTop) {
      document.querySelector(".active-link").classList.remove("active-link");
      document.querySelector(".contact-link").classList.add("active-link");
    }
  });
};
document.querySelector(".button-up").addEventListener("click", () => {
  document.querySelector("header").scrollIntoView({behavior: "smooth"});
});
const fixedHeader = () => {
  document.addEventListener("scroll", e => {
    if (window.scrollY >= document.querySelector(".header-top").clientHeight) {
      document.querySelector(".header-bottom").classList.contains("fixed") ? "" : document.querySelector(".header-bottom").classList.add("fixed");
    } else {
      document.querySelector(".header-bottom").classList.remove("fixed");
    }
  });
};
fixedHeader();
if (location.pathname === "/") {
  console.log("ahmed");
  scollLinksActive();
  showProducts();
}

/* setTimeout(() => {
  document.body.style.background = "white";
}, 1000); */
