import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function PostTextComponent(props: any) {
     const dispatch = useAppDispatch();
     return (
          <div className=''>

               <h6 className='  text-justify line-clamp-1'><span className='font-semibold'>{props.username} : </span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
               </h6>
               <button  className='text-xs'>more ...</button>
          </div>
     );
}

export default PostTextComponent;
