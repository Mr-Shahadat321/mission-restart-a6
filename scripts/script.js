const nav_home = document.getElementById("nav-home");
const nav_products = document.getElementById("nav-products");

const home_section = document.getElementById("home-section");
const products_section = document.getElementById("products-section");

nav_home.addEventListener("click", function (e) {
  e.preventDefault();

  home_section.classList.remove("hidden");
  products_section.classList.add("hidden");
});

nav_products.addEventListener("click", (e) => {
  e.preventDefault();
  home_section.classList.add("hidden");
  products_section.classList.remove("hidden");
});

const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};

const loadProduct = (category) => {
  let url = "";
  if (category === "All") {
    url = "https://fakestoreapi.com/products";
  } else {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadProducts(data));
};

// {
//     "id": 17,
//     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     "price": 39.99,
//     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
//     "rating": {
//         "rate": 3.8,
//         "count": 679
//     }
// }

const loadProducts = (products) => {
  // console.log(products);
  const productContainer = document.getElementById("product-container");
  //productContainer.innerHTML = "";
  products.forEach(product => {
    console.log(product);
     const productCard = document.createElement("div")
     productCard.innerHTML = `
         <div
              class="bg-gray-50 rounded-xl p-2 shadow-sm hover:shadow-md transition"
            >
              <img class= "h-40 mx-auto object-contain" src="${product.image}"/>

              <div class= "flex justify-between gap-2 py-2"> 
                <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                ${product.category}
              </span>
                <span class="text-xs px-2 py-1"><i class="fa-solid fa-star text-yellow-400"></i>
                ${product.rating.rate}
                (${product.rating.count})
              </span>

              
              </div>

              <h4 class="font-semibold text-gray-800 mt-3">
                ${product.title}
              </h4>
              <p class="font-bold text-gray-900 mt-2">${product.price}</p>

              <div class="flex gap-3 mt-4">
                <button
                  class="w-1/2 border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-100"
                >
                  Details
                </button>
                <button
                  class="w-1/2 bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
                >
                  Add
                </button>
              </div>
            </div>
     `
     productContainer.append(productCard)

  });
};

const displayCategory = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  const allCategories = ["All", ...categories];
  for (const category of allCategories) {
    console.log(category);
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `
                    <button onclick = "loadProduct('${category}')" class= "btn rounded-full hover:bg-blue-300 border-blue px-10 py-3">${category}</button>
            
        `;
    categoriesContainer.append(catDiv);
  }
};

loadCategories();
