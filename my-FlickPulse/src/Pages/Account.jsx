import React from 'react'
import SavedShows from '../Components/SavedShows'

function Account() {
  return (
    <>
      <div className='w-full text-white relative'>
        <img 
          className='w-full h-[400px] 0bject-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/a61a12da-537d-4ef5-99d2-965852467247/NG-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='/'/>
          <div className='w-full h-[550px] bg-black/60 top-0 left-0 fixed'></div>
          <div className='absolute top-[30%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account