import React, { useState } from 'react'

function Pagination({ totalCount, pageSize, handlePage }) {
    const intervalCount = 3
    const conditonCount = 5
    const totalPages = Math.ceil(totalCount / pageSize)
    const totalPagesArr = Array.from({ length: totalPages }, (_, i) => i)
    const [count, setCount] = useState(1)
    const [rightCount, setRightCount] = useState(totalPages)
    const handlePageNumber = (pageNumber, pos = '') => {
        const rights = rightCount < totalPages - conditonCount ? rightCount - intervalCount : totalPages - 10
        const lefts = count <= conditonCount ? 10 : count + intervalCount
        console.log('page number', pageNumber, 'interval', intervalCount, 'rights', rights, 'lefts', lefts);
        if (pageNumber + intervalCount < rights) {
            setCount(pageNumber)
        } else if (pageNumber - intervalCount > lefts) {
            setRightCount(pageNumber)
        } else if (pageNumber + intervalCount >= rights && pos === 'left') {
            setRightCount(pageNumber + intervalCount + 1)
        } else if (pageNumber + intervalCount >= lefts && pos === 'right') {
            setCount(pageNumber - intervalCount)
        }
    }
    const rightSidePage = () => {
        if (rightCount < totalPages - conditonCount) {
            return totalPagesArr.slice(rightCount - intervalCount, rightCount + intervalCount)
        } else if (rightCount >= totalPages - conditonCount) {
            return totalPagesArr.slice(totalPages - 10, totalPages)
        }else{
            return []
        }
    }
    const lefSidePage = () => {
        if (count <= conditonCount) {
            return totalPagesArr.slice(1, 10)
        } else if (count > conditonCount) {
            return totalPagesArr.slice(count - intervalCount, count + intervalCount)
        }else{
            return []
        }
    }
    return (
        <main className='pg_container'>
            <button className='pg_button' onClick={() => handlePageNumber(1)}>0</button>
            {
                count > conditonCount && <button>...</button>
            }
            {
                lefSidePage().map(item =>
                    <button
                        key={item}
                        className='pg_button'
                        onClick={() => handlePageNumber(item, 'left')}
                    >
                        {item}
                    </button>
                )
            }{
                lefSidePage()[lefSidePage().length - 1] + 1 !== rightSidePage()[0] && <button>...</button>
            }
            {
                rightSidePage().map(item =>
                    <button
                        key={item}
                        className='pg_button'
                        onClick={() => handlePageNumber(item, 'right')}
                    >
                        {item}
                    </button>
                )
            }
            {
                rightCount < totalPages - conditonCount && <button>...</button>
            }
            <button className='pg_button' onClick={() => handlePageNumber(totalPages)}>{totalPages}</button>

        </main>
    )
}

export default Pagination