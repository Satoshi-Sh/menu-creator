import './App.css';
import Main from './components/Main.js'
// sample menu
import sushiya from './menus/sushiya.json'
import React, {useState} from 'react'
import Live from './live_components/Live'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [menu,setMenu] = useState(sushiya['menu'])
  const [restaurant,setRestaurant] =useState(sushiya['restaurant'])
  const [image,setImage] = useState(sushiya['image'])
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Main menu={menu} setMenu={setMenu} restaurant={restaurant} setRestaurant={setRestaurant}
       image={image} setImage={setImage} />}/>
      <Route path='/livepage' element={<Live menu={menu} restaurant={restaurant} image={image}/>} />
      </Routes>   
    </Router>
    );
}

export default App;
