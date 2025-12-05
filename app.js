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

    function input(input){
        if(input != "del" && input != "=" && input != "C" ){
            document.getElementById("calScreen").innerHTML += `${input}`;
        }else if(input == "C"){
            document.getElementById("calScreen").innerHTML = "";
        }else if(input == "del"){
            let screen = document.getElementById('calScreen').innerHTML;
            document.getElementById('calScreen').innerHTML = screen.slice(0, -1);
        }else{
            let screen = document.getElementById('calScreen').innerHTML;
            let result = eval(screen);
            document.getElementById('calScreen').innerHTML = result;
    }
}
    
// yessir = setInterval()
let checker = 0;

document.getElementById('rollDice').addEventListener('click', () =>{
    if(checker % 2 == 0){
        document.getElementById('rollDice').innerHTML = "Stop Rolling";
        yessir = setInterval(rollDice, 100)
    }else{
         document.getElementById('rollDice').innerHTML = "Start Rolling\n\t<button class = 'diceButton'>Reset</button>";
         clearInterval(yessir);
         checkWhoWon();
    }
    checker++;
});

function rollDice(){
    document.getElementById('diceOne').innerHTML = Math.floor((Math.random()*6)+1);
    document.getElementById('diceTwo').innerHTML = Math.floor((Math.random()*6)+1);
}

function checkWhoWon(){
    let pOne = document.getElementById('diceOne').innerHTML;
    let pTwo = document.getElementById('diceTwo').innerHTML;

    if(pOne > pTwo){
        document.getElementById('winner').innerHTML = "Player One Won!";
    }else if(pOne < pTwo){
    document.getElementById('winner').innerHTML = "Player Two Won!";
    }else{
        document.getElementById('winner').innerHTML = "It Was A Draw!!";
    }
}
