"use strict"
//Burger

let menuTrigger = document.getElementById("mobile-menu-trigger");
let mobileMenu = document.querySelector("header nav");

menuTrigger.addEventListener('click', function() {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

//
//
// About section tab navigation
//
const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");
function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}
for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; // "register" / "apply" / "receive"
        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");
        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}
//
// Reviews section swiper gallery
//
const swiper = new Swiper('.reviews-swiper', {
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 50,
    // slidesPerGroup: 3,
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        800: {
          slidesPerView: 3,
          spaceBetween: 120
        }
      }
});
//
// Get weather data from openweather API
//
const url = "https://api.openweathermap.org/data/2.5/weather?q=Vilnius&units=metric&appid=af1409639ececf4c3bd84a31fc54f5ae";
const weatherElement = document.getElementById("weather-in-celsius");
function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = response.main.temp;
        const temperature = Math.round(response.main.temp);

        if (temperature > 0) {
            weatherElement.innerText = "+" + temperature;
        } else {
            weatherElement.innerText = temperature;
        }
    })
    http.send();
}
window.addEventListener('load', getCurrentWeatherInCelsius)

