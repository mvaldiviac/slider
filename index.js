$(document).on("ready", function() {
  const slider = $(".slider");
  slider.slick({
    arrows: true,
    adaptiveHeight: false,
    asNavFor: ".slider-nav-text"
  });

  $(".slider-nav-text").slick({
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 5,//Cantidad de slides a mostrar
    slidesToScroll: 1,
    asNavFor: ".slider"
  });

  function startProgressbar() {
    resetProgressbar();
  }

  const progressBar = document.querySelector(".slider-progress .progress");
  progressBar.addEventListener("animationend", () => {
    slider.slick("slickNext");
    resetProgressbar();
  });

  function resetProgressbar() {
    progressBar.classList.remove("progress-animation");
    void progressBar.offsetWidth;
    progressBar.classList.add("progress-animation");
  }

  startProgressbar();

  $(".slick-next, .slick-prev").click(function() {
    startProgressbar();
  });

  $(".slider-wrapper").on("mouseenter", () => {
    progressBar.style.animationPlayState = "paused";
  });

  $(".slider-wrapper").on("mouseleave", () => {
    progressBar.style.animationPlayState = "running";
  });
});
