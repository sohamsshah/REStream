import React, { useState } from 'react'
import {signUpUser} from "./../../../utils/api-calls/auth"
import {useAuth} from "./../../../context/auth-context"

function SignupPage() {
    const {dispatch} = useAuth();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
          <button onClick={() => signUpUser(email, username, password, dispatch)}>Submit</button>  
        </div>
    )
}

export default SignupPage

