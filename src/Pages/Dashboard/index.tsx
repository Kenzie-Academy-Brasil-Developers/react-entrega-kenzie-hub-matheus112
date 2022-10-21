import {useNavigate} from "react-router-dom"
// @ts-ignore
import img from "../../img/Logo.png"
import './style'
import {useContext,useEffect,  useState} from "react"
import { Container, Main, Nav } from "./style"
import ListTech from "../../Components/Listatech"
import ModalAddtech from "../../Components/Modal/ModalAdd"
import ModalBg from "../../Components/Modal/ModalBg"
import { AuthContexts } from "../../Contexts/AuthContexts"





export interface iSetModal{
    modalAdd?:boolean ;
    setModalAdd: React.Dispatch<React.SetStateAction<boolean>>
}
function Dashboard(){
    const navigate = useNavigate()
    const {tech}=useContext(AuthContexts)


    const [modalAdd , setModalAdd] = useState(false)
    const userId = localStorage.getItem('@kenzieHub:userId')
    
    
    const name = localStorage.getItem('@kenzieHub:name')
    
    const course_module= localStorage.getItem('@kenzieHub:course_module')
  
    
    useEffect(()=>{
        if(!userId){
            navigate('/')
        }
    },[navigate,userId])  

    
    function logout(){
        navigate('/')
        localStorage.clear()
    }


    return(
        <>
        {modalAdd && (
            <ModalBg>
                <ModalAddtech setModalAdd={setModalAdd}/>
            </ModalBg>

        )}
        <Nav>
            <div className="divheader">
            <img src={img} alt="" />
            <button  onClick={()=>logout()}>Sair</button>
            </div>
        </Nav>
            <Container>
            <div className="divUser">
                <div className="divInfoUser">
                    <p className="pName">Olá ,{name}</p>
                    <span className="spanModule">{course_module}</span>
                </div>
            </div>
            </Container>
            <Main >
        <div className="buttonAdd">
            <h2>Tecnologias</h2>
            <button onClick={()=>setModalAdd(true)} className="buttonAdd">+</button>
        </div>
            {tech.length > 0 && (
                <ListTech 
            
                />
            )}
            </Main>

        </>

    )
}

export default Dashboard