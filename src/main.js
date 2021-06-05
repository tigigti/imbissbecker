import Splide from "@splidejs/splide";

window.onload = function () {
  new Splide(".splide", {
    perPage: 2,
    cover: true,
    lazyLoad: "nearby",
  }).mount();

  menuSwitcher();
};

const menuSwitcher = () => {
  const categories = document.querySelectorAll(".menu-cart__category");
  const menuToggler = document.querySelectorAll(".menu-section__toggler span");

  menuToggler.forEach(toggler => {
    toggler.addEventListener("click", e => {
      toggleActiveCategory(toggler.dataset.toggleId);
    });
  });

  const toggleActiveCategory = id => {
    categories.forEach(cat => {
      if (cat.id == id) {
        cat.classList.add("active");
        cat.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else {
        cat.classList.remove("active");
      }
    });
  };
};
