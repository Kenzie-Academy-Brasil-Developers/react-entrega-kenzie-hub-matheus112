import * as yup from 'yup';
import { Container } from './style';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form"
import Input from "../../Components/Input"
import {Api} from '../../services/api'
import img from '../../img/Logo.png'
import {useNavigate} from'react-router-dom'
import {toast} from 'react-toastify'

function Register(){
    const RegisterSucesso =() => toast.success('Conta criado com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        const RegisterError =() => toast.error('Dados invalidos!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
const formSchema = yup.object({
name:yup.string().required('Campo obrigatório').min(2,'Mínimo de 2 digitos'),
email: yup.string().required('Campo obrigatório').email('Email inválido'),
password: yup.string().required('Campo obrigatorio').min(8,'Mínimo de 8 dígitos'),
confirmar: yup.string().required('Senha esta diferente').min(8,'Mínimo de 8 dígitos').oneOf([yup.ref("password")], "Senhas diferentes!"),
})
const login= useNavigate()

const {register, handleSubmit , formState:{errors} }= useForm({
resolver: yupResolver(formSchema)
})
function RegisterUser (data){

    console.log(data)
    Api.post("/users", data)
    .then((res) => {
        RegisterSucesso()
})
.catch((err) => {
    RegisterError()
});
};
return(
<Container>
    <div className='h1Button'>
        <img src={img} alt="" />
        <button onClick={()=> login ("/")} >Voltar</button>
    </div>
    <form onSubmit={handleSubmit(RegisterUser)}>
        <h1 className='h1Register'>Crie sua conta</h1>
        <span className='slogan'>Rapido e grátis , vamos nessa</span>
        <div className='DivNameRegister'>
            <label>Nome  <span className='errorSpan'>- {errors.name?.message}</span> </label>
            
            <Input name="name" type="text" placeholder="Digite aqui seu Nome" register={register} />
        </div>
        <div className='emailRegiste'>

            <label htmlFor="">Email <span className='errorSpan'>- {errors.email?.message}</span></label>
            <Input name="email" type="text" placeholder="Digite aqui seu email" register={register} />
        </div>
        <div className='senhaRegiste'>

            <label htmlFor="">Senha <span className='errorSpan'>- {errors.password?.message}</span></label>
            <Input name="password" type="text" placeholder="Digite aqui sua senha" register={register} />
        </div>
        <div className='senhaRegiste'>

            <label htmlFor="">Confirmar Senha <span className='errorSpan'>- {errors.confirmar?.message}</span></label>
            <Input name="confirmar" type="text" placeholder="Confirme sua senha" register={register} />
        </div>
        <div className='bioRegiste'>

            <label htmlFor="">Bio</label>
            <Input name="bio" type="text" placeholder="Fale sobre você" register={register} />
        </div>
        <div className='contatoRegiste'>
            <label htmlFor="">Contato</label>
            <Input name="contact" type="text" placeholder="Opção de contrato" register={register} />
        </div>

        <div>
            <label>
                <p>Selecione o seu modulo</p>
            <select {...register("course_module")} id="">
                <option value="Primeiro Módulo">Primeiro Módulo</option>
                <option value="Segundo Módulo">Segundo Módulo</option>
                <option value="Terceiro Módulo">Terceiro Módulo</option>
                <option value="Quarto Módulo">Quarto Módulo</option>
                <option value="Quinto Módulo">Quinto Módulo</option>
                <option value="Sexto Módulo">Sexto Módulo</option>

            </select>
            </label>
        </div>
        <button className='buttonEntrar' type='submit'>Registrar</button>

    </form>
</Container>
)
}

export default Register