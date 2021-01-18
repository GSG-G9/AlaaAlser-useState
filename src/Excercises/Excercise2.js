import React, {useState} from 'react';

function Excercise2() {

const colors = [ 'blue', 'green' , 'red' ]

const [color, setColor] = useState('#000')

const changeColor = (col) => setColor(col)

return (
    <>
    <div style={{background:color,height:'100vh'}}>
        {colors.map((backGroundColor) => <button onClick={() => changeColor(backGroundColor)}>{backGroundColor}</button> )}
    </div>
    </>
)

}

export default Excercise2