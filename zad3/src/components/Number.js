import React from "react";

export default function Number({x, i, del = f => f, toBin = f => f, toOct = f => f, toHex = f => f, refresh}) {

    const [converted, setConverted] = React.useState("")

    React.useEffect(() => {
        setConverted("")
    }, [refresh])

    return (
        <li key={x}>{i}
            <button onClick={() => del(x)}>Delete</button>
            <button onClick={() => setConverted(toBin(x))}>Bin</button>
            <button onClick={() => setConverted(toOct(x))}>Oct</button>
            <button onClick={() => setConverted(toHex(x))}>Hex</button>
            <b>{converted}</b>
        </li>
    )
}