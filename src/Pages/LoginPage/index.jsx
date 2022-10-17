import * as yup from 'yup';
import { Container } from './style';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form"
import Input from '../../Components/Input'
import { useContext } from 'react';
import { AuthContexts } from '../../Contexts/AuthContexts';

function Login(){
    const {LoginUser, reg}=useContext(AuthContexts)

    const formSchema = yup.object({
        email: yup.string().required('Digite um email').email(),
        password: yup.string().required('Senha obrigatoria')
        })
        const {register, handleSubmit, formState:{errors} }= useForm({
        resolver: yupResolver(formSchema)
        })



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