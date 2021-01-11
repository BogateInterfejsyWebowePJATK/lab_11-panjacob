
import React from "react";

export default function Numbers() {

    const [numbers, setNumbers] = React.useState([])

    React.useEffect(() => {
        randomNumbers()
    }, [])

    const randomNumbers = () => {
        setNumbers(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 100)))
    }

    return (
        <>
            <button onClick={randomNumbers}>Random</button>
            <ul>
                {numbers.map((number, i) => {
                    return <li key={i}>{number}</li>
                })}
            </ul>
        </>
    );
}