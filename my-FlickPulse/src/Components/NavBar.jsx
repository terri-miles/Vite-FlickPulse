import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Utils/AuthContext'

function Navbar() {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate();

  const handleLogOut = async() =>{
   try{
    await  logOut();
           navigate('/');
   }catch(err) {
    console.log(err);
   }

  }
  return (
    <>
        <div className='bg-transparent flex justify-between items-center w-full absolute z-[100] p-4'>
            <Link to='/'>
              <h1 className='text-red-600 text-3xl font-bold'>FlickPulse</h1>
            </Link>
            {user?.email ? (
              <div>
              <Link to='/account'>
                <button className='text-white pr-4'>Account</button>
              </Link>
                <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 text-white rounded hover:bg-red-500'>Log Out</button>
          </div>
            ) : (
              <div>
                <Link to='/login'>
                  <button className='text-white pr-4'>Sign In</button>
                </Link>
                <Link to='/signup'>
                  <button className='bg-red-600 px-6 py-2 text-white rounded hover:bg-red-500'>Sign Up</button>
                </Link>
            </div>
            )}
        </div>
    </>
  )
}

export default Navbar