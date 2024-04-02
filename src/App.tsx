
import './App.css';

import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import FooterComponent from './components/footer/footer';
import SearchComponent from './components/search/search';
import LandingPageComponent from './components/landingPage/landingPage';
import ActivityComponent from './components/activity/activity';
import DirectMsgComponent from './components/directMsg/directMsg';
import CreatePostComponent from './components/createPost/createPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
function App() {
  const dispatch = useAppDispatch();

  return (
    <div className='container max-w-sm' >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPageComponent />} />
          <Route path="searchs" element={<SearchComponent />} />
          <Route path="activities" element={<ActivityComponent />} />
          <Route path="posts" element={<CreatePostComponent />} />
          <Route path="messages" element={<DirectMsgComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <LandingPageComponent />
      <ActivityComponent />
      <CreatePostComponent />
      <SearchComponent />
      <DirectMsgComponent /> 

      <FooterComponent />*/}
    </div>

  );
}

export default App;
