function changeContent() {
    document.getElementById('changeContent').innerHTML = 'Hello Javascript!'
};

function image1() {
    document.getElementById('myImage').src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
};

function image2() {
    document.getElementById('myImage').src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
};
function changeFont() {
    document.getElementById('changeFont').style.fontSize='35px'
};
function hideElement() {
    document.getElementById('hideElement').style.display='none'
};

function showElement() {
    document.getElementById('showElement').style.display='block'
};

document.getElementById('documentWrite').innerHTML = 'This is written in JS';

function alertBox() {
    alert("Boo")
};


//Defining JavaScript Variables
variables()
function variables() {
    var x, y, z;
    x = 1;
    y = 2;
    z = x + y;

    document.getElementById('variables').innerHTML =
        "The value of x is " + x + ", the value of y is " + y + " and the value of z is " + z +"";
}

undefinedVariable()
function undefinedVariable() {
    var x

    document.getElementById(undefined).innerHTML = x;
}

//JavaScript Array
basicArray()
function basicArray() {
    const cars = ["Ford","BMW","Audi"]
    document.getElementById('basicArray').innerHTML = cars;
}

//JavaScrip Object
object()
function object() {
    const person = {
        firstName : "Billy",
        lastName : "Johnson",
        age : 27,
        eyeColour : "blue"
    };

    document.getElementById('object').innerHTML =
        person.firstName + " is " + person.age + " years old.";
}

//JavaScrip Object Method
objectMethod()
function objectMethod() {
    const person = {
        firstName : "Billy",
        lastName : "Johnson",
        age : 27,
        eyeColour : "blue",
        fullName : function () {
            return this.firstName + " " + this.lastName
        }
    };

    document.getElementById('objectMethod').innerHTML =
        "This persons full name is " + person.fullName() + ", this is done with a JavaScript Object Method.";
}

function onClickTime() {
    document.getElementById('onClickTime').innerHTML=Date()
}

function thisOnClickTime(id) {

    document.getElementById(id).innerText = 'Boo';

}

strLength()
function strLength() {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById('stringLength').innerText = text.length;
}

indexOf()
function indexOf() {
    let indexText = "This is a test sentence";
    let index = indexText.indexOf('test');
    document.getElementById('indexText').innerText = indexText;
    document.getElementById('indexOf').innerText = index;
}

const strMatchBtn = document.getElementById('strMatchBtn');
strMatchBtn.addEventListener('click', function() {
    let str = "The rain in SPAIN stays mainly in the plain";
    let results = str.match(/ain/g);
    document.getElementById('strMatch').innerText = results;
});

const replaceText = document.getElementById('replaceText');
replaceText.addEventListener('click', function() {
    let text = document.getElementById('str').innerText;
    document.getElementById('str').innerText = text.replace('cheese','burgers');
});

const uppercase = document.getElementById('uppercase');
uppercase.addEventListener('click', function() {
    let text = document.getElementById('uppercaseText').innerText;
    document.getElementById('uppercaseText').innerText = text.toUpperCase();
});

const lowercase = document.getElementById('lowercase');
lowercase.addEventListener('click', function() {
    let text = document.getElementById('lowercaseText').innerText;
    document.getElementById('lowercaseText').innerText = text.toLowerCase();
});

strSplit()
function strSplit() {
    let text = 'a,b,c,d,e,f,g';
    const myArray = text.split(',');
    document.getElementById('strSplit').innerText = myArray[0]
}

valueOf()
function valueOf() {
    document.getElementById('valueOf').innerText = (100 + 23).valueOf();
}

toFixed()
function toFixed() {
    let x = 9.69;
    document.getElementById('toFixed').innerHTML =
        x.toFixed(0) + '<br>' +
        x.toFixed(1) + '<br>' +
        x.toFixed(2) + '<br>' +
        x.toFixed(3);
}

document.getElementById('mathRound').innerText = Math.round(4.5)

document.getElementById('mathPow').innerText = Math.pow(8,2)

document.getElementById('mathCeil').innerText = Math.ceil(4.1)

document.getElementById('mathFloor').innerText = Math.floor(4.9)

document.getElementById('mathMax').innerText = Math.max(0, 150, 30, 20, -8, -200)

document.getElementById('mathMin').innerText = Math.min(0, 150, 30, 20, -8, -200)

const celsius = document.getElementById('c');
const fahrenheit = document.getElementById('f')

