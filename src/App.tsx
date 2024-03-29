import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import StoryComponent from './components/story/story';
import HeaderComponent from './components/header/header';
import PostComponent from './components/post/post';
import FooterComponent from './components/footer/footer';
function App() {
  const dispatch = useAppDispatch();

  const images = ['1.jpg', '2.jpg', '1.jpg', '2.jpg', '1.jpg', '2.jpg'];
  const images1 = ['1.jpg'];
  return (
    <>
      <div className='container max-w-sm' >
        <HeaderComponent />

        <div className=' flex flex-row-reverse  border-b border-gray-200 gap-2 overflow-hidden pb-1' >
          <div className='flex-row flex gap-2 h-24'>
            <StoryComponent name='current user' avatar='pexels-italo-melo-2379004.jpg' />
            <StoryComponent name='arashk yadegar ashkan' avatar='pexels-italo-melo-2379004.jpg' />
            <StoryComponent name='azita rad' avatar='pexels-justin-shaifer-1222271.jpg' />
          </div>
        </div>

        <div className='flex flex-col  mb-10'>
          <PostComponent images={images} />

          <PostComponent images={images} />
          <PostComponent images={images} />
          <PostComponent images={images1} />
        </div>
        <FooterComponent />
      </div>


    </>
  );
}

export default App;
