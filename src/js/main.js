// create products
// const product_1 = "img/product-img-4.png";

const product = [
  {
    image: "img/product-img-1.png",
    title: "Lime crush",
    text: "Margarita-inspired flavor with fresh lime juice AND a hint of zest.",
  },
  {
    image: "img/product-img-2.png",
    title: "tropical twist",
    text: "BOLD NATURAL PINEAPPLE SWEETNESS, TART PASSIONFRUIT AND CITRUS.",
  },
  {
    image: "img/product-img-3.png",
    title: "strawberry breeze",
    text: "Ripe strawberry with subtle hints of fresh mango and juicy kiwi.",
  },
  {
    image: "img/product-img-4.png",
    title: "black cherry smash",
    text: "Bold black cherry, hints of vanilla, sweet maraschino cherry backbone, subtle citrus",
  },
];

const productView = function () {
  const productParent = document.querySelector(".product");
  const markup = `

  ${product
    .map(({ image, title, text }) => {
      return `
      <div class="product__item">
              <figure class="product__img">
                <img src="${image}" alt="" />
              </figure>
              <div class="product__content">
                <h2 class="heading">${title}</h2>
                <p class="text">
                  ${text}
                </p>
                <div class="btns">
                  <a href="#" class="btn">
                    <img src="img/Fill-1.png" alt="" />
                    <span>buy on drizly</span>
                  </a>
                  <a href="#" class="btn">
                    <img src="img/Vector-3.png" alt="" />
                    <span>BUY ON INSTACART</span>
                  </a>
                </div>
              </div>
            </div>
    `;
    })
    .join("")}
            
  `;
  productParent.innerHTML = "";
  productParent.insertAdjacentHTML("afterbegin", markup);
};

productView();

// show mobile nav

const barsBtn = document.querySelector(".bars-icon");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".mobile-nav__link");

const showMblNav = function () {
  nav.classList.toggle("show-nav");
};
const closeMblNav = function () {
  nav.classList.remove("show-nav");
};

barsBtn.addEventListener("click", showMblNav);
closeNav.addEventListener("click", closeMblNav);

navLink.forEach((e) => {
  e.addEventListener("click", closeMblNav);
});
