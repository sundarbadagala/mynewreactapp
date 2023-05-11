import React from 'react'
import { helperThrottle } from '../../helpers/helperThrottle'

function Throttling() {
    const handleClick = () => {
        console.log('normal click');
    }
    const handleThrottle = helperThrottle(() => {
        console.log('throttle click...');
    }, 500)
    return (
        <div>
            <div>please click continuosly</div>
            <button onClick={handleClick}>normal button</button> <br />
            <button onClick={handleThrottle}>throttle button</button>
        </div>
    )
}

export default Throttling
//note : it is also usefull for operations liks continuous dagging, continuous resize add event listeners like those

