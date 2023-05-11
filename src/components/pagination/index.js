import axios from 'axios'
import React, { useEffect } from 'react'
import Pagination from './pagination'
import './styles.css'

function Index() {
    const handlePage=(page)=>{
        console.log('page', page);
    }
    return (
        <>
            <Pagination totalCount={500} pageSize={10} handlePage={handlePage}/>
        </>
    )
}

export default Index