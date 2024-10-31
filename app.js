const productsContainer = document.querySelector(".menu-options"),
  productTemplate = document.querySelector("#productCard"),
  sectionBtns = document.querySelector("#menuSectionsBtns");

const menuItems = [
  // Appetizers
  {
    id: 1,
    type: "appetizer",
    name: "Bruschetta",
    imageUrl: "https://cdn.pixabay.com/photo/2022/12/30/11/17/bruschetta-7686666_1280.jpg",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-CHBj3beZcvH6Wea5N8JLd_DKyI_yZagDA&s",
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
    imageUrl: "https://www.foodandwine.com/thmb/e2WjcjuE8G9BmDJ9ufF1twmpdsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pull-apart-garlic-rosemary-bread-FT-RECIPE0821-044f9c58dc274962b299d8ca21258635.jpg",
    ingredients: ["baguette", "garlic", "butter", "parsley", "parmesan cheese"],
    price: 4.99,
  },

  // Main Dishes
  {
    id: 4,
    type: "main",
    name: "Spaghetti Bolognese",
    imageUrl: "https://cdn.pixabay.com/photo/2022/10/12/22/09/spaghetti-bolognese-7517639_1280.jpg",
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
    imageUrl: "https://spicecravings.com/wp-content/uploads/2022/05/Strawberry-Spinach-Salad-Featured.jpg",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7-18uhQBshQdfFRgRRciaLghKoajjI9A3g&s",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DyL6adtGeNqeEDCl8svqfp8AddmunlOmpA&s",
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
    imageUrl: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg",
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
    imageUrl: "https://cdn.pixabay.com/photo/2023/05/17/11/04/ai-generated-7999820_1280.jpg",
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
  if(elementId === "menuSectionsBtns"){
    return false;
   }
  menuSectionActive = elementId;
  
  showMenu(menuSectionActive);
});

const showMenu = (section) => {
  productsContainer.innerHTML= ""
  menuItems.forEach((dish) => {
    if (dish.type === section) {
      let clone = document.importNode(productTemplate, true).content;
      clone.querySelector("#title").innerText = dish.name;
      clone.querySelector("img").setAttribute("src", dish.imageUrl)
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
