import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function ActivityFollowReqComponent(props: any) {
     const dispatch = useAppDispatch();
     const username = "amin_.ta";
     return (
          <>
               <>
                    <div className='col-span-2'>
                         <div className='h-full flex flex-col justify-center items-center ' >
                         <div className='w-full   flex flex-row justify-center gap-2 text-xs' >
                                   <button className='bg-blue-400 text-white px-2 py-1 rounded-md'>Confirm</button>
                                   <button className='border border-gray-400 px-2 py-1 rounded-md'>Delete</button>
                              </div>
                         </div>
                    </div>
                    <div className='col-span-1 flex flex-col justify-center text-left text-xs p-1' >
                         <h6 className='font-bold'>{username}<span className='font-medium'> : requested to follow you.</span><span className='font-medium text-gray-400'>4w</span></h6>


                    </div>
                    <div className='col-span-1 flex flex-col justify-center '>
                         <div className='w-full   flex flex-row justify-center rounded-full overflow-hidden ' >
                              <img className='w-14 aspect-square  rounded-full' src="/images/pexels-italo-melo-2379004.jpg" title="" alt="" />
                         </div>

                    </div>
               </>
          </>
     );
}

export default ActivityFollowReqComponent;
