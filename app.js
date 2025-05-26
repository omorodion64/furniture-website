const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "WARDROBE",
    price: 150,
    colors: [
      {
        img: "./img/wardrobe.png",
      },
    ],
  },
  {
    id: 2,
    title: "SINGLE CHAIR",
    price: 110,
    colors: [
      {
      
        img: "./img/single.png",
      },
    ],
  },
  {
    id: 3,
    title: "DOUBLE",
    price: 50,
    colors: [
      {
        
        img: "./img/Double.png",
      },
    ],
  },
  {
    id: 4,
    title: "BED",
    price: 70,
    colors: [
      {
        img: "./img/bed1.png",
      },
    ],
  },
  {
    id: 5,
    title: "LAMP",
    price: 120,
    colors: [
      {
        code: "gray",
        img: "./img/product-2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});