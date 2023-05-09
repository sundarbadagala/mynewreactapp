import React, { useState } from 'react'
import Block from './block'
import './styles.css'

function Index({ data }) {
    const [id, setId] = useState(null)
    return (
        <>
            {
                data.map(item => <Block key={item.id} item={item}/>)
            }
        </>
    )
}

export default Index