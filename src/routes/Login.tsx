import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to={'/Dashboard'}/>
  }

  return (
    <>
      <DefaultLayout>
        <form>
          <h1> Log in </h1>
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
