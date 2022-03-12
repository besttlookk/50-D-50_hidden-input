searchEl = document.querySelector(".search");
inputEl = document.querySelector(".search-input");

searchEl.addEventListener("click", () => {
  searchEl.classList.toggle("active");
  inputEl.focus();
});
