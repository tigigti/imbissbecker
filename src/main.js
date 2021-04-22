document.addEventListener("DOMContentLoaded", e => {
  const burgerButtons = document.querySelectorAll(".navbar-burger");
  burgerButtons.forEach(button => {
    button.addEventListener("click", e => {
      const target = button.dataset.target;
      const targetEl = document.querySelector(`#${target}`);
      button.classList.toggle("is-active");
      targetEl.classList.toggle("is-active");
    });
  });
});
