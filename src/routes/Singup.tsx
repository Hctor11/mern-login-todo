import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
// import { API_URL } from "../auth/constants";
import { AuthResposeError } from "../types/types";



const Singup = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorResponse, setErrorResponse] = useState("")

  const auth = useAuth()
  const goTo = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          name,
          password
        })
      }) 

      if(response.ok){
        console.log("usuario creado exitosamente");
        goTo('/')
      }else{
        console.error("algo fue mal en la creacion de usuario");
        const json = await response.json() as AuthResposeError;
        setErrorResponse(json.body.error);
        return;
      }
    }catch(error){
      return console.log(error);
    }
  }


  if(auth.isAuthenticated){
    <Navigate to={"/Dashboard"}/>
  }

  return (
    <>
      <DefaultLayout>
        <form className="form" onSubmit={handleSubmit}>
          <h1> Sign up </h1>
          {!! errorResponse && <div className="error-message">{errorResponse}</div>}
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button >Create user</button>
        </form>
      </DefaultLayout>
    </>
  )
}

export default Singup