const productsContainer = document.querySelector(".menu-options"),
  productTemplate = document.querySelector("#productCard"),
  sectionBtns = document.querySelector("#menuSectionsBtns");

const menuItems = [
  // Appetizers
  {
    id: 1,
    type: "appetizer",
    name: "Bruschetta",
    imageUrl: "",
    ingredients: [
      "baguette",
      "tomato",
      "basil",
      "garlic",
      "olive oil",
      "balsamic vinegar",
    ],
    price: 5.99,
  },
  {
    id: 2,
    type: "appetizer",
    name: "Stuffed Mushrooms",
    imageUrl: "",
    ingredients: [
      "mushrooms",
      "cream cheese",
      "breadcrumbs",
      "garlic",
      "parsley",
    ],
    price: 6.99,
  },
  {
    id: 3,
    type: "appetizer",
    name: "Garlic Bread",
    imageUrl: "",
    ingredients: ["baguette", "garlic", "butter", "parsley", "parmesan cheese"],
    price: 4.99,
  },

  // Main Dishes
  {
    id: 4,
    type: "main",
    name: "Spaghetti Bolognese",
    imageUrl: "",
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onions",
      "garlic",
      "basil",
    ],
    price: 12.99,
  },
  {
    id: 5,
    type: "main",
    name: "Grilled Chicken Salad",
    imageUrl: "",
    ingredients: [
      "grilled chicken",
      "mixed greens",
      "cherry tomatoes",
      "cucumber",
      "feta cheese",
      "balsamic vinaigrette",
    ],
    price: 10.99,
  },
  {
    id: 6,
    type: "main",
    name: "Margherita Pizza",
    imageUrl: "",
    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "basil",
      "olive oil",
    ],
    price: 9.99,
  },

  // Desserts
  {
    id: 7,
    type: "dessert",
    name: "Chocolate Lava Cake",
    imageUrl: "",
    ingredients: [
      "chocolate",
      "butter",
      "sugar",
      "eggs",
      "flour",
      "vanilla extract",
    ],
    price: 6.99,
  },
  {
    id: 8,
    type: "dessert",
    name: "Cheesecake",
    imageUrl: "",
    ingredients: [
      "cream cheese",
      "sugar",
      "graham cracker crust",
      "eggs",
      "vanilla extract",
      "sour cream",
    ],
    price: 7.99,
  },
  {
    id: 9,
    type: "dessert",
    name: "Tiramisu",
    imageUrl: "",
    ingredients: [
      "mascarpone cheese",
      "espresso",
      "ladyfingers",
      "cocoa powder",
      "sugar",
      "eggs",
    ],
    price: 8.99,
  },
];

let menuSectionActive = "appetizer";

sectionBtns.addEventListener("click", (e) => {
  let element = e.target;
  let elementId = element.getAttribute("id");
  menuSectionActive = elementId;
  showMenu(menuSectionActive);
});

const showMenu = (section) => {
  productsContainer.innerHTML= ""
  menuItems.forEach((dish) => {
    if (dish.type === section) {
      let clone = document.importNode(productTemplate, true).content;
      clone.querySelector("#title").innerText = dish.name;
      let list = clone.querySelector("#ingredients");
      dish.ingredients.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML= item;
        list.appendChild(li)
      });
      clone.querySelector("#price").innerText= `$${dish.price}`;
      productsContainer.appendChild(clone)
   };
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showMenu(menuSectionActive);
});
