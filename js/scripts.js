const card = document.querySelector(".card");
const cardImg = document.querySelector(".card__img img");
const title = document.querySelector(".card__content h1");
const paraghaph = document.querySelector(".card__content--description");
const icon = document.querySelector(".card__content--icon");
const plan = document.querySelector(".card__content--plan");
const link = document.querySelector(".card__content--link");
const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");

const startAnimation = (entries, observe) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};
const observer = new IntersectionObserver(startAnimation, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

observer.observe(card);
observer.observe(cardImg);
observer.observe(title);
observer.observe(paraghaph);
observer.observe(icon);
observer.observe(plan);
observer.observe(link);
observer.observe(btnPrimary);
observer.observe(btnSecondary);
