import React, { useState } from 'react'
import Button from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './signin.css'

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userLogin | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(userLogin, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <main className='container-signin'>
      <div className='content-signin'>
        <h1>Acesso de membros</h1>
        <p>Usuário</p>
        <input
          type="text"
          placeholder="Digite seu usuário"
          value={userLogin}
          onChange={(e) => [setUserLogin(e.target.value), setError("")]}
        />
        <p>Senha</p>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [SetPassword(e.target.value), setError("")]}
        />
        <p className='error-signin'>{error}</p>
        <Button type='button' Text="ENTRAR" onClick={handleLogin} />
        <div className='label-signup'>
          Não tem uma conta?
          <Link to="/signup" className='link-signup'>&nbsp;Registrar</Link>
        </div>
      </div>
    </main>
  );
};

export default Signin;