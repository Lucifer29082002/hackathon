// Array of random facts
var randomFacts = [
    "The number of total crimes reported in India in 2024 was 445.9 per 100,000 people.",
    "The most common crime in India is theft, followed by robbery and assault.",
    "The states with the highest crime rates in India are Uttar Pradesh, Kerala, Maharashtra, Delhi, and Bihar.",
    "Some areas in Arunachal Pradesh have restrictions on traveling alone after dark due to safety concerns.",
    "Jharkhand faces challenges with crime reporting, with many criminal cases not being registered in police files.",
    "Meghalaya is considered one of the top dangerous states in India, with crimes per capita of 5.1.",
    "Despite political power in Delhi, little has been done to improve safety, with a crime rate of 5 per capita.",
    "Chhattisgarh has a crime rate rating of 4 per capita, making it considered unsafe for many reasons, especially for women.",
    "Haryana is known for various crimes, including robbery, theft, bribery, murder, and rape, with a per capita crime rate of 3.8.",
    "Odisha shares a per capita crime rate of 3.8 in India, with issues like larceny, theft, bribery, and drug-related problems.",
    "Andhra Pradesh has a crime rate ratio of 3.6 per capita in India.",
    "The surge in cybercrime represents a significant contemporary trend, with various forms such as online fraud and identity theft being prevalent.",
    "The top categories of cases against women include cruelty by husband or his relatives, kidnapping and abduction of women, and assault on women with intent to outrage her modesty.",
    "The increase in suicides in 2022 is attributed to reasons such as family problems, marriage-related issues, and illness.",
    "The NCRB report for 2022 recorded a total of 58,24,946 cognizable crimes reported, indicating a notable 4.5% decrease from the previous year."
];

// Function to get a random fact
function getRandomFact() {
    // Generate a random index within the range of the array length
    var randomIndex = Math.floor(Math.random() * randomFacts.length);
    // Return the fact at the random index
    return randomFacts[randomIndex];
}

//selecting elements
const header = document.querySelector(".hero");
const factText  = document.querySelector(".fact");
const btn = document.querySelector(".btn");

const animatedElements = document.querySelectorAll(".animated");

btn.addEventListener("click", () => {
    
    header.classList.add("loaded");
})

const video  = document.querySelector("#logo");
setTimeout(() => {
    animatedElements.forEach(element => {
        element.classList.add("appear");
    });

    video.pause();
    factText.textContent = `"${getRandomFact()}"`;
}, 2500);



