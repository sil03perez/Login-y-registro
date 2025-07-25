import { use, useState } from "react";
import DefaultLayout from "../layout/Default.layout"
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to="/dashboard" />
  }
    return ( 
        
        <DefaultLayout>
          <form className="form">
        <h1>LOGIN</h1>
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

        <button type="submit">LOGIN</button>
    </form> 
    </DefaultLayout> 
    
)

 
}