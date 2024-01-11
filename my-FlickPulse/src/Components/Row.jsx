import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';

function Row( {title, fetchURL, rowID} ) {
    const [movies, setMovies] = useState([]);
    

    useEffect(() =>{
        axios.get(`${fetchURL}`)
        .then(res => {
            setMovies(res.data.results)
        })
        .catch(err =>{
            console.log(err);
        })
    },[fetchURL])

    const slideLeft = () =>{
        const slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () =>{
        const slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };



  return (
    <>
        <h2 className='text-white p-4 md:text-xl text-bold'>{title}</h2>
        <div className='flex items-center relative group'>
            <p className='bg-white rounded-full absolute left-0 text-lg p-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={slideLeft}><i className="ri-arrow-right-s-line"></i></p>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar'>
                    {movies.map(item =>(
                        <Movie key={item?.id} item={item} />
                    ))}
            </div>
            <p className='bg-white rounded-full absolute right-0 text-lg p-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={slideRight}><i className="ri-arrow-left-s-line"></i></p>
        </div>
    </>
  )
}

export default Row