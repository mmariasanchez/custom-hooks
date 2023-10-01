import { useState } from "react"


export const useCounter = ( initialValue = 0 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = (value) => {
        if( counter == 19 ) return;
        setCounter( counter + value );
    }

    const decrement = (value) => {
        if( counter == 0 ) return;
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }


    return {
        counter,
        increment,
        decrement,
        reset,
    }
}