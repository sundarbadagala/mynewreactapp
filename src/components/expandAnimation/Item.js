import React, { useEffect, useRef, useState } from 'react'

function Item({ item }) {
    const divRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const handleToggle = () => {
        setIsVisible(prev => !prev)
    }
    return (
        <>
            <div className='header'>
                {item.header}
                <button
                    onClick={handleToggle}
                >
                    {isVisible ? '-' : '+'}
                </button>
            </div>
            <div
                className={isVisible ? 'content-visible' : 'content-hide'}
                onAnimationEnd={handleToggle}
                style={{ maxHeight: isVisible ? '500px' : '0px' }}
            >
                {
                    item.content.map((item, index) => <p key={index}>{item}</p>)
                }
            </div>
        </>
    )
}

export default Item