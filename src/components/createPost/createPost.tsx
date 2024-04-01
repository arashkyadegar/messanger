import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function CreatePostComponent(props: any) {
     const dispatch = useAppDispatch();

     return (
          <div className='flex flex-col w-full p-1 gap-2'>
               <label>فایل</label>
               <input
                    className=""
                    type="file"
                    id="formFileMultiple"
                    multiple />
               <label>متن</label>
               <textarea
                    className='outline-none border border-gray-200 rounded-lg'
                    rows={4}
                    cols={40}
               ></textarea>
               <label>برچسب</label>
               <input type='text' className='outline-none border border-gray-200 rounded-lg' />
               <div className='w-full   flex flex-row justify-end gap-2' >
                    <button className='bg-blue-400 text-white px-2 py-1 rounded-md'>create</button>
                    <button className='border border-gray-400 px-2 py-1 rounded-md'>cancel</button>
               </div>

          </div>
     );
}

export default CreatePostComponent;
