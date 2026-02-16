const nav_home = document.getElementById("nav-home");
const nav_products = document.getElementById("nav-products");

const home_section = document.getElementById("home-section");
const products_section = document.getElementById("products-section")

nav_home.addEventListener("click", function(e){
    e.preventDefault();

    home_section.classList.remove("hidden");
    products_section.classList.add("hidden")
});

nav_products.addEventListener("click", e=>{
    e.preventDefault();
    home_section.classList.add("hidden");
    products_section.classList.remove("hidden")
})




