import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function PostHeaderComponent(props: any) {
     const dispatch = useAppDispatch();
     const title = props.title;
     const avatar = props.avatar;

     return (
          <div className='grid w-full grid-cols-4 content-center p-1'>
               
               <div className='col-span-1 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

               </div>
               <div className='col-span-2 text-left self-center'>
                    <h6>{title}</h6>
               </div>
               <div className='flex justify-end' >
                    <img className='w-14 aspect-square  rounded-full' src="/images/pexels-italo-melo-2379004.jpg" title="" alt="" />
               </div>

          </div>
     );
}

export default PostHeaderComponent;
