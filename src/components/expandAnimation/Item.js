import React, { useState } from 'react'

function Item({ item }) {
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
                    className='toggle-btn'
                >
                    {isVisible ? '-' : '+'}
                </button>
            </div>
            <div
                className={isVisible ? 'content-visible' : 'content-hide'}
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