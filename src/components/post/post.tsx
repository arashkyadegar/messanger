import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import MultiplePostImageComponent from '../postImage/multiplePostImages';
import SinglePostImageComponent from '../postImage/singlePostImage';

function PostComponent(props: any) {
     const dispatch = useAppDispatch();
     // console.log(props.images)
     const images = props.images;
     if (props.images.length > 1) {
          return (
               <div className='  flex flex-col justify-between items-center border border-black '>
                    <div className='flex w-full flex-row border justify-between border-red-400  '>
                         <div className='flex w-full border border-red-400'>1</div>
                         <div className='flex w-full border border-red-400'>2</div>
                    </div>
                    <div className='w-full'>

                         <MultiplePostImageComponent images={images} />
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex w-full flex-row border justify-between border-red-400  '>
                              <div className='flex w-full border border-red-400'>1</div>
                              <div className='flex w-full border border-red-400'>2</div>
                         </div>
                         <div>likes</div>
                         <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</div>
                         <div>view all commments</div>
                    </div>
               </div>);

     } else {
          return (<div className=' flex flex-col justify-between items-center border border-black'>
               <div className='flex w-full flex-row border justify-between border-red-400'>
                    <div className='flex w-full border border-red-400'>1</div>
                    <div className='flex w-full border border-red-400'>2</div>
               </div>
               <SinglePostImageComponent images={images[0]} />
          </div>);
     }



}

export default PostComponent;
