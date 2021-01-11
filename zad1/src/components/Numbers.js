import React from "react";


export default function Numbers() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomInt10(min, max, count) {
        let randomNumbers = [];
        for (let i = 0; i < count; i++)
            randomNumbers.push(getRandomInt(min, max))
        return randomNumbers
    }

    const randomNumbers = getRandomInt10(0, 100, 10);
    console.log(randomNumbers)
    return (
        <ul>
            {
                randomNumbers.map((number, i) => <li id={i}>{number}</li>)
            }
        </ul>
    );
}

