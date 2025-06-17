import DefaultLayout from "../layout/Default.layout"

export default function Login() {
    return ( 
        
        <DefaultLayout>
          <form className="form">
        <h1>LOGIN</h1>
        <label >USERNAME</label>
        <input type="text" />

        <label >PASSWORD</label>
        <input type="password" />

        <button type="submit">LOGIN</button>
    </form> 
    </DefaultLayout> 
    
)

 
}