// celsius.addEventListener("keyup", (event) => {
//     var x
//     x = celsius.value * 9 / 5 + 32;
//     fahrenheit.value = Math.round(x);
// });
//
// fahrenheit.addEventListener("keyup", (event) => {
//     var x
//     x = (fahrenheit.value -32) * 5 / 9;
//     celsius.value = Math.round(x);
// });

celsius.addEventListener("keyup", function() {
    var x
    x = celsius.value * 9 / 5 + 32;
    fahrenheit.value = Math.round(x);
});

fahrenheit.addEventListener("keyup", function () {
    var x
    x = (fahrenheit.value -32) * 5 / 9;
    celsius.value = Math.round(x);
});

document.getElementById('mathRandom').innerText = Math.random();

document.getElementById('mathRandom10').innerText = Math.floor(Math.random() * 10);


const randomBtn = document.getElementById('randomBtn')
randomBtn.addEventListener('click', function () {
    document.getElementById('mathRandom45').innerText = getRndInteger(0,45)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
})

date();
function date() {
    const d = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    document.getElementById('newDate').innerText = d;
    document.getElementById('getFullYear').innerText = d.getFullYear();
    document.getElementById('getTime').innerText = d.getTime();
    document.getElementById('setFullYear').innerText = d.getFullYear(d.setFullYear(2020));
    document.getElementById('getDay').innerText = days[d.getDay()];
}

startTime()
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('startTime').innerText = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

