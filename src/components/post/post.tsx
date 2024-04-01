import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import MultiplePostImageComponent from './multiplePostImages';
import SinglePostImageComponent from './singlePostImage';
import BookmarkBtnComponent from '../bookmark/bookmarkBtn';
import LikeBtnComponent from '../like/likeBtn';
import CommentBtnComponent from '../comment/commentBtn';
import DirectMsgBtn from '../directMsg/directMsgBtn';
import LikeCountComponent from '../like/likeCount';
import PostTextComponent from './postText';
import ViewAllCommentComponent from '../comment/viewComment';
import PostHeaderComponent from './postHeader';

function PostComponent(props: any) {
     const dispatch = useAppDispatch();
     const images = props.images;
     const title = props.title;
     const avatar = props.avatar;
     return (
          <div className='  flex flex-col justify-between items-center'>
               <PostHeaderComponent title={title} avatar={avatar} />
               <div className='w-full'>
                    {images.length > 1 ? <MultiplePostImageComponent images={images} /> : <SinglePostImageComponent images={images[0]} />}</div>
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
                         <PostTextComponent username="BBcPersian" />

                    </div>
                    <div className='flex flex-row justify-end'>

                         <ViewAllCommentComponent count={5} />
                    </div>
               </div>
          </div>);




}

export default PostComponent;
