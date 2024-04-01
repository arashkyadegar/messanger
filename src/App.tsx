
import './App.css';

import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import FooterComponent from './components/footer/footer';
import SearchComponent from './components/search/search';
import LandingPageComponent from './components/landingPage/landingPage';
import ActivityComponent from './components/activity/activity';
import DirectMsgComponent from './components/directMsg/directMsg';
import CreatePostComponent from './components/createPost/createPost';
function App() {
  const dispatch = useAppDispatch();

  return (
    <div className='container max-w-sm' >

      <LandingPageComponent />
      <ActivityComponent />
      <CreatePostComponent />
      <SearchComponent />
      <DirectMsgComponent />

      <FooterComponent />
    </div>

  );
}

export default App;
