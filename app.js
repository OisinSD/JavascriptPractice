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


const cities = [
    { name: "Dublin" }, 
    { name: "Cork" },
    { name: "Galway" } 
];


function showCities() {
    let cityItems = cities.map(city => {
        return `<p>${city.name}</p>`;
    })
    
    document.getElementById('city-list').innerHTML = cityItems.join('');

};


function showDetails(){
    
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    // const myDetails = [{firstName, secondName, age, email}] must be turned into a string but correct still
    let myDetails2 = `
    First Name: ${firstName}
    Second Name: ${secondName}
    Age: ${age}
    Email: ${email} `;
    // await.alert(name);
    // alert (firstName);
    // alert (secondName)
    // alert(myDetails.map);
    alert(myDetails2);
}


    function viewDetails(){
        let firstName = document.getElementById('firstName').value;
        let secondName = document.getElementById('secondName').value;
        let age = document.getElementById('age').value;
        let email = document.getElementById('email').value;
        let myDetails = [  `First Name: ${firstName}`, `Second Name: ${secondName}`, `Age: ${age}`, `Email: ${email}`]
        
        let userInfo = myDetails.map(details => {
            return `<p>${details}</p>` ;
        })
        
        document.getElementById('displayInfo').innerHTML = userInfo.join('');
        console.log(userInfo);
    }

    
    function refreshPage(){
        location.reload();
    }