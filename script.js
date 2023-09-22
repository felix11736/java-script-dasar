// navbar js
function myFunction() {
  document.getElementById("mydrop").classList.toggle("hidden");
}

window.onclick( (event) => {
 if (!event.target.matches('.menu-icon')) {
    var dropdowns = document.getElementsByClassName("menu-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('hidden');
      }
    }
  }
}
);
// tutup navbar //

// carousel//t
const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);
//corousel //


//array produk//
const products = [
  {
    id: 1,
    name: "Laptop ASUS VivoBook 14 OLED",
    price: "Rp 5.999.000",
    description: "Ditenagai prosessor Intel Core i5-1135G7 Dilengkapi RAM 8GB dan SSD 512GB Didukung VGA NVIDIA GeForce MX350",
    link: "https://www.asus.com/id/laptops/for-home/vivobook/",
    image: "assets/images/1.png",
  },
  {
    id: 2,
    name: "Laptop ProArt Studiobook 16 3D OLED",
    price: "Harga ASUS Rp9.999.000",
    description: "OLED (H7600, 12th Gen Intel)Windows 11 Home - ASUS recommends Windows 11 Pro for businessUp to Intel® Core™ i9-12900H",
    link: "https://www.asus.com/id/laptops/for-home/vivobook/",
    image: "assets/images/2.png",
  },
  {
    id: 3,
    name: "LAPTOP HP GAMING VICTUS 16,1",
    price: "Harga ASUS Rp19.999.000",
    description: "SPESIFIKASI Hingga Intel® Core™ i7-12700H hingga 4,7 GHz dengan Intel® Turbo Boost Technology(2g)",
    link: "https://www.asus.com/id/laptops/for-home/vivobook/",
    image: "assets/images/victus new.png",
  },
  {
    id: 4,
    name: "Laptop ASUS VivoBook 14 OLED",
    price: "Rp 5.999.000",
    description: "Ditenagai prosessor Intel Core i5-1135G7 Dilengkapi RAM 8GB dan SSD 512GB Didukung VGA NVIDIA GeForce MX350",
    link: "https://www.asus.com/id/laptops/for-home/vivobook/",
    image: "assets/images/1.png",
  },
  // Tambahkan produk lain di sini
];

// Array produk
const produkContainer = document.getElementById("produk-container");

function renderProducts() {
  produkContainer.innerHTML = ""; // Hapus konten sebelumnya

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">selengkapnya</a>
        `;

    produkContainer.appendChild(productCard);
  });
}

// Panggil fungsi renderProducts untuk pertama kali
renderProducts();

//animasi mouse//
document.annousemove =animatedCircles;
var color 
//tutup animasi mouse//
     


