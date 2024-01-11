import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../Utils/AuthContext';

function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, logIn } = UserAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await logIn(email, password)
            navigate('/')
        } catch(error) {
            console.log(error);
        }
        }
    
    
  return (
    <>
        <div className='w-full h-screen'>
            <img 
                alt='/'
                className='hidden sm:block absolute w-full h-[750px] object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/a61a12da-537d-4ef5-99d2-965852467247/NG-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
            <div className='w-full px-4 py-24 z-50 h-screen absolute'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        <form onClick={handleSubmit} className='w-full flex flex-col py-4'>
                            <input type='email'
                                   onChange={(e) => setEmail(e.target.value)}
                                   className='p-3 my-2 bg-gray-500 rounded border-none outline-none'
                                   placeholder='Email'
                                   autoComplete='email' 
                                   name='email'/>
                            <input type='password'
                                   onChange={(e) => setPassword(e.target.value)}
                                   className='p-3 my-2 bg-gray-500 rounded border-none outline-none'
                                   placeholder='Password'
                                   autoComplete='current-password'
                                   name='password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-500'>
                                <p><input type='checkbox' className='mr-2'/>Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <Link to='/signup'>
                                <p className='pt-16 pb-2'><span className='text-gray-500'>New to FlickPulse?</span> Sign up now</p>
                            </Link>
                            <p className='text-xs text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-600'> Learn more.</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login