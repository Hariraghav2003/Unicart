import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate= useNavigate();
    const signupHandler = () => {
        navigate("/signin"); // Navigate to the sign-in page
    };
  return (
    <div>
        <form>
            <label for="Firstname">Firstname:</label><br></br>
            <input type='text' id='firstname' required></input> <br></br><br></br>

            <label for="Lastname">Lastname:</label><br></br>
            <input type='text' id='Lastname' required></input> <br></br><br></br>

            <label for="username">Username:</label><br></br>
            <input type='text' id='username' required></input> <br></br><br></br>

            <label for="email">Email:</label><br></br>
            <input type='text' id='email' required></input> <br></br><br></br>

            <label for="Password">Password:</label><br></br>
            <input type='password' id='password' required></input><br></br><br></br>

            <label for="RePassword">Retype-Password:</label><br></br>
            <input type='password' id='repassword' required></input><br></br><br></br>

            <input type='submit' value={"Sign-in"} onClick={signupHandler()} ></input>
        </form>
    </div>
  )
}

export default Signup
