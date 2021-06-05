import Splide from "@splidejs/splide";
import hereKey from "./key.js";

window.onload = function () {
  new Splide(".splide", {
    perPage: 2,
    type: "loop",
    lazyLoad: "nearby",
    height: "36rem",
    cover: true,
    // heightRatio: 0.5,
    // cover: true,
    autoplay: true,
    breakpoints: {
      768: {
        height: "30rem",
        perPage: 1,
      },
      640: {
        height: "25rem",
      },
      450: {
        height: "18rem",
      },
    },
  }).mount();

  menuSwitcher();
};

const menuSwitcher = () => {
  const categories = document.querySelectorAll(".menu-cart__category");
  const menuToggler = document.querySelectorAll(".menu-section__toggler span");

  menuToggler.forEach(toggler => {
    toggler.addEventListener("click", e => {
      toggleActiveCategory(toggler.dataset.toggleId);
      menuToggler.forEach(toggler => {
        toggler.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  const toggleActiveCategory = id => {
    categories.forEach(cat => {
      if (cat.id == id) {
        cat.classList.add("active");
        document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else {
        cat.classList.remove("active");
      }
    });
  };
};

// Here maps
//Step 1: initialize communication with the platform
// Replace variable YOUR_API_KEY with your own apikey
var platform = new H.service.Platform({
  apikey: hereKey,
});
var defaultLayers = platform.createDefaultLayers();
var LocationOfMarker = { lat: 51.274489, lng: 7.206203 };
//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById("mapContainer"), defaultLayers.vector.normal.map, {
  center: LocationOfMarker,
  zoom: 17,
  pixelRatio: window.devicePixelRatio || 1,
});
// This adds a resize listener to make sure that the map occupies the whole container
window.addEventListener("resize", () => map.getViewPort().resize());
//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);
// Marker code goes here

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker(LocationOfMarker);

// Add the marker to the map:
map.addObject(marker);
