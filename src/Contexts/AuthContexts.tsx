import React, { createContext, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Api } from "../services/api";
import { toast } from "react-toastify";


interface iCounterContextProps{
  children:React.ReactNode;
}
interface iCounterContext{
  tech:iTech[];
  user:iUser | null;
  setUser: React.Dispatch<React.SetStateAction< null >>;
  navigate: NavigateFunction
  LoginUser:(data: iLoginUser) => Promise<void>
  RegisterUser:(data: iRegisterUser) => Promise<void>

}
interface iTech{
  title:string
  status:string
  id:string
}

interface iUser{
    email:string;
    password:string
}

export interface iLoginUser{
  email:string ;
  password:string
}
export interface iRegisterUser{
  email:string
  password:string
  name:string
  contact:string
  course_module:string
}

export const AuthContexts = createContext<iCounterContext>({} as iCounterContext);



export default function AuthProvider({ children }:iCounterContextProps) {
  const [tech, setTech] = useState([]);

  const navigate = useNavigate();
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


  async function LoginUser(data:iLoginUser) {
    await Api.post("/sessions", data)
      .then((res) => {
        
        localStorage.setItem("@kenzieHub:token", res.data.token);
        localStorage.setItem("@kenzieHub:userId", res.data.user.id);
        localStorage.setItem("@kenzieHub:name", res.data.user.name);
        localStorage.setItem("@kenzieHub:course_module",res.data.user.course_module);
        Api.defaults.headers.authorization = `Bearer ${res.data.token}`;
        navigate("/dashboard");
        setUser(res.data.user);
        setTech(res.data.user.techs);
        sucessoLogin();
      })
      .catch((_) => {
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
      setTimeout(()=>{},1500)
      const token = localStorage.getItem("@kenzieHub:token");
      console.log(token)
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.get(`/profile`).then((res) => {setTech(res.data.techs) ; navigate('/dashboard')});
    }
    profileUser();
  }, [user,navigate]);

  async function RegisterUser(data:iRegisterUser) {
    await Api.post("/users", data)
      .then((res) => {
        navigate("/");
        RegisterSucesso();
      })
      .catch((_) => {
        RegisterError();
      });
  }

  return (
    <AuthContexts.Provider
      value={{
        LoginUser,
        tech,
        user,
        navigate,
        setUser,
        RegisterUser,
      }}
    >
      {children}
    </AuthContexts.Provider>
  );
}
