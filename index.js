const distance = prompt("How many kilometers are you travelling today?");100
const age = prompt("How old are you?");

let price = distance * 0.21;

if (age < 18) {
    price = price * 0.8;
} else if (age > 65) {
    price = price * 0.6;
}

alert("Your ticket will be " + "£" + price.toFixed(2));



console.log(price);