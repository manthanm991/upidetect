import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='text-center spinner-container'>
        <img className='spinimg my-4' src={loading} alt="loading" />
      </div>
    )
}

export default Spinner;
