import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import AddCar from "./AddCar"
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import SignUp from "./SignUp";
import Profile from "./Profile";
import Reviews from "./Reviews";
import Car from "./Car"

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/AddCar" element={<AddCar/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        <Route path="/Car" element={<Car/>}/>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </div>
  )
}

export default App;
