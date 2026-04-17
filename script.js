// Toggle mobile menu and hamburger X
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}


// ===========================
// HERO TEXT SLIDER
// ===========================

const texts = [
  "NIKE AIR MAX 95",
  "NIKE AIR FORCE 1",
  "NIKE DUNK LOW",
  "AIR JORDAN 1",
  "ADIDAS SAMBA",
  "ADIDAS SUPERSTAR",
  "ADIDAS GAZELLE",
  "NEW BALANCE 550",
  "PUMA SUEDE CLASSIC",
  "CONVERSE CHUCK TAYLOR"
];

let index = 0;
const hero = document.getElementById("heroText");

function changeHeroText(){
  hero.classList.add("fade");

  setTimeout(() => {
    index++;
    if(index >= texts.length) index = 0;

    hero.innerText = texts[index];
    hero.classList.remove("fade");
  }, 2500);
}

setInterval(changeHeroText, 6000);


// ===========================
// PRODUCT COLOR SWITCHER
// ===========================

function changeColor(id, image){
  document.getElementById(id).src = image;
}


// ===========================
// VIEW ALL BUTTON
// ===========================

document.addEventListener("DOMContentLoaded", function(){

  const viewAllBtn = document.querySelector(".view-all");
  const hiddenProducts = document.querySelector(".product-grid.hidden");

  viewAllBtn.addEventListener("click", function(e){
    e.preventDefault();
    hiddenProducts.style.display = "grid";
    viewAllBtn.textContent = "VIEW ALL";
  });

});


// ===========================
// SEARCH FUNCTION
// ===========================

function searchItems(inputValue) {

  let input = (inputValue || document.getElementById("searchInput").value).toLowerCase();
  let items = document.querySelectorAll(".product-card");
  let noResults = document.getElementById("noResults");

  const rightNav = document.querySelector(".right-nav"); // ✅ ADDED

  let found = false;

  items.forEach(function(item){
    let text = item.innerText.toLowerCase();

    if(text.includes(input)){
      item.style.display = "block";
      found = true;
    } else {
      item.style.display = "none";
    }
  });

  noResults.style.display = found ? "none" : "block";

  // ✅ ADDED: hide icons when no results (mobile only)
  if (window.innerWidth <= 768) {
    if (!found) {
      rightNav.classList.add("hide-icons");
    } else {
      rightNav.classList.remove("hide-icons");
    }
  }

  // clear input after search
  setTimeout(() => {
    document.getElementById("searchInput").value = "";
  }, 100);

  // ===========================
  // AUTO REFRESH ONLY AFTER SEARCH 
  // ===========================

  if (!searchItems.hasSearched) {
    searchItems.hasSearched = true;

    setTimeout(() => {
      location.reload();
    }, 10000);
  }
}


// ===========================
// ENTER KEY SEARCH + CLEAR INPUT
// ===========================

document.addEventListener("DOMContentLoaded", function () {

  const searchInputEl = document.getElementById("searchInput");

  searchInputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchItems(this.value);
  }
});

});


// ===========================
// MOBILE SEARCH TOGGLE
// ===========================

const searchBtn = document.querySelector(".search-btn");
const searchContainer = document.querySelector(".search-container");
const searchInputEl = document.getElementById("searchInput");

// toggle search bar + run search
searchBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  searchItems(searchInputEl.value);

  searchContainer.classList.toggle("active");

  if (searchContainer.classList.contains("active")) {
    searchInputEl.focus();
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// close search if click outside
document.addEventListener("click", (e) => {
  if (!searchContainer.contains(e.target)) {
    searchContainer.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ESC key close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchContainer.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

function handleKey(event) {
  if (event.key === "Enter") {
    searchItems(document.getElementById("searchInput").value);
  }
}



