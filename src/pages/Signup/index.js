import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import useAuth from '../../hooks/useAuth'
import './signup.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [seniority, setSeniority] = useState('');
  const [techs, setTechs] = useState([]);
  const [userLogin, setUserLogin] = useState('');
  const [password, SetPassword] = useState('');
  const [passwordConfirm, SetPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleTechsChange = (target) => {
    const value = target.value;
    const isChecked = target.checked;
    if (isChecked) {
      setTechs([...techs, value]);
    } else {
      setTechs(techs.filter((tech) => tech !== value));
    }
  };

  const handleSignup = () => {
    if (!name | !lastName | !specialty | !seniority | !userLogin | !password | !passwordConfirm) {
      setError('Preencha todos os campos');
      return;
    } else if (password !== passwordConfirm) {
      setError('As senhas não são iguais');
      return;
    }

    const res = signup(name, lastName, specialty, seniority, techs, userLogin, password);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadatrado com sucesso!');
    navigate('/');
  };

  return (
    <main className='container-signup'>
      <div className='content-signup'>
        <h1>CADASTRO DE DEV</h1>

        <div className='login-input-signup'>
          <p>Nome</p>
          <input
            type='text'
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => [setName(e.target.value), setError('')]}
          />
          <p>Sobrenome</p>
          <input
            type='text'
            placeholder='Digite seu sobrenome'
            value={lastName}
            onChange={(e) => [setLastName(e.target.value), setError('')]}
          />
          <p>Nome de usuário</p>
          <input
            type='text'
            placeholder='Digite seu nome de usuário'
            value={userLogin}
            onChange={(e) => [setUserLogin(e.target.value), setError('')]}
          />
          <p>Senha</p>
          <input
            type='password'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => [SetPassword(e.target.value), setError('')]}
          />
          <p>Confirme sua senha</p>
          <input
            type='password'
            placeholder='Digite sua senha novamente'
            value={passwordConfirm}
            onChange={(e) => [SetPasswordConfirm(e.target.value), setError('')]}
          />
        </div>

        <div className='specialty-signup'>
          <h5>Escolha sua especialidade:</h5>
          <div className='specialty-content-signup'>

            <div className='specialty-input-signup'>
              <input
                type='radio'
                id='front-end'
                name='specialty'
                value='front-end'
                checked={specialty === 'front-end'}
                onChange={(e) => {
                  setSpecialty(e.target.value);
                  setError('');
                }}
              />
              <p>Front-end</p>
            </div>

            <div className='specialty-input-signup'>
              <input
                type='radio'
                id='back-end'
                name='specialty'
                value='back-end'
                checked={specialty === 'back-end'}
                onChange={(e) => {
                  setSpecialty(e.target.value);
                  setError('');
                }}
              />
              <p>Back-end</p>
            </div>

            <div className='specialty-input-signup'>
              <input
                type='radio'
                id='fullstack'
                name='specialty'
                value='fullstack'
                checked={specialty === 'fullstack'}
                onChange={(e) => {
                  setSpecialty(e.target.value);
                  setError('');
                }}
              />
              <p>Fullstack</p>
            </div>
          </div>
        </div>

        <div className='technologies-signup'>
          <h5>Marque as tecnologias que você domina:</h5>
          <div className='techs-content-signup'>
            <div className='tech-signup'>
              <input
                type="checkbox"
                id="angular"
                name="techs"
                value="angular"
                checked={techs.includes("angular")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Angular
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="bootstrap"
                name="techs"
                value="bootstrap"
                checked={techs.includes("bootstrap")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Bootstrap
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="css"
                name="techs"
                value="css"
                checked={techs.includes("css")}
                onChange={(e) => handleTechsChange(e.target)}
              /> CSS
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="django"
                name="techs"
                value="django"
                checked={techs.includes("django")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Django
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="html"
                name="techs"
                value="html"
                checked={techs.includes("html")}
                onChange={(e) => handleTechsChange(e.target)}
              /> HTML
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="java"
                name="techs"
                value="java"
                checked={techs.includes("java")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Java
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="javascript"
                name="techs"
                value="javascript"
                checked={techs.includes("javascript")}
                onChange={(e) => handleTechsChange(e.target)}
              /> JavaScript
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="jquery"
                name="techs"
                value="jquery"
                checked={techs.includes("jquery")}
                onChange={(e) => handleTechsChange(e.target)}
              /> jQuery
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="mysql"
                name="techs"
                value="mysql"
                checked={techs.includes("mysql")}
                onChange={(e) => handleTechsChange(e.target)}
              /> MySQL
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="node"
                name="techs"
                value="node"
                checked={techs.includes("node")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Node.js
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="php"
                name="techs"
                value="php"
                checked={techs.includes("php")}
                onChange={(e) => handleTechsChange(e.target)}
              /> PHP
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="react"
                name="techs"
                value="react"
                checked={techs.includes("react")}
                onChange={(e) => handleTechsChange(e.target)}
              /> React
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="ruby"
                name="techs"
                value="ruby"
                checked={techs.includes("ruby")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Ruby
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="sass"
                name="techs"
                value="sass"
                checked={techs.includes("sass")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Sass
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="typescript"
                name="techs"
                value="typescript"
                checked={techs.includes("typescript")}
                onChange={(e) => handleTechsChange(e.target)}
              /> TypeScript
            </div>

            <div className='tech-signup'>
              <input
                type="checkbox"
                id="vue"
                name="techs"
                value="vue"
                checked={techs.includes("vue")}
                onChange={(e) => handleTechsChange(e.target)}
              /> Vue.js
            </div>

          </div>
        </div>

        <div className='seniority-signup'>
          <h5>Escolha sua senioridade:</h5>
          <div className='seniority-content-signup'>

            <div className='seniority-input-signup'>
              <input
                type='radio'
                id='junior'
                name='seniority'
                value='junior'
                checked={seniority === 'junior'}
                onChange={(e) => {
                  setSeniority(e.target.value);
                  setError('');
                }}
              />
              <p>Júnior</p>
            </div>

            <div className='seniority-input-signup'>
              <input
                type='radio'
                id='pleno'
                name='seniority'
                value='pleno'
                checked={seniority === 'pleno'}
                onChange={(e) => {
                  setSeniority(e.target.value);
                  setError('');
                }}
              />
              <p>Pleno</p>
            </div>

            <div className='seniority-input-signup'>
              <input
                type='radio'
                id='senior'
                name='seniority'
                value='senior'
                checked={seniority === 'senior'}
                onChange={(e) => {
                  setSeniority(e.target.value);
                  setError('');
                }}
              />
              <p>Sênior</p>
            </div>
          </div>
        </div>

        <p className='error-signup'>{error}</p>
        <Button type='button' Text='Inscrever-se' onClick={handleSignup} />
        <div className='label-signin'>
          Já tem uma conta?
          <Link to='/' className='link-signup'>&nbsp;Entrar</Link>
        </div>
      </div >
    </main >
  );
};

export default Signup;