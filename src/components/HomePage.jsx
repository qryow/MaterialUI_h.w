import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div className='btn__wrapper'>
      <Link to={'/posts'}>
        <button className='button1'>1 Задача</button>
      </Link>
      <Link to={'/tasks'}>
        <button className='button2'>2 Задача</button> 
      </Link>
    </div>
    </>
  )
}

export default HomePage