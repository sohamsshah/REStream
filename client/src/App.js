import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from "./components/pages/MainPage/MainPage"
import Home from "./components/organisms/Home/Home"
import Categories from "./components/organisms/Categories/Categories"
import Creators from "./components/organisms/Creators/Creators"
import Category from "./components/organisms/Category/Category"
import Creator from "./components/organisms/Creator/Creator"
import VideoPage from "./components/pages/VideoPage/VideoPage"
import VideoStream from "./components/organisms/VideoStream/VideoStream"

import Channels from "./components/organisms/Channels/Channels"
import FollowingPage from './components/pages/FollowingPage/FollowingPage';
import LikedVideosPage from './components/pages/LikedVideosPage/LikedVideosPage';
import PlaylistsPage from './components/pages/PlaylistsPage/PlaylistsPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignupPage from './components/pages/SignupPage.jsx/SignupPage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={() => <MainPage Content={Home} />} />
        <Route path="/categories" exact component={() => <MainPage Content={Categories} />} />
        <Route path="/instructors" exact component={() => <MainPage Content={Creators} />} />
        <Route path="/channels" exact component={() => <MainPage Content={Channels} />} />
        <Route path="/categories/:category" exact component={() => <MainPage Content={Category} />} />
        <Route path="/instructors/:id" exact component={() => <MainPage Content={() => <Creator kind="creators" />} />} />
        <Route path="/channels/:id" exact component={() => <MainPage Content={() => <Creator kind="channels" />} />} />
        <Route path="/watch/:id" exact component={() => <VideoPage Content={VideoStream} />} />
        <Route path="/following" exact component={() => <VideoPage Content={FollowingPage} />} />
        <Route path="/liked" exact component={() => <VideoPage Content={LikedVideosPage} />} />
        <Route path="/playlists" exact component={() => <VideoPage Content={PlaylistsPage} />} />
        <Route path="/history" exact component={() => <VideoPage Content={HistoryPage} />} />
        
        <Route path="/auth/login" exact component={() => <VideoPage Content={LoginPage} />} />
        <Route path="/auth/signup" exact component={() => <VideoPage Content={SignupPage} />} />
        
      </Switch>
    </Router>
      
    
    </div>
  );
}

export default App;