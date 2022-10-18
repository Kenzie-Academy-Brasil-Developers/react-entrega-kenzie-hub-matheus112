import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { toast } from "react-toastify";

export const AuthContexts = createContext({});

export default function AuthProvider({ children }) {
  const [tech, setTech] = useState([]);

  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(null);

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
  async function LoginUser(data) {
    await Api.post("/sessions", data)
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
        navigate("/dashboard");
        setUser(res.data.user);
        setTech(res.data.user.techs);
        setToken(true);
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


  useEffect(() => {
    async function profileUser() {
      const token = localStorage.getItem("@kenzieHub:token");
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.get(`/profile`).then((res) => {
        setTech(res.data.techs)
        navigate('/dashboard')
      });
    }
    profileUser();
  }, []);



  async function RegisterUser(data) {
    await Api.post("/users", data)
      .then((res) => {
        navigate("/");
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
        user,
        setUser,
        RegisterUser,
      }}
    >
      {children}
    </AuthContexts.Provider>
  );
}
