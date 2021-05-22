import React, { useState } from 'react'
import {loginUser} from "./../../../utils/api-calls/auth"
import {useAuth} from "./../../../context/auth-context"

function LoginPage() {
    const {dispatch} = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
          <button onClick={() => loginUser(username, password, dispatch)}>Submit</button>  
        </div>
    )
}

export default LoginPage
