import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import useAuth from "../../hooks/useAuth";
import "./home.css";

const Home = () => {
  const { signout, user } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData(user);
      setUserData(data);
    };
    fetchData();
  }, [user]);

  const getUserData = async (user) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const hasUser = usersStorage?.filter(
      (storageUser) => storageUser.userLogin === user.userLogin
    );
    if (hasUser?.length) {
      return hasUser[0];
    } else {
      return null;
    }
  };

  const getUserInfo = () => {
    if (!userData) {
      return <p>Carregando...</p>;
    }

    const { name, lastName, specialty, seniority, techs } = userData;

    return (
      <>
        <h1>Olá, {name}!</h1>
        <h4>Dados do usuário:</h4>
        <h5>Nome:</h5>
        <p>{name}</p>
        <h5>Sobrenome: </h5>
        <p>{lastName}</p>
        <h5>Especialidade:</h5>
        <p>{specialty}</p>
        <h5>Nível de senioridade: </h5>
        <p>{seniority}</p>
        <h5>Tecnologias utilizadas:</h5>
        <p>{techs.join(", ")}</p>
      </>
    );
  };

  return (
    <main className="container-home">
      <div className="content-home">
        <div className="user-info">{getUserInfo()}</div>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
      </div>
    </main>
  );
};

export default Home;
