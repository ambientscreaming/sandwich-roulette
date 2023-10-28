document.addEventListener("DOMContentLoaded", function (e) {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', outputToHtml);
});

const breadTypes = ["sourdough", "whole wheat",
    "rye", "french roll", "dutch crunch", "croissant", "bagel", "garlic bread", "brioche", "ciabatta", "pretzel roll", "pita pocket", "potato bread"];
const meatTypes = ["pastrami", "mortadella", "bologna", "turkey", "ham", "proscuitto", "roast beef", "meatball", "pulled pork", "chicken breast", "chorizo", "salami", "pepperoni"];
const cheeseTypes = ["swiss", "cheddar", "pepperjack", "kraft singles", "cheeze wiz", "goat cheese", "provolone", "burrata", "feta", "havarti", "brie"];
const condimentTypes = ["bbq sauce", "garlic aioli", "yellow mustard", "mayo and mustard", "pesto", "cranberry sauce", "dijon", "horseradish sauce", "hummus", "sriracha", "butter", "honey"];
const veggieTypes = ["lettuce & tomato", "carmelized onions", "jalapenos", "roasted red peppers", "heirloom tomatoes", "pepperoncinis", "sprouts", "pickled onions", "avocado", "cucumber", "spinach", "sauteed mushrooms"];
const tempTypes = ["hot", "cold"];

function randomItemFromArray(stuffToChooseFrom) {
    return stuffToChooseFrom[(Math.floor(Math.random() * stuffToChooseFrom.length))];
}

function outputToHtml() {
    const outputTag = document.getElementById('output');
    if (outputTag) {
        outputTag.innerHTML = randomItemFromArray(breadTypes);
    } else {
        console.log("couldn't find the tag");
    }

    const meatTag = document.getElementById('meatOutput');
    meatTag.innerHTML = randomItemFromArray(meatTypes);

    const cheeseTag = document.getElementById('cheeseOutput');
    cheeseTag.innerHTML = randomItemFromArray(cheeseTypes);

    const condimentTag = document.getElementById('condimentOutput');
    condimentTag.innerHTML = randomItemFromArray(condimentTypes);

    const veggieTag = document.getElementById('veggieOutput');
    veggieTag.innerHTML = randomItemFromArray(veggieTypes);

    const tempTag = document.getElementById('tempOutput');
    tempTag.innerHTML = randomItemFromArray(tempTypes);
}

