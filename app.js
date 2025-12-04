let data = 0;

document.getElementById("myNumber").innerHTML = data;

function increment() {
    data += 1; 
    document.getElementById("myNumber").innerHTML = data
};

function decrement() {
    data = data - 1;
    document.getElementById("myNumber").innerHTML = data;
}

function reset(){
    data = 0;
    document.getElementById("myNumber").innerHTML = data;
}

// 1. The Data Array (Corrected Structure)
const cities = [
    { name: "Dublin" }, 
    { name: "Cork" },
    { name: "Galway" } // Added a third for better illustration
];

// 2. The Mapping Logic
// Transform the array of city objects into an array of HTML <li> strings.
// const cityItems = [];
function showCities() {

    let cityItems = cities.map(city => {
        // For each city object, return a new <li> element containing the name.
        return `<p>${city.name}</p>`;
    });
    
    // 3. Display Logic
    
    document.getElementById('city-list').innerHTML = cityItems.join('<hr>');
    // <h4><button></button></h4>
    document.getElementById('resetButton').innerHTML = "Reset Cities";
    resetCities();
    // Join the array of <li> strings into a single string and insert it into the <ul>.
}

function resetCities(){

    document.getElementById('city-list').innerHTML = "";
}