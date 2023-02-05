import React, {useState} from "react";
import "./ItemCount.css"
import Button from "../Button/Button";

function ItemCount () {
    const [count, setCount] = useState(1);
    let stock = 10

    function handleAdd() {
    // count < stock
    setCount (count + 1);
    }

    function handleSubstrac() {
        setCount (count - 1);
    }

    return (
        <div className="itemCount-container">
            <button className="itemCount-button" disabled= {count === 1} onClick={handleSubstrac}>-</button>
            <p>{count}</p>
            <button className="itemCount-button" disabled={count === stock} onClick={handleAdd}>+</button>
        </div>
    );
}

export default ItemCount;
