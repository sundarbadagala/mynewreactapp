import React, { useRef } from 'react'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

const api = `https://api.quotable.io/quotes?page=`

export default function Index() {
  const loader = useRef(null);
  const { loading, error, data } = useInfiniteScroll(api, loader, 0.5)
  return (
    <>
      {
        data.map((item, index) =>
          <div key={index} style={{ borderBottom: '1px solid #cece', padding: '4px 0px' }}>{item.content}</div>
        )
      }
      {loading && <p style={{ color: 'red' }}>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </>
  )
}
