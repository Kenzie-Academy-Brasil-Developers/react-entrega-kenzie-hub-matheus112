import {useNavigate} from "react-router-dom"
import img from "../../img/Logo.png"
import './style'
import {useEffect} from "react"
import { Container, Nav } from "./style"
function Dashboard(){

    const log = useNavigate()
    const userId = localStorage.getItem('@kenzieHub:userId')
    
    
    const name = localStorage.getItem('@kenzieHub:name')
    
    const course_module= localStorage.getItem('@kenzieHub:course_module')
    
    function logout(){
        localStorage.clear()
        log('/')
    }
    
    useEffect(()=>{
        if(!userId){
            log('/')
        }
    },[log,userId])  

    return(
        <>
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
                <div className="DivInfosDev">
                {/* <span className="line"></span> */}
                 <p>Que pena!Estamos em desenvolvimento  :( </p>
                 <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
                 </div>
                </div>
            </Container>
        </>

    )
}

export default Dashboard