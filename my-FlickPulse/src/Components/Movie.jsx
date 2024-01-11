import React, { useState } from 'react'
import { UserAuth } from '../Utils/AuthContext';
import { db } from '../firebase';
import { updateDoc,doc,arrayUnion, setDoc, getDoc } from 'firebase/firestore';


function Movie({ item }) {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false)
    const { user } = UserAuth();

    const movieId = doc(db, 'users', `${user?.email}`)

    const savedShow = async () => {
      if(user?.email){
        setLike(!like)
        setSave(true)
        await updateDoc(movieId, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      }else{
        alert('Please login to save your favorite movies!')
      }
    }
  return (
    <>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer p-2 inline-block relative h-full'>
            <div className='hover:bg-black/60 w-full h-full text-white opacity-0 hover:opacity-100 absolute top-0 left-0'>
                <p className='whitespace-normal font-bold text-center flex justify-center items-center w-full h-full text-xs md:text-sm'>{item?.title}</p>
                <p onClick={savedShow}>{like ?  <i className="ri-heart-fill top-4 left-4 text-gray-300 absolute"></i> : <i className="ri-heart-line top-4 left-4 text-gray-300 absolute"></i>}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
                className='w-full h-auto block' />
        </div>
    </>
  )
}

export default Movie