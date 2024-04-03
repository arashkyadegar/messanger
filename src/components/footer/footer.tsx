
import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import { Link } from 'react-router-dom';


function FooterComponent(props: any) {
     const dispatch = useAppDispatch();
     return (
          <>


               {/* <div className='fixed w-[320px] bottom-[0px] z-50'>
                    <div className=' bg-white flex flex-row justify-between  gap-4  '>
                         <Link to="/">
                              <div className='p-2 hover:bg-green-600 hover:text-white cursor-pointer rounded-lg'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                   </svg>
                              </div>
                         </Link>

                         <Link to="/search">
                              <div className='p-2 hover:bg-yellow-400 hover:text-white cursor-pointer rounded-lg'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                   </svg>
                              </div>
                         </Link>
                         <Link to="/activity">
                              <div className='p-2 hover:bg-red-400 hover:text-white cursor-pointer rounded-lg'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                   </svg>
                              </div>
                         </Link>
                         <Link to="/post">
                              <div className='p-2 hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                   </svg>
                              </div>
                         </Link>
                    </div>


               </div> */}

               {/* <div className='fixed flex bg-black-rgba bottom-[0px] w-[320px] h-full items-end z-50'>
                    <div className=' bg-white  w-full flex flex-col justify-between  gap-4 rounded-t-2xl '>
                         <div className='w-full flex flex-row'>
                              <div className=' w-full   flex flex-col justify-center items-center p-5'>
                                   <div className='h-16 flex border border-gray-300 w-full justify-center items-center  rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                   </div>
                                   <a>Link</a>
                              </div>



                              <div className=' w-full   flex flex-col justify-center items-center  p-5'>
                                   <div className='h-16 flex border border-gray-300 w-full justify-center items-center  rounded-full '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                   </div>
                                   <a>Share</a>
                              </div>


                              <div className=' w-full  flex flex-col justify-center items-center   p-5'>
                                   <div className='h-16 flex border border-gray-300 w-full justify-center items-center  rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                        </svg>
                                   </div>
                                   <a>Report</a>
                              </div>

                         </div>
                         <div className='flex flex-col items-end border-t border-gray-300 '>
                              <div className='py-2'>
                                   <a href="#">why you are seeing this post</a>
                              </div>
                              <div className='py-2'>
                                   <a href="#">unfollow</a>
                              </div>
                              <div className='py-2'>
                                   <a href="#">About this account</a>
                              </div>
                         </div>
                    </div>
               </div> */}
          </>
     );
}

export default FooterComponent;
