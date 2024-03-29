import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import MultiplePostImageComponent from '../postImage/multiplePostImages';
import SinglePostImageComponent from '../postImage/singlePostImage';
import BookmarkBtnComponent from '../bookmark/bookmarkBtn';
import LikeBtnComponent from '../like/likeBtn';
import CommentBtnComponent from '../comment/commentBtn';
import DirectMsgBtn from '../directMsg/directMsgBtn';
import LikeCountComponent from '../like/likeCount';
import PostTextComponent from '../postText/postText';
import ViewAllCommentComponent from '../comment/viewComment';

function PostComponent(props: any) {
     const dispatch = useAppDispatch();
     const images = props.images;

     return (
          <div className='  flex flex-col justify-between items-center'>
               <div className='flex w-full flex-row border justify-between  p-1'>
                    <div className='flex w-full'>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                         </svg>
                    </div>
                    <div className='flex w-full'>2</div>
               </div>
               <div className='w-full'>
                    {images.length > 1 ? <MultiplePostImageComponent images={images} /> : <SinglePostImageComponent images={images[0]} />}

               </div>
               <div className='flex flex-col p-1'>
                    <div className='flex w-full flex-row  justify-between'>
                         <div className='flex w-full '>
                              <BookmarkBtnComponent />
                         </div>
                         <div className='flex justify-end  w-full'>
                              <DirectMsgBtn />
                              <CommentBtnComponent />
                              <LikeBtnComponent />
                         </div>
                    </div>
                    <div className='flex justify-end'><LikeCountComponent /></div>
                    <div className='flex justify-end'>
                         <PostTextComponent username="BBcPersian"/>
                 
                    </div>
                    <div className='flex flex-row justify-end'>

                    <ViewAllCommentComponent count={5} />
                    </div>
               </div>
          </div>);




}

export default PostComponent;
