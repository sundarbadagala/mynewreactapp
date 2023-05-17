import React from 'react'
import CssFilterConverter from 'css-filter-converter'
import { icons } from './icons'

function Index({ type, fill, ...rest }) {
    const filter = CssFilterConverter.hexToFilter(fill)
    const Logo = icons[type]
    return (
        <>
            <img src={Logo} alt='' style={{ filter: filter.color }} {...rest} />
        </>
    )
}

export default Index

