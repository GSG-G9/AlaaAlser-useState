import React, { useState } from 'react';

function Excercise4() {


  const [enterInput, setEnterInput] = useState('');
  const [data, setData] = useState({
      email : "",
      password : "",
      confirmPasword : ""
  });



  return (
    <>
      <form onSubmit={{}}>
        <div>
          <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData( prevData =>  ({ ...prevData, email: e.target.value }))} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData( prevData =>  ({ ...prevData, password: e.target.value }))} />
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" value={data.confirmPasword} onChange={(e) => setData( prevData =>  ({ ...prevData, confirmPasword: e.target.value }))} />
        </div>
        {data.password !== data.confirmPasword && <p>Password don't match</p>}
        <div>
          <button type="submit"  >sign up</button>
        </div>
      </form>
    </>
  )
}

export default Excercise4;
