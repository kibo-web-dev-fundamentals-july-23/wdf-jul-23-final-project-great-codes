// To reload page when logo is clicked.
document.getElementById('reloadLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.reload();
});

// To change the displayed text of an element
const h1 = document.querySelector(".main");
const subtext = document.querySelector("#subtext")
const texts = ["Explore Dining Excellence & Delectable Cuisine", "Embark on a Food Journey & Savor Tantalizing Flavors", "Dive into Restaurant Discoveries & Exquisite Meals"
, "Immerse Yourself in Food Exploration & Tasty Treats"];

const variations = [
    "At the heart of every mouthwatering, Soulfully Spiced Chicken dish and the cornerstone of every exceptional customer experience is a dedicated individual.",
    "Every memorable, Soulfully Spiced Chicken feast and the driving force behind outstanding customer experiences is a person with unwavering dedication.",
    "In the creation of every delightful, Soulfully Spiced Chicken masterpiece and the crafting of exceptional customer interactions, you'll find a passionate and devoted individual.",
    "Within each delectable, Soulfully Spiced Chicken creation and as the driving force behind remarkable customer moments, there resides a person full of passion and commitment.",
    "Behind every scrumptious, Soulfully Spiced Chicken delight and leading the way in providing superb customer service is a person whose dedication shines.",
    "With every mouthwatering, Soulfully Spiced Chicken delight and guiding the path to outstanding customer satisfaction is a person who is truly devoted.",
    "At the core of every savory, Soulfully Spiced Chicken experience and at the forefront of every exceptional customer encounter is a person who brings passion and commitment to the table.",
    "Backing each flavorful, Soulfully Spiced Chicken creation and leading the charge for unforgettable customer experiences is a person driven by passion and dedication.",
    "In the preparation of every delicious, Soulfully Spiced Chicken dish and at the forefront of every exceptional customer experience is a person who embodies unwavering commitment.",
    "Within the realm of each tasty, Soulfully Spiced Chicken masterpiece and as the driving force behind remarkable customer satisfaction stands an individual with a deep passion and unwavering commitment."
];

// - Change an element's colour

let count = 0;
let number =0;

document.querySelector("#btn").onclick = function(){

h1.innerText = texts[count];
subtext.innerText = variations[count]
count = (count + 1) % texts.length;
}
let mainText = document.querySelector("#mainText");
mainText.addEventListener("mouseover", function () {
    mainText.style.color = "#F14902";
});

mainText.addEventListener("mouseout", function () {
    mainText.style.color = "";
});


// - Change an element's background colour

let background = document.querySelector("body")
let button2 = document.querySelector("#btn-2")
const colorCodes = [
    "#3498DB",
    "#2ECC71",
    "#9B59B6",
    "#1ABC9C",
    "#34495E",
    "#FFC0CB",
    "#1E90FF",
    "#F1C40F",
    "#27AE60",
    "#8E44AD",
    "#2C3E50",
    "#FFD700",
    "#3498DB",
    "#000000"

];


button2.onclick = function(){
    background.style.backgroundColor = colorCodes[number]
    number = (number + 1) % colorCodes.length;
}


// Creating a new Element
// document.addEventListener('DOMContentLoaded', function()

const myButton = document.querySelector("#btn-4")

myButton.addEventListener('click', AddNew);
function AddNew (){
    const newDiv = document.createElement('div');
    newDiv.classList.add("div-shadow", "rounded-lg", "px-[100px]", "pr-8", "container", "max-w-md",)
    const amala = document.querySelector("#amala1")

    let text = document.createElement('p')
    text.innerText = "New Dishes are Coming Soon..."
    text.classList.add("text-white", "text-2xl")

    amala.parentNode.insertBefore(newDiv, amala);

    newDiv.appendChild(text);
    myButton.removeEventListener('click', AddNew);

console.log("add")

}


// Hide and Display and element


const hideButton = document.querySelector("#btn-3")
let dishes = document.querySelectorAll(".recipe")

hideButton.addEventListener('click',hideMenu)

function hideMenu(){
    dishes.forEach( function (dish){
        if(dish.style.display === "" || dish.style.display ==="block"){
            dish.style.display="none"
            hideButton.innerText = "Show Dish"
        }
        else{
            dish.style.display = "block";
            hideButton.innerText = "Hide Dish"
        }
    })

}

