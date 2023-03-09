import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUserLogin] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.userLogin === JSON.parse(userToken).userLogin
      );

      if (hasUser) setUserLogin(hasUser[0]);
    }
  }, []);

  const signin = (userLogin, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.userLogin === userLogin);

    if (hasUser?.length) {
      if (hasUser[0].userLogin === userLogin && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ userLogin, token }));
        setUserLogin({ userLogin, password });
        return;
      } else {
        return "Usuário ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (name, lastName, specialty, seniority, techs, userLogin, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.userLogin === userLogin);

    if (hasUser?.length) {
      return "Já tem uma conta com esse usuário";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { name, lastName, specialty, seniority, techs, userLogin, password }];
    } else {
      newUser = [{ name, lastName, specialty, seniority, techs, userLogin, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUserLogin(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};