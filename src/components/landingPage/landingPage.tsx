import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import SearchComponent from '../search/search';
import HeaderComponent from '../header/header';
import StoryComponent from '../story/story';
import PostComponent from '../post/post';
import FooterComponent from '../footer/footer';

function LandingPageComponent(props: any) {
     const dispatch = useAppDispatch();

     const images = ['1.jpg', '2.jpg', '1.jpg', '2.jpg', '1.jpg', '2.jpg'];
     const images1 = ['1.jpg'];
     return (
          <>
               <HeaderComponent />
               <div className='mt-10 flex flex-row-reverse  gap-2 overflow-hidden pb-1' >
                    <div className='flex-row flex gap-2 h-24'>
                         <StoryComponent name='current user' avatar='pexels-italo-melo-2379004.jpg' />
                         <StoryComponent name='arashk yadegar azita' avatar='pexels-italo-melo-2379004.jpg' />
                         <StoryComponent name='azita rad' avatar='pexels-justin-shaifer-1222271.jpg' />
                    </div>
               </div>

               <div className='flex flex-col  mb-10'>
                    <PostComponent title='SportsMBA' avatar='pexels-italo-melo-2379004.jpg' images={images} />

                    <PostComponent title='yadegar' avatar='pexels-italo-melo-2379004.jpg' images={images}  />
                    <PostComponent title='arashk' avatar='pexels-italo-melo-2379004.jpg' images={images} />
                    <PostComponent title='azita' avatar='pexels-italo-melo-2379004.jpg' images={images1} />
               </div>


          </>
     );
}

export default LandingPageComponent;
