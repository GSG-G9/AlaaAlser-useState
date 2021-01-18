import React, {useState} from 'react';

function Excercise1(){


const [count, setCount] = useState(0)

const handelIncrement =  () => setCount(count+1)

const handelDecrement =  () => setCount(count-1)


return(
    <>
    <button onClick={handelIncrement}>Add</button>
    <p>{count}</p>
    <button onClick={handelDecrement}>Sub</button>
    </>
)
}

export default Excercise1