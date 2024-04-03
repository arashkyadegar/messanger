import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import {
     postsRecieved
} from "../../redux/reducer/posts"
function StoryComponent(props: any) {
     const dispatch = useAppDispatch();
     const img = `images/${props.avatar}`
     return (
          <div className=' flex flex-col justify-between items-center w-16 h-24 m-1'>
               <div className='relative flex justify-center items-center w-18 h-18 p-1 rounded-full  outline outline-1 outline-gray-300'>
                    <img className='aspect-square  rounded-full' src={img} alt='' title='' />
                    <a className='z-10 w-6 h-6 absolute top-12 right-0 rounded-full bg-blue-500 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
               </a>
               </div>

               <h6 className=' p-1 h-6 text-xs text-center items-center w-full line-clamp-1'>{props.name}</h6>
          </div>);
}

export default StoryComponent;
