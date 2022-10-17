import ModalBg from "../ModalBg";
import Input from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormAdd } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContexts } from "../../../Contexts/AuthContexts";
import { useContext } from "react";

function ModalAddtech({ setModalAdd }) {
    const {onSubmitForm}=useContext(AuthContexts)
    const formSchema = yup.object({
        title: yup.string().required(' Digite uma Tecnologia'),
    })
  
    const {register, handleSubmit ,formState :{errors} }= useForm({
    resolver: yupResolver(formSchema)
    })
   
    
    return (
        <>
        <ModalBg>
            <FormAdd onSubmit={handleSubmit(onSubmitForm)}>
            <div className="divH2">
                <button type="button" onClick={()=>setModalAdd(false)}>X</button>

                <h2>Adicionar Technologia</h2>
            </div>
        <div className="divInput">
            <label htmlFor="">Nome  {errors.title && <span className='spanError'>&ensp; {errors.title.message}</span>}</label>
            <Input className="inputs" placeholder="Digite aqui ..." register={register} name="title"/>
            <label htmlFor="">Selecionar status</label>
            <select  {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
        </div>
                <button className="buttoAdd" type='submit'>Cadastrar Tecnologia</button>
            </FormAdd>
          </ModalBg>
        </>
    );
}

export default ModalAddtech;
