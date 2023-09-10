// Add an event listener to the anchor element with the id "reloadLink"
document.getElementById('reloadLink').addEventListener('click', function(event) {
    // Prevent the default behavior of the link (preventing it from jumping to #home)
    event.preventDefault();

    // Reload the page
    window.location.reload();
});



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

// You can access each variation using variations[index], e.g., variations[0] for the first variation.


let count = 0;
let number =0;

document.querySelector("#btn").onclick = function(){

h1.innerText = texts[count];
subtext.innerText = variations[count]
count = (count + 1) % texts.length;
}
let mainText = document.querySelector("#mainText");
// Add a mouseover event listener to change the text color
mainText.addEventListener("mouseover", function () {
    // Change the text color to blue
    mainText.style.color = "#F14902";
});

mainText.addEventListener("mouseout", function () {
    // Revert the text color to its original state (if needed)
    mainText.style.color = ""; // Empty string means it will use the default color.
});

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
    // "#FF5733",
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

let num = 0;

const img2 = document.querySelector("#img-2");
img2.addEventListener('click', e => {
    const images = ["rice4.jpg", "spag.jpg"];
    img2.src = `img/${images[num]}`;
    num = (num + 1) % images.length
    if (num === 0) {
        // You have reached the end of the array, reset to the original image
        img2.src = 'img/amala.jpg'; // Replace 'original-image-url.jpg' with your original image URL
    }
});

// Creating a new Element
// document.addEventListener('DOMContentLoaded', function() {

//   });
// const myButton = document.querySelector("#myButton")

// myButton.addEventListener('click', AddNew);
// function AddNew (){
//     const newDiv = document.createElement('div');
//     newDiv.classList.add("div-shadow", "rounded-lg", "px-[100px]", "pr-8", "container", "max-w-md",)

//     let img = document.createElement('img');
//     img.src = "img/spag.jpg"
//     // img.classList.add("mx-[100px]",)
//     newDiv.appendChild(img)
//     document.body.appendChild(newDiv);
// console.log("add")

// }




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





//   myButton.onclick = function(){
//     let div = document.createElement('div');

//     div.innerHTML = '<p>CreateElement example</p>';

//     document.body.appendChild(div);
//   }
