import React, {useState} from 'react'

function Normal() {
    const [normalValue, setNormalValue] = useState('')
  return (
    <>
    <input type='text' value={normalValue} onChange={(e) => setNormalValue(e.target.value)} placeholder='without debonce' /> {normalValue}   
    </>
  )
}

export default Normal