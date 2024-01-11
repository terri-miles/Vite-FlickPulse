import React, { useEffect, useState } from 'react'
import { UserAuth } from '../Utils/AuthContext';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

function SavedShows() {
    const[movies, setMovies] = useState([]);
    const { user } = UserAuth();

    const slideLeft = () =>{
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () =>{
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) =>{
            setMovies(doc.data()?.savedShows);
        })
    },[user?.email])

    const deleteMovie = async (passedID) =>{
        try {
                const results = movies.filter((item) => item.id !== passedID);
                await updateDoc(doc(db, 'users', `${user?.email}`), {
                    savedShows: results
                })
        }catch (err){
            console.log(err);
        }
    }
  return (
    <>
        <h2 className='text-white p-4 md:text-xl text-bold'>My Shows</h2>
        <div className='flex items-center relative group'>
            <p className='bg-white rounded-full absolute left-0 text-lg p-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={slideLeft}><i className="ri-arrow-right-s-line"></i></p>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar'>
                    {movies.map((item) => (
                        <div key={item?.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer p-2 inline-block relative h-full'>
                            <div className='hover:bg-black/60 w-full h-full text-white opacity-0 hover:opacity-100 absolute top-0 left-0'>
                                <p className='whitespace-normal font-bold text-center flex justify-center items-center w-full h-full text-xs md:text-sm'>{item?.title}</p>
                                <p onClick={() => deleteMovie(item.id)}><i className="ri-close-fill top-4 right-4 text-[20px] absolute"></i></p>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                            alt={item?.title}
                            className='w-full h-auto block' />
                        </div>
                    ))}
            </div>
            <p className='bg-white rounded-full absolute right-0 text-lg p-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' onClick={slideRight}><i className="ri-arrow-left-s-line"></i></p>
        </div>
    </>
  )
}

export default SavedShows