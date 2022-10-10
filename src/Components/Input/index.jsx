// import React from 'react'

import {StyledInput} from './style'

const Input = ({register,name,...res})=>{
    return <StyledInput {...register(name)} {...res}/> 
    
}

export default Input