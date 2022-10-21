// import React from 'react'

import {StyledInput} from './style'




const Input = ({register,name,...res}:any)=>{
    return <StyledInput {...register(name)} {...res}/> 
    
}

export default Input