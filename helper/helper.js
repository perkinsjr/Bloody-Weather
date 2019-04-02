var hot = [
    "FUCK OFF SUN!",
    "It's hotter than Idris Elba, right ladies!",
    "Fucking lovely, my setbelt burnt my hand"
];
var warm = [
    "Fucking hell, get your shorts on.. and head down to the beer garden",
    "The weather is dench",
    "Give ya friend a tinkle on the blower, it's lovely jubbley out there!"
];
var cool = [
    "It's too cold, my twigs and berries have fucked off",
    "Bring your Anorak, its probably raining and its cold!",
    "Bog-standard day, bring a coat! Ya Twat"
];
var cold = [
    "I'd be telling pork pies, if I said it was lovely outside",
    "You'd probably get the lurggy if you go outside, time for a cuppa!"
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
 