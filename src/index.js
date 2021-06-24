const messages = [
    "Oscar",
    "Carolina",
    "Paula",
    "Ana",
    "Alejo",
    "Jesica",
    "Diego",
    "Laura",
    "Pedro"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };