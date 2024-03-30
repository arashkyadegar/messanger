import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function SearchComponent(props: any) {
     const dispatch = useAppDispatch();
     return (
          <>
               <div className='flex flex-col  gap-1 '>
                    <div className='p-1 m-1 bg-slate-200 rounded-lg overflow-hidden'>
                         <div className='flex flex-row '>
                              <input placeholder='جستجو ...' type="text" name="" id="" className='bg-transparent outline-none w-96' />
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                              </svg>
                         </div>
                    </div>
                    <div className='grid grid-cols-2  gap-1'>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                         <div className='bg-slate-100 h-32'>1</div>
                    </div>
               </div>
          </>
     );
}

export default SearchComponent;
