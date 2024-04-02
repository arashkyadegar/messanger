import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent(props: any) {
     return (
          <div className='p-2 fixed w-[320px] bg-white flex flex-row justify-between  gap-4 top-0 z-50 '>
               <div>
                    <Link to="/direct">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6  -rotate-45">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                         </svg>
                    </Link>
               </div>
               <div className='flex flex-row'>
                    rashk'sgram
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">

                         <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
               </div>

          </div>);
}

export default HeaderComponent;
