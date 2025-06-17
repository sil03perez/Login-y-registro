import DefaultLayout from "../layout/Default.layout"

export default function Singup() {
    return ( 
        
        <DefaultLayout>
          <form className="form">
        <h1>SIGNUP</h1>
        <label >NAME</label>
        <input type="text" />

        <label >USERNAME</label>
        <input type="text" />

        <label >PASSWORD</label>
        <input type="password" />

        <button type="submit">CREATE USER</button>
    </form> 
    </DefaultLayout> 
    
)

 
}