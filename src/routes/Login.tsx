import DefaultLayout from "../layout/DefaultLayout";

const Login = () => {
  return (
    <>
      <DefaultLayout>
        <form>
          <h1> Log in </h1>
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="password" />

          <button>Iniciar Sesion</button>
        </form>
      </DefaultLayout>
    </>
  );
};

export default Login;
