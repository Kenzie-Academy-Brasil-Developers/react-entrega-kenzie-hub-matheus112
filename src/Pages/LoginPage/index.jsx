import * as yup from 'yup';
import { Container } from './style';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form"
import Input from '../../Components/Input'
import {Api} from '../../services/api'
import { useNavigate} from'react-router-dom'
import {toast} from 'react-toastify'

function Login({token,setTOke}){
    const sucessoLogin = ()=> toast.success(' Login Efetuado com Sucesso! bem vindo', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const errorLogin = () =>toast.error(' Login Invalido!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const reg= useNavigate()
    const formSchema = yup.object({
        email: yup.string().required('Digite um email').email(),
        password: yup.string().required('Senha obrigatoria')
        })
        const {register, handleSubmit, formState:{errors} }= useForm({
        resolver: yupResolver(formSchema)
        })
function LoginUser (data){
    Api.post("/sessions", data)
        .then((res) => {localStorage.setItem("@kenzieHub:token",(res.data.token));
        localStorage.setItem("@kenzieHub:userId",(res.data.user.id));
        localStorage.setItem("@kenzieHub:name",(res.data.user.name));
        localStorage.setItem("@kenzieHub:course_module",(res.data.user.course_module));
        setTOke(true);
        sucessoLogin()

})
        .catch((err) => errorLogin());
};

if (token) {
    reg('/dashboard')

}

return(
<Container>
    <form onSubmit={handleSubmit(LoginUser)}>
        <h1 className='h1Login'>Login</h1>
        <div className='DivEmail'>
            <label htmlFor="">Email {errors.email && <span className='spanError'> -
                    {errors.email.message}</span>}</label>
            <Input name="email" type="text" placeholder="Digite seu email" register={register} />
        </div>
        <div className='senha'>

            <label htmlFor="">Senha {errors.password && <span className='spanError'> -
                    {errors.password.message}</span>}</label>
            <Input name="password" type="password" placeholder="Digite sua senha" register={register} />
        </div>
        <button className='buttonEntrar' type='submit'>Entrar</button>

        <span className='spanContar'>Ainda não possui uma conta?</span>
        <button className='buttonCadastre' onClick={()=> reg ("/register")} >Cadastre-se</button>
    </form>
</Container>
)
}

export default Login