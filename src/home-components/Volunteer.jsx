import React from 'react'
import volunteer from '../assets/volunteer.png'

const Volunteer = () => {
  return (
    <div className='min-h-3 flex rounded-lg shadow-md bg-[#221B3B] max-w-[95%] mx-auto items-center justify-center p-6 mt-3'>
      <div>
        <div>
          <h3 className='text-white text-center lg:text-5xl xl:text-7xl md:text-5xl sm:text-3xl'>Get Involved</h3>
          <div className=''>
            <p>
              <a href="https://rdfindia.org/join-us/donate/">
                <img src={volunteer} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteer