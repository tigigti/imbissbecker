import Splide from "@splidejs/splide";

window.onload = function () {
  new Splide(".splide", {
    perPage: 2,
    cover: true,
    lazyLoad: "nearby",
  }).mount();
};
