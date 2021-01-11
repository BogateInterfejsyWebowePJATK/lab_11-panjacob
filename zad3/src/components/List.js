import React from "react";
import Number from "./Number";

export default function List({numbers, del = f => f, toBin = f => f, toOct = f => f, toHex = f => f, refresh}) {

    return (
        <ul>
            {numbers.map((i, x) => {
                return <Number i={i} x={x} del={del} toBin={toBin} toOct={toOct} toHex={toHex} refresh={refresh}/>
            })}
        </ul>
    );
}