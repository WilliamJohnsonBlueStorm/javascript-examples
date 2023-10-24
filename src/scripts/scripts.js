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
}