import './App.css';
import Main from './components/Main.js'
import sushiya from './menus/sushiya.json'
import React, {useState} from 'react'
import Live from './live_components/Live'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// sample menu 
const loadedData = JSON.stringify(sushiya)
const json = JSON.parse(loadedData)

function App() {
  const [menu,setMenu] = useState(json['menu'])
  const [restaurant,setRestaurant] =useState(json['restaurant'])
  const [image,setImage] = useState(json['image'])
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
