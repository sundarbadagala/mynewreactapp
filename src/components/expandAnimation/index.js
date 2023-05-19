import React from 'react'
import './styles.css'
import {data} from './helper'
import Item from './Item'

function Index() {
  return (
    <>
      <main className='container'>
        {
          data.map((item)=><Item key={item.id} item={item}/>)
        }
        
      </main>
    </>
  )
}

export default Index