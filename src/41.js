function getRandomInt(min, max) {
    min = Math.ceil(Math.min(...arguments));
    max = Math.floor(Math.max(...arguments));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
