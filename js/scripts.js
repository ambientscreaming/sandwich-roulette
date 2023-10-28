document.addEventListener("DOMContentLoaded", function (e) {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', outputToHtml);
});

const breadTypes = ["sourdough", "whole wheat",
    "rye", "french roll", "dutch crunch", "croissant", "bagel", "garlic bread", "brioche", "ciabatta", "pretzel roll", "pita pocket", "potato bread"];
const meatTypes = ["pastrami", "mortadella", "bologna", "turkey", "ham", "proscuitto", "roast beef", "meatball", "pulled pork", "chicken breast", "chorizo", "salami", "pepperoni"];

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
}
