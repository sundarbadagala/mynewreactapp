import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

function CustomHook() {
    const [value, setValue] = useState('')
    const debonceValue = useDebounce(value, 500)
    useEffect(()=>{
        console.log(debonceValue);
    },[debonceValue])
  return (
    <>
    <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='with hook debounce'/>
    </>
  )
}

export default CustomHook