array()
function array() {
    const cars = ['Ford', 'Audi', 'BMW'];

    document.getElementById('accessArray').innerText = cars[0];
    document.getElementById('changeArray').innerText = cars[0];
    cars[0] = 'Lexus'
    document.getElementById('changeArray2').innerText = cars[0];
    document.getElementById('printArray').innerText = cars;
    document.getElementById('arrayLength').innerText = cars.length;

    let cLen = cars.length
    let text = "<ul>";
    for (let i = 0; i < cLen; i++) {
        text += "<li>" + cars[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById('arrayLoop').innerHTML = text;

    document.getElementById('arrayAdd').innerText = cars;
    document.getElementById('addCar').addEventListener('click', function () {
        cars[cars.length] = "Kia";
        document.getElementById('arrayAdd').innerText = cars
    })
}

newArray()
function newArray() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const moreFruits = ["Melon", "Pear", "Grapes", "Cherry"];

    document.getElementById('arrayAddPush').innerText = fruits;
    fruits.push('kiwi');
    document.getElementById('arrayAddPush2').innerText = fruits;

    document.getElementById('arrayPop').innerText = fruits

    fruits.pop();
    document.getElementById('arrayPop2').innerText = fruits

    document.getElementById('arrayJoin').innerText = fruits.join('*')

    document.getElementById('arrayConcat').innerText = fruits.concat(moreFruits);

    fruits.splice(2,0, 'lemmon', 'kiwi');
    document.getElementById('arraySplice').innerText = fruits;

    document.getElementById('arrayString').innerText = fruits.toString();

    fruits.unshift('Watermelon')
    document.getElementById('arrayUnshift').innerText = fruits;

    fruits.shift();
    document.getElementById('arrayShift').innerText = fruits;

    document.getElementById('arraySlice').innerText = fruits.slice(1,3);
}

animalArray()
function animalArray() {
    const animals = ["Fish", "Dog", "Cat", "Mouse", "Rabbit"];

    document.getElementById('arraySort').innerText = animals.sort()
    document.getElementById('arrayReverse').innerText = animals.sort().reverse()
}

numbersArray()
function numbersArray() {
    const numbers = [40, 100, 1, 5, 25, 10];
    document.getElementById('arrayNumb').innerText = numbers

    numbers.sort(function (a,b){return a - b});
    document.getElementById('arrayNumbAscending').innerText = numbers

    numbers.sort(function (a,b){return b - a});
    document.getElementById('arrayNumbDescending').innerText = numbers

    document.getElementById('sortArray').innerText = numbers
    document.getElementById('sortAlph').addEventListener('click', function () {
        numbers.sort()
        document.getElementById('sortArray').innerText = numbers
    });
    document.getElementById('sortNumb').addEventListener('click', function () {
        numbers.sort(function (a, b){return a - b});
        document.getElementById('sortArray').innerText = numbers
    });

    document.getElementById('randomSort').innerText = numbers
    document.getElementById('randomSortBtn').addEventListener('click', function () {
        numbers.sort(function (){return 0.5 - Math.random()})
        document.getElementById('randomSort').innerText = numbers
    });

    numbers.sort(function (a, b){return a - b});
    document.getElementById('lowestNumber').innerHTML = numbers[0];

    numbers.sort(function (a, b){return b - a});
    document.getElementById('highestNumber').innerHTML = numbers[0];

    minArray()
    document.getElementById('lowestNumber2').innerHTML = minArray(numbers)
    function minArray(arr) {
        return Math.min.apply(null, arr);
    }

    maxArray()
    document.getElementById('highestNumber2').innerHTML = minArray(numbers)
    function maxArray(arr) {
        return Math.max.apply(null, arr);
    }
}

const carsV2 = [
    {type:'Volvo', year:2016},
    {type:'Saab', year:2001},
    {type:'BMW', year:2010},
]

displayCarsNumb();
function displayCarsNumb() {
    carsV2.sort(function (a,b ){return a.year - b.year});

    document.getElementById('objNumbSort').innerHTML =
        carsV2[0].type + " " + carsV2[0].year + "<br>" +
        carsV2[1].type + " " + carsV2[1].year + "<br>" +
        carsV2[2].type + " " + carsV2[2].year
}


displayCarsStr();
document.getElementById('objStrSortBtn').addEventListener('click', function () {
    carsV2.sort(function (a, b) {
        let x = a.type.toLowerCase();
        let y  = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayCarsStr();
});

function displayCarsStr() {
    document.getElementById('objStrSort').innerHTML =
        carsV2[0].type + " " + carsV2[0].year + "<br>" +
        carsV2[1].type + " " + carsV2[1].year + "<br>" +
        carsV2[2].type + " " + carsV2[2].year
}

const numbersArrayV2 = [45, 4, 9, 16, 25];

let txt = '';
numbersArrayV2.forEach(forEachFunc);
document.getElementById('forEach').innerHTML = txt;

function forEachFunc(value, index, array) {
    txt += value + "<br>";
}

const numbersArrayMap = numbersArrayV2.map((x) => x * 2)
document.getElementById('arrayMap').innerText = numbersArrayMap;

const over18 = numbersArrayV2.filter((x) => x > 18)
document.getElementById('arrayFilter').innerText = over18;

let sum = numbersArrayV2.reduce(reduceFunc);
document.getElementById('arrayReduce').innerText = "The sum of the array is " + sum;
function reduceFunc(total, value) {
    return total + value;
}

let allOver18 = numbersArrayV2.every(everyFunc)
document.getElementById('arrayEvery').innerText = "All over 18 is " + allOver18;

function everyFunc(value) {
    return value > 18
}

let someOver18 = numbersArrayV2.some(someFunc)
document.getElementById('arraySome').innerText = "Some over 18 is " + someOver18;

function someFunc(value) {
    return value > 18
}

let position = numbersArrayV2.indexOf(16)
document.getElementById('arrayIndexOf').innerText = "The number 16 is in position " + position;

let lastPosition = numbersArrayV2.lastIndexOf(16)
document.getElementById('arrayLastIndexOf').innerText = "The number 16 is in position " + lastPosition;

let first = numbersArrayV2.find((x) => x > 18)
document.getElementById('arrayFind').innerText = "The fist number in the array over 18 is " + first;

let findIndex = numbersArrayV2.findIndex((x) => x > 18)
document.getElementById('arrayFindIndex').innerText = "The index value of the fist number in the array over 18 is " + findIndex;

document.getElementById('boolean').innerHTML = Boolean(10 > 9);

document.getElementById('booleanValues').innerHTML =
    "100 is " + Boolean(100) + "<br>" +
    "3.14 is " + Boolean(3.14) + "<br>" +
    "-15 is " + Boolean(-15) + "<br>" +
    "Any (not empty) " + Boolean('hello') + "<br>" +
    "Even the string 'fasle' is " + Boolean('false') + "<br>" +
    "Any expression (except zero) is " + Boolean(1 + 3) + "<br>" + "<br>"  +
    "The value for this Boolean is blank, therefor the output is " + Boolean() + "<br>" +
    "Any value for this Boolean is 0, therefor the output is " + Boolean(0) + "<br>"

let c = 5
document.getElementById('comparisonFalse').innerText = (c == 6)
document.getElementById('comparisonTrue').innerText = (c == 5)

if (new Date().getHours() < 18) {
    document.getElementById('if').innerText = "Good Day"
}

if (new Date().getHours() < 18) {
    document.getElementById('ifElse').innerText = "Good Day"
} else {
    document.getElementById('ifElse').innerText = "Good Evening"
}

if (new Date().getHours() < 12) {
    document.getElementById('elseIf').innerText = "Good Morning"
} else if (new Date().getHours() < 18) {
    document.getElementById('elseIf').innerText = "Good Day"
} else {
    document.getElementById('elseIf').innerText = "Good Evening"
}

if (Math.random() < 0.5) {
    document.getElementById('randomIf').innerText = "Cheese"
} else {
    document.getElementById('randomIf').innerText = "Burger"
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday ";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
document.getElementById('switch').innerText = "Today is " + day;

let loop = "";

for (let i = 0; i < 5; i++) {
    loop += "the number is " + i + "<br>"
}

document.getElementById('for').innerHTML = loop;

let team = ["Billy", "Denis", "Ben", "Jos", "Dan", "Vicky"];

let members = "";
for (let i = 0; i < team.length; i++) {
    members += team[i] + "<br>";
}
document.getElementById("arrayLoop2").innerHTML = members;

let headings = "";
for (let i = 1; i < 6; i++) {
    headings += "<h" + i + "> Heading " + i + "</h" + i + ">";
}
document.getElementById("headingLoop").innerHTML = headings;

let loop2 = "";
let n = 0;
while (n < 10) {
    loop2 += "the number is " + n + "<br>";
    n++;
}
document.getElementById('whileLoop').innerHTML = loop2;

let breakLoop = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    breakLoop += "The number is " + i + "<br>";
}
document.getElementById("breakLoop").innerHTML = breakLoop;

let continueLoop = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    continueLoop += "The number is " + i + "<br>";
}
document.getElementById("continueLoop").innerHTML = continueLoop;

const billy = {fname:"Billy", lname:"Johnson", age:27};
let person = "";
for (let x in billy) {
    person += billy[x] + " ";
}
document.getElementById('forIn').innerHTML = person;

try{
    boo('boo');
} catch(err) {
    document.getElementById('catchErr').innerText = err.message;
}

var alertErr = '';
document.getElementById('errBtn').addEventListener('click', function () {
   try {
       allert('welcome')
   } catch(err) {
       alertErr = 'There was an error on this page.\n\n';
       alertErr += 'Click OK to continue viewing this page,\n';
       alertErr += 'or Cancel to return to go to Google.\n\n';
       if(!confirm(alertErr)) {
           document.location.href = 'https://www.google.com';
       }
   }
});

onerror = handleErr;
var errMsg = "";
function  handleErr(msg, url, l) {
    errMsg = "There was an error on this page.\n\n";
    errMsg += "Error: " + msg + "\n";
    errMsg += "URL: " + url + "\n";
    errMsg += "Line: " + l + "\n\n";
    errMsg += "Click OK to continue.\n\n";
    alert(errMsg);
    return true;
}
document.getElementById('onError').addEventListener('click', function () {
    albert('Boo');
});

let jsonDot = '';
let jsonBracket = '';
let jsonDel = '';
const myJSON = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
};

document.getElementById('jsonObj').innerText = myJSON.name;
document.getElementById('jsonObj2').innerText = myJSON['cars']['car2'];

let objPropLoop = "";
for (const x in myJSON) {
    objPropLoop += x + ", ";
}
document.getElementById('jsonObjLoop').innerText = objPropLoop;

let objValLoop = "";
for (const x in myJSON) {
    objValLoop += myJSON[x] + ", ";
}
document.getElementById('jsonValLoop').innerText = objValLoop;

myJSON.cars.car2 = "Mercedes";
for (let i in myJSON.cars) {
    jsonDot += myJSON.cars[i] + '<br>';
}
document.getElementById('jsonDotLoop').innerHTML = jsonDot;

myJSON.cars.car3 = "Lexus";
for (let i in myJSON.cars) {
    jsonBracket += myJSON.cars[i] + '<br>';
}
document.getElementById('jsonBracketLoop').innerHTML = jsonBracket;

delete myJSON.cars.car1;
for (let i in myJSON.cars) {
    jsonDel += myJSON.cars[i] + '<br>';
}
document.getElementById('jsonDel').innerHTML = jsonDel;

const xmlhttp = new XMLHttpRequest()
xmlhttp.onload = function () {
    const myObj = JSON.parse(this.responseText);
    document.getElementById('jsonHttp').innerText = myObj.name;
}
xmlhttp.open("GET", "Json_demo.txt");
xmlhttp.send();

