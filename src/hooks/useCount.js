import { useState } from "react";

function useCount() {
    const [amount,setAmount ]= useState(1);

    function increase() {
        setAmount(amount + 1)
    }

    function decrease() {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    return {
        amount,
        setAmount,
        increase,
        decrease
    }
}

export {useCount};