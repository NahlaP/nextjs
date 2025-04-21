
import React from 'react'

const Navbar = () => {
  return (
    <div className='lg:block'>
        <div className='container '>
            <div className='flex justify-center items-center  gap-4   py-4  text-black  '>
                <div className='cursor-pointer hover:text-blue-600'>Home</div>

                <div className='cursor-pointer hover:text-blue-600'>Blog</div>

            </div>
        </div>
    </div>
  )
}



export default Navbar