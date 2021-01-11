function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomInt10(min, max, count) {
    let randomNumbers = [];
    for (let i = 0; i < count; i++) {
        randomNumbers.push(getRandomInt(min, max))
    }
    return randomNumbers
}

