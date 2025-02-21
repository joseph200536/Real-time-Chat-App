import AddFriends from "./pages/AddFriends";
import Friends from "./pages/Friends";
import FriendsChat from "./pages/FriendsChat";
import GroupChat from "./pages/GroupChat";
import Groups from "./pages/Groups";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Settings from "./pages/Settings";
import { SignUp } from "./pages/SignUp";
import Searchprofile from "./pages/Searchprofile";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from "./pages/Profile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/friends' element={<Friends/>}/>
      <Route path='/groups' element={<Groups/>}/>
      <Route path='/chat' element={<FriendsChat/>}/>
      <Route path='/groupchat' element={<GroupChat/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/addfriends' element={<AddFriends/>}/>
      <Route path='/searchprofile' element={<Searchprofile/>} />
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;