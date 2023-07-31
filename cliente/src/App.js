
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import Nav from './components/Nav'
import Search  from './components/search';
import Detail from './components/detail';
import CreateGame from './components/createGame';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initGames } from './redux/actions';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/'
function App() {
  const state=useSelector((state)=>state.gamesInit)
  const dispatch=useDispatch()
 
  const VisualizeNav= ()=>{
    if (useLocation().pathname !=='/') {
      return <Nav/>
    }
  }
  return (
    <div className="App">
      {VisualizeNav()}

      <Routes>
        <Route path='/createVideogame' element={<CreateGame/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/games/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
