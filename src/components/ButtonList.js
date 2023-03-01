import React from 'react'
import { Button } from './Button'

const ButtonList = () => {

    const lists = ['All', 'Gaming', 'Songs', 'Live', 'News', 'Cooking', 'Cricket'];

  return (
    <div className='flex'>
        {
            lists.map(list => 
                <Button name={list} /> )
        }
    </div>
  )
}

export default ButtonList