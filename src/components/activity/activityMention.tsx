import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function ActivityMentionComponent(props: any) {
     const dispatch = useAppDispatch();
     const username = "amin_.ta"
     return (
          <>
               <div className='col-span-1'>

                    <div className='w-full   flex justify-center p-1' >
                         <img className=' w-16  aspect-square ' src="/images/2.jpg" title="" alt="" />
                    </div>
                   </div>
               <div className='col-span-2 flex flex-col justify-center text-left text-xs p-1' >
                    <h6 className='font-bold'>{username}<span className='font-medium'> : mentioned you in a comment</span></h6>


               </div>
               <div className='col-span-1 flex flex-col justify-center '>
                    <div className='w-full   flex flex-row justify-center rounded-full overflow-hidden ' >
                         <img className='w-14 aspect-square  rounded-full' src="/images/pexels-italo-melo-2379004.jpg" title="" alt="" />
                    </div>

               </div>
          </>
     );
}

export default ActivityMentionComponent;
