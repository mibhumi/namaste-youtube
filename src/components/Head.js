// rafce
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img
                className='h-8 cursor-pointer'
                alt="menu"
                onClick={() => toggleMenuHandler()}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOFYlVrU65tBnWYP5bmEKpaCQbK7FMBMQJtRV7TJJug&s"
            />
            <img
                className='h-8 mx-2'
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
        </div>
        <div className="col-span-10 px-10">
            <input className="border-gray-400 w-1/2 border p-2 rounded-l-full" type="text" />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                🔍
            </button>
        </div>
        <div>
            <img 
                className='h-8'
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"     
            />
        </div>
    </div>
  )
}

export default Head