import { useContext } from "react";
import AuthContext from "../../context/auth";

const Login = () => {
  const context = useContext(AuthContext);

  function handleLogin() {
    context.Login();
  }
  console.log(context);

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" name="email" placeholder="mymail@mail.com" />
        <input type="text" name="name" placeholder="Digite o seu nome" />
        <button type="submit" onClick={handleLogin}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;
