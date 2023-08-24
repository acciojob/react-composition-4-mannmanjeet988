
import React,{useState}from "react";
import './../styles/App.css';

const App = () => {

  const[user,setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  function handleSubmit(e){
      e.preventDefault()
      if(!user.name || !user.email || !user.password){
        alert("All fields are mandatory!")
      }
      console.log(user)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label name="userName">Name</label>
            <input type="text" onChange={e => setUser({...user, name: e.target.value})} /> <br/>
            <label name="email">Email</label>
            <input type="email" onChange={e => setUser({...user, email: e.target.value})} /> <br/>
            <label name="password">Password</label>
            <input type="password" onChange={e => setUser({...user, password: e.target.value})} /> <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
