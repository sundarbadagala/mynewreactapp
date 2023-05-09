import React, { useState } from 'react'
import Index from './index'

function Block({ item }) {
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => {
        setIsShow(prev => !prev)
    }
    return (
        <>
            <div onClick={handleShow} className='title'>
                <span>{isShow ? '-' : '+'}</span> {item.title}
            </div>
            {
                isShow &&
                <div className='content'>
                    {
                        Array.isArray(item.content) ?
                            <Index data={item.content} /> :
                            item.content

                    }
                </div>
            }
        </>

    )
}

export default Block