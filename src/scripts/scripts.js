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