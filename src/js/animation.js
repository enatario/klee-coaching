import { addClass } from "./utils/dom.js";

const items = document.querySelectorAll("[data-item]");

const options = {
  root: null,
  rootmargin: "0px",
  threshold: 0.5,
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      addClass(entry.target, "is-shown");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);

const init = () => {
  items.forEach(item => {
    observer.observe(item);
  });
};

export default init;
