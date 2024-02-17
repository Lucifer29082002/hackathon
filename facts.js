// Array of random facts
var randomFacts = [
    "The shortest war in history lasted only 38 minutes.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Octopuses have three hearts.",
    "The unicorn is the national animal of Scotland.",
    "The Earth's oceans contain almost 20 million tons of gold.",
    "The Eiffel Tower can be 15 cm taller during the summer, due to the expansion of the iron structure in the heat.",
    "The average person spends six months of their lifetime waiting for red lights to turn green."
];

// Function to get a random fact
function getRandomFact() {
    // Generate a random index within the range of the array length
    var randomIndex = Math.floor(Math.random() * randomFacts.length);
    // Return the fact at the random index
    return randomFacts[randomIndex];
}

// Print a random fact
console.log(getRandomFact());
