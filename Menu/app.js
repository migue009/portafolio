const menu = [
  {
    id: 1,
    title: "Original",
    category: "Hamburguesa",
    price: "23.900",
    img: "./images/item-2.jpg",
    desc: `200gr de carne 100% Angus, Lechuga, Tomate, Cebolla, Salsa de casa, el mejor Pan Artesanal + PAPAS.`,
  },
  {
    id: 2,
    title: "Doble carne",
    category: "Hamburguesa",
    price: "29.900",
    img: "./images/item-1.jpeg",
    desc: `400gr de carne 100% Angus, Lechuga, Tomate, Cebolla, Salsa de casa, el mejor Pan Artesanal + PAPAS.`,
  },
  {
    id:3,
    title: "Hamburguesa de la casa",
    category: "Hamburguesa",
    price: "34.900",
    img: "./images/item-8.jpeg",
    desc:"400gr de carne 100% angus smash, queso americano, tocineta, bondiola en bbq, vegetales, pan brioche + PAPAS"
  },
  {
    id:4,
    title: "Salchipapa personal",
    category: "Salchipapas",
    price: "23.900",
    img: "./images/item-9.jpeg",
    desc:"Salchipapa para 1 persona con papa amarilla, salchicha premium sm , queso gratinado, bacon, queso cheddar, y salsa verde,ajo,bbq honey"
  },
  {
    id:5,
    title: "Costi personal",
    category: "Salchipapas",
    price: "29.900",
    img: "./images/item-11.jpeg",
    desc:"Salchipapa para 1 persona con papa amarilla,salchicha premium sm,queso gratinado,costilla ahumada sin hueso en salsa bbq honey , y salsa verde,ajo,bbq honey"
  },
  {
    id: 6,
    title: "Nachi personal",
    category: "Salchipapas",
    price: "29.900",
    img: "./images/item-12.jpeg",
    desc: "salchipapa para 1 persona con papa amarilla,carne desmechada en salsa bbq honey,guacamole,queso con maiz,pico de gallo,nachos, y salsa verde,ajo,bbq honey"
  },
  {
    id:6,
    title: "Coca-cola lata",
    category: "Bebidas",
    price: "6.000",
    img: "./images/item-3.jpg",
    desc:"Coc-cola personal de 400ml"
  },
  {
    id:7,
    title: "Pepsi botella",
    category: "Bebidas",
    price: "6.000",
    img: "./images/item-6.jpg",
    desc:"Pepsi en botella personal 400ml"
  },
  {
    id:8,
    title: "Agua natural",
    category: "Bebidas",
    price: "4.000",
    img: "./images/item-5.jpg",
    desc:"Botella de agua natural 450ml"
  },
  {
    id:9,
    title: "Agua con gas",
    category: "Bebidas",
    price: "4.000",
    img: "./images/item-4.jpeg",
    desc:"Botella de agua con gas 450ml"
  },
  {
    id:10,
    title: "Carne desmechada en salsa BBQ",
    category: "Adiciones",
    price: "9.900",
    img: "./images/adi-1.jpg",
    desc:"arne desmechada en salsa BBQ 120gr"
  },
  {
    id:11,
    title: "Bacon premium",
    category: "Adiciones",
    price: "8.900",
    img: "./images/adi-2.jpg",
    desc:"Bacon premium 120gr"
  },
  
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {

  const categories = getUniqueCategories(menu);
  const categoryBtns = categories.map(category => {
    return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  }).join(""); 
  btnContainer.innerHTML = categoryBtns;
  addButtonClickEvents();
}

function getUniqueCategories(menu) {
  return menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["todo"]); 
}


function addButtonClickEvents() {
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(menuItem => menuItem.category === category);

      if (category === "todo") {
        displayMenuItems(menu); 
      } else {
        displayMenuItems(menuCategory); 
      }
    });
  });
}
