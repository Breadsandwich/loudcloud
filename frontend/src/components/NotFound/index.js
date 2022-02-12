import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './NotFound.css'


function NotFound() {
const history = useHistory();

useEffect(() => {
  setTimeout(() => {
      history.push('/')
  }, 3000)
}, [history])

  return (
    <>
      <div className='page_not_found'>
        <h1>Page Not Found</h1>
        <h2></h2>
      </div>
    </>
  )
}

export default NotFound
