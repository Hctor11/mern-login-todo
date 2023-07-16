import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { AuthResposeError } from "../types/types";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorResponse, setErrorResponse] = useState("")
  const goTo = useNavigate()

  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to={'/Dashboard'}/>
  }

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

  return (
    <>
      <DefaultLayout>
        <form onSubmit={handleSubmit}>
          <h1> Log in </h1>
          {!! errorResponse && <div className="error-message">{errorResponse}</div>}
          <label htmlFor="">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />

          <button>Iniciar Sesion</button>
        </form>
      </DefaultLayout>
    </>
  );
};

export default Login;
