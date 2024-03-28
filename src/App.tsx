import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import {
  postsRecieved
} from "./redux/reducer/posts"
import StoryComponent from './components/story/story';
import HeaderComponent from './components/header/header';
function App() {
  const dispatch = useAppDispatch();

  dispatch(postsRecieved([{ name: 'arahk', lastname: 'yadegar' }]));
  return (
    <>
      <div className='container max-w-sm' >
        <HeaderComponent />
        {/* story line is defined here */}
        <div className=' flex flex-row-reverse  border-b border-gray-200 gap-2 overflow-hidden pb-1' >
          <div className='flex-row flex gap-2 h-24'>
            <StoryComponent name='current user' avatar='pexels-italo-melo-2379004.jpg' />
            <StoryComponent name='arashk yadegar ashkan' avatar='pexels-italo-melo-2379004.jpg' />
            <StoryComponent name='azita rad' avatar='pexels-justin-shaifer-1222271.jpg' />
          </div>
        </div>
        {/* posts start from herer */}
        <div className='flex flex-col'>

        </div>
      </div>

    </>
  );
}

export default App;
