import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContexts = createContext({});

export default function AuthProvider({ children }) {
  const reg = useNavigate();
  const [token, setToke] = useState(false);
  const [user, setUser] = useState(null);
  const [tech, setTech] = useState([]);
  const sucessoLogin = () =>
    toast.success(" Login Efetuado com Sucesso! bem vindo", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const errorLogin = () =>
    toast.error(" Login Invalido!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  function LoginUser(data) {
    Api.post("/sessions", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("@kenzieHub:token", res.data.token);
        localStorage.setItem("@kenzieHub:userId", res.data.user.id);
        localStorage.setItem("@kenzieHub:name", res.data.user.name);
        localStorage.setItem(
          "@kenzieHub:course_module",
          res.data.user.course_module
        );
        Api.defaults.headers.authorization = `Bearer ${token}`;

        reg("/dashboard");

        setUser(res.data.user);
        setTech(res.data.user.techs);
        setToke(true);
        sucessoLogin();
      })
      .catch((err) => {
        errorLogin();
      });
  }
  const RegisterSucesso = () =>
    toast.success("Conta criado com sucesso!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const RegisterError = () =>
    toast.error("Email já cadastrado!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const TechError =()=>
  toast.warning("Technologia já foi cadastrada!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  useEffect(() => {
    async function profileUser() {
      const token = localStorage.getItem("@kenzieHub:token");
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.get(`/profile`).then((res) => setTech(res.data.techs));
    }
    profileUser();
  }, []);

  function onSubmitForm(data) {
    console.log(data);
    Api.post("/users/techs", data)
    .then((res) => {
      window.location.reload();
    })
      .catch((err) => TechError());
  }

  function deletOn(id) {
    Api.delete(`/users/techs/${id}`).then((res) => {
   window.location.reload() ;
    });
  }
  function RegisterUser(data) {
    Api.post("/users", data)
      .then((res) => {
        reg("/");
        RegisterSucesso();
      })
      .catch((err) => {
        RegisterError();
      });
  }

  return (
    <AuthContexts.Provider
      value={{
        LoginUser,
        token,
        tech,
        reg,
        user,
        setUser,
        onSubmitForm,
        deletOn,
        RegisterUser,
      }}
    >
      {children}
    </AuthContexts.Provider>
  );
}
