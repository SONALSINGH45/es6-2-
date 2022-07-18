function say(message) {
    console.log(message);
}

say(); // undefined
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say(); // 'Hi'