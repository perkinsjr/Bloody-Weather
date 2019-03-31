var hot = [
    "FUCK OFF SUN!",
    "It's hotter than Idris Elba, right ladies!",
    "Fucking lovely, my setbelt burnt my hand"
];
var warm = [
    "This weather is A fucking Ok",
    "Warm enough to enjoy without getting swamp ass",
    "Cold to some, heaven to others."
];
var cool = [
    "This weather is almost colder than my heart.",
    "It's clder than a whore's heart.",
    "It's colder than thhe underside of a penguin's ballsack",
    "It's so cold I saw lawyers with their hands in their own pockets!"
];
var cold = [
    "It's so cold that the local flasher was caught *describing* himself to women.",
    "It's so cold that the Statue of Liberty put the torch INSIDE her dress. ",
];

function description () {
    // your method logic
 }
 
 function temp (input) {
     if (input > 70){
        return hot[Math.floor(Math.random() * hot.length)];
     }
    if  (input > 50 && input < 70) {
        return warm[Math.floor(Math.random() * warm.length)];
    }
    if  (input > 32 && input < 50) {
        return cool[Math.floor(Math.random() * cool.length)];
    }
    if  (input < 32) {
        return cold[Math.floor(Math.random() * cold.length)];
    }

 }

 module.exports = {
     temp : temp,
     description: description
 }
 