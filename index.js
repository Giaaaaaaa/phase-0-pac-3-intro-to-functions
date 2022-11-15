// Follow along with the examples here

// const sum = add(1, 2);

const message = `The sum of your numbers is: ${add(1, 2)}`;
console.log(message);

function add(num1, num2) {
    return num1 + num2;
}

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}

console.log(say("hi", "wenjia"));