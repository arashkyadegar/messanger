import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function ActivityComponent(props: any) {
     const dispatch = useAppDispatch();
     return (
          <>
               <div className='p-2 fixed w-[320px] bg-pink-100 flex flex-row-reverse justify-between  gap-4 top-0 z-50 border border-gray-100'>
                    <h1 >Activity</h1>
               </div>
               <div className='mt-11 flex flex-col border border-gray-600'>
                    <div className='bg-red-200 text-left p-1'>This week</div>
                    <div className=' grid grid-cols-4'>
                         <div className='col-span-1 border border-red-400'>1</div>
                         <div className='col-span-2 border border-red-400'>2</div>
                         <div className='col-span-1 border border-red-400'>3</div>
                    </div>
                    <div className='bg-red-200 text-left p-1'>This week</div>
                    <div className='bg-red-200 text-left p-1'>This week</div>
               </div>
          </>
     );
}

export default ActivityComponent;
