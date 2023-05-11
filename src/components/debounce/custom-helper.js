import React, {useState} from 'react'
import { helperDebounce } from '../../helpers/helperDebounce'

function CustomHelper() {
    const [value, setValue] = useState('')
    
    const handleChange = helperDebounce((e) => {
        setValue(e.target.value)
    }, 500)
    return (
        <>
            <input type='text' onChange={(e) => handleChange(e)} placeholder='with helper debounce' />  {value}
        </>
    )
}

export default CustomHelper