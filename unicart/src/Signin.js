import React from 'react'

function Signin() {
    
  return (
    <div>
      <form>
        <label for="email">Email:</label><br></br>
        <input type='text' id='email' required></input> <br></br><br></br>
        <label for="Password">Password:</label><br></br>
        <input type='password' id='password' required></input><br></br><br></br>
        <input type='submit' value={"Sign-in"}></input>
      </form>
    </div>
  )
}

export default Signin
