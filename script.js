function clickHam() {
    var element = document.querySelector(".mob-nav");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};
  // search suggestion
  const products = [
    { name: "Family tour", url: "family-tour.html"},
    { name: "Luxury tour", url: "luxury.html" },
    { name: "adventure tour", url: "adventure.html" },
    { name: "Cultural tour", url: "cultural.html" },
    { name: "Transportaion", url: "transportaion.html" },
    { name: "Accomodation", url: "accomodation.html" },
    { name: "North America", url: "aorthamerica.html" },
    { name: "South America", url: "southamerica.html" },
    { name: "Europe", url: "europe.html" },
    { name: "Asia", url: "asia.html" },
];

function showSuggestions(query) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    if (query.length === 0) {
        suggestionsDiv.style.display = 'none';
        return;
    }
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    if (filteredProducts.length > 0) {
        suggestionsDiv.style.display = 'block';
        filteredProducts.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('suggestion');
            div.textContent = product.name;
            div.onclick = () => window.location.href = product.url;
            suggestionsDiv.appendChild(div);
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
}


document.addEventListener('click', function(event) {
    const suggestionsDiv = document.getElementById('suggestions');
    if (!event.target.matches('#search')) {
        suggestionsDiv.style.display = 'none';
    }
});

//  search bar and search icon 
const searchBar = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');


searchIcon.addEventListener('click', function() {
searchBar.classList.toggle('open'); 
searchBar.focus(); 
});