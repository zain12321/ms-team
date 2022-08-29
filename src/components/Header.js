import React from 'react'
import { IoIosSearch, IoIosCheckmark } from 'react-icons/io'
import {BiDotsHorizontalRounded } from 'react-icons/bi'

function Header() {
  return (
    <div className='header'>
        <div className='search'>
             <IoIosSearch className='icon-search'/>
             <input search='search' name='search' placeholder='search' required className='search-bar
              
             '/>
        </div>
        <div className='logo'>
            <BiDotsHorizontalRounded className='dot'/>
            <div className='right-item'>
             <div className='name-logo'>
                 <p className='zf'>
                   ZF   </p>
             </div>
             <p className='right'>
                <IoIosCheckmark/>
             </p>
           </div>
        </div>

    </div>
  )
}

export default Header