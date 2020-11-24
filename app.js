"use strict";
// kitchen sink
var poop = 'Corey';
var peeps = [
    { name: 'Corey', age: 30 },
    { name: 'Ceren', age: 38 },
    { name: 'Luke', age: 33 },
    { name: 'Bob', age: 60 },
    { name: 'Merritt', age: 33 }
];
peeps.forEach(function (peep) {
    console.log(peep.name + ": " + peep.age);
});
var resume = {
    Name: 'Corey DeLoach',
    Career: 'Wannabee Developer',
    Description: 'I try to know a little about a lot!',
    Interests: 'Piano, Woodworking, Chess, and Gardening',
    Experience: ['Company: Nashville Chemical', 'Position: Sales Representative', 'Duties: Chemical Water Service and Sales'],
    Skills: ['Coffee Making', 'Salad Making', 'Love Making', 'Riding bike with no handlebars']
};
console.log(resume.Name.toUpperCase());
console.log(resume.Career);
function displayPosition() {
    console.log(resume.Experience[0]);
    console.log(resume.Experience[1]);
    console.log(resume.Experience[2]);
}
displayPosition();
function displaySkill() {
    resume.Skills.forEach(function (skill) {
        console.log(skill);
    });
}
displaySkill();
// dicey business
// create object
var container = document.getElementById('container');
var Die = /** @class */ (function () {
    // *** Have to define publicly or privately ***
    //  define the constructor
    function Die() {
        this.rendor();
        this.roll();
        this.btnClicks();
    }
    // define the method
    Die.prototype.roll = function () {
        this.value = Math.ceil(Math.random() * 6);
        this.div.textContent = this.value;
    };
    Die.prototype.btnClicks = function () {
        var _this = this;
        // click on die function
        this.div.addEventListener('click', function () { return _this.roll(); });
        // remove on dblclick
        this.div.addEventListener('dblclick', function () {
            var spliceOut = dice.indexOf(_this);
            dice.splice(spliceOut, 1);
            _this.div.remove();
        });
    };
    Die.prototype.rendor = function () {
        this.div = document.createElement('div');
        this.div.classList.add('sum');
        container.appendChild(this.div);
    };
    return Die;
}());
var dice = [];
var sum = 0;
// genbtn function
var genbtn = document.getElementById('genbtn');
genbtn.addEventListener('click', function () {
    var newDie = new Die();
    dice.push(newDie);
});
// rerollbtn click function
var rerollbtn = document.getElementById('rerollbtn');
rerollbtn.addEventListener('click', function () {
    dice.forEach(function (die) {
        sum = 0;
        die.roll();
    });
});
// sumbtn click function
var sumbtn = document.getElementById('sumbtn');
sumbtn.addEventListener('click', function () {
    dice.forEach(function (die) {
        sum += die.value;
    });
    alert(sum);
    return sum = 0;
});
