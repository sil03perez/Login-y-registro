import { useState } from "react";
import DefaultLayout from "../layout/Default.layout"
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Singup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to="/dashboard" />
  }
    return ( 
        
        <DefaultLayout>
          <form className="form">
        <h1>SIGNUP</h1>
        <label >NAME</label>
        <input type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <label >USERNAME</label>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <label >PASSWORD</label>
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">CREATE USER</button>
    </form> 
    </DefaultLayout> 
    
)

 
}