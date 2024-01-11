import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Requests from '../Request'

function Main() {
    const[movies, setMovies] = useState([]);
    const { popular } = Requests

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() =>{
        axios.get(`${popular}`)
            .then(res =>{
            setMovies(res.data.results)
            })
            .catch(err =>{
                console.log(err);
            })
    },[])
    
    const truncateString = (str, num) =>{
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str
        }
    }

  return (
    <>
        <div className='w-full h-[450px] text-white'>
            <div className='w-full h-full relative'>
                <div className='absolute w-full h-full bg-gradient-to-tr from-black z-10'></div>
                <div className='w-full p-4 md:p-8 absolute top-[25%] z-50'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-5'>
                        <button className='border border-gray-500 bg-gray-300 text-black px-6 py-2 mr-4'>Play</button>
                        <button className='border border-gray-300 text-white px-5 py-2'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}
                    </p>
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                     className='w-full h-full object-cover' 
                     alt={movie?.title}/>
            </div>
        </div>
    </>
  )
}

export default Main