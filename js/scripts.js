document.addEventListener("DOMContentLoaded", function () {
  var slider = new Swiper(".intro__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".intro__slider-arrow-next",
      prevEl: ".intro__slider-arrow-prev",
    },
  });

  Fancybox.bind("[data-fancybox]", {
    dragToClose: false,
    on: {
      ready: () => {
        console.log("Modal window is open");
      },
    },
  });

  var slider2 = new Swiper(".catalog__slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".catalog__slider-arrow-next",
      prevEl: ".catalog__slider-arrow-prev",
    },
    pagination: {
      el: ".catalog__swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1179: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var slider3 = new Swiper(".reviews__slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
      nextEl: ".reviews__slider-arrow-next",
      prevEl: ".reviews__slider-arrow-prev",
    },
    pagination: {
      el: ".reviews__swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      1179: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  document.querySelectorAll(".btn-more").forEach((button) => {
    button.addEventListener("click", function () {
      const reviewText = this.previousElementSibling;
      if (
        reviewText.style.display === "none" ||
        reviewText.style.display === ""
      ) {
        reviewText.style.display = "block";
        this.textContent = "Hide Review";
      } else {
        reviewText.style.display = "none";
        this.textContent = "Read Review";
      }
    });
  });

  document.querySelectorAll(".questions__block").forEach((block) => {
    const description = block.querySelector(".questions__description");
    const icon = block.querySelector(".questions__display img");

    block
      .querySelector(".questions__header")
      .addEventListener("click", function () {
        description.classList.toggle("active");
        icon.classList.toggle("rotated");
      });
  });

  const burgerBtn = document.querySelector(".burger__btn");
  const burgerIcon = document.querySelector(".burger__icon");
  const nav = document.querySelector(".nav");
  const body = document.body;

  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    burgerBtn.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });

  document.querySelectorAll(".nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      burgerBtn.classList.remove("open");
      body.classList.remove("no-scroll");
    });
  });
});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.2298, lng: 21.0118 },
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: { lat: 52.2298, lng: 21.0118 },
    map: map,
    title: "Point",
  });
}
