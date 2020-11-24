// kitchen sink
let poop: string = 'Corey';
// console.log(poop);

interface IPerson {
    name: string;
    age: number
}

let peeps: Array<IPerson> = [
    {name: 'Corey', age: 30},
    {name: 'Ceren', age: 38},
    {name: 'Luke', age: 33},
    {name: 'Bob', age: 60},
    {name: 'Merritt', age: 33}
];

peeps.forEach(peep => {
    console.log(`${peep.name}: ${peep.age}`);
});
// console resume 

interface IResume {
    Name: string;
    Career: string;
    Description: string;
    Interests: string;
    Experience: Array<string>;
    Skills: Array<string>
}

let resume: IResume = {
    Name: 'Corey DeLoach',
    Career: 'Wannabee Developer',
    Description: 'I try to know a little about a lot!',
    Interests:  'Piano, Woodworking, Chess, and Gardening',
    Experience: ['Company: Nashville Chemical', 'Position: Sales Representative', 'Duties: Chemical Water Service and Sales'],
    Skills: ['Coffee Making', 'Salad Making', 'Love Making', 'Riding bike with no handlebars']
}
console.log(resume.Name.toUpperCase());
console.log(resume.Career);

function displayPosition () {
    console.log(resume.Experience[0]);
    console.log(resume.Experience[1]);
    console.log(resume.Experience[2]);
}
displayPosition ();

function displaySkill () {
    
    resume.Skills.forEach(skill => {
        console.log(skill);
    })

}
displaySkill ();

// dicey business

// create object
let container = document.getElementById('container');
class Die {
    // *** Have to define publicly or privately ***
    value: number;
    div: HTMLDivElement;

    //  define the constructor
    constructor() {
        this.value = 0;
        this.div = document.createElement('div');
        this.rendor();
        this.roll();
        this.btnClicks();
    }
    
    // define the method
    public roll() {
        this.value = Math.ceil(Math.random()*6);
        this.div.textContent = this.value.toString();
    }
    public btnClicks() {
        // click on die function
        this.div.addEventListener('click', () => this.roll());
        // remove on dblclick
        this.div.addEventListener('dblclick', () => {
            let spliceOut = dice.indexOf(this);
            dice.splice(spliceOut, 1)
            this.div.remove();
        })
    }
    public rendor(){
        this.div.classList.add('sum');
        container?.appendChild(this.div);
    }
}
let dice: Array<Die> = [];
let sum: number = 0;
// genbtn function
let genbtn = document.getElementById('genbtn');
genbtn?.addEventListener('click', () => {
    let newDie = new Die();
    dice.push(newDie);

})
// rerollbtn click function
let rerollbtn = document.getElementById('rerollbtn');
rerollbtn?.addEventListener('click', () => {
    dice.forEach((die) => {
        sum = 0;
        die.roll();
    }) 

})
// sumbtn click function
let sumbtn = document.getElementById('sumbtn');
sumbtn?.addEventListener('click', () => {
    dice.forEach((die) => {
        sum += die.value;
    });
    alert(sum);
    return sum = 0;
})

dice.map(pizza => {
    console.log(pizza)
})
