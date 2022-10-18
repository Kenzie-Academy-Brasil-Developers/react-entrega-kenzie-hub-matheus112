import { SectionTech } from "./style"
import {FaRegTrashAlt} from "react-icons/fa"
import { useContext } from "react";
import { AuthContexts } from "../../Contexts/AuthContexts";
import { TechContexts } from "../../Contexts/TechContexts";
function ListTech(){

    const {deletOn}=useContext(TechContexts)
    const {tech}=useContext(AuthContexts)


    return(
        <>
        
        <SectionTech>
            {tech.map((data , index)=>
            <div className="divHover" key={index} id={data.id} >
                <span>{data.title}</span>
                <p>{data.status}</p>
                <button onClick={()=>deletOn(data.id)}><FaRegTrashAlt/></button>
            </div>
            )
            }
        </SectionTech>
        </>
        
    )
}

export default ListTech

