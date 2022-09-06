import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/UI/Navbar/NavBar";
import Home from "./utils/Home";
import Add from "./utils/Add";
import About from "./utils/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsIdPage from "./utils/CardsIdPage";
import Contacts from "./utils/Contacts";

function App() {
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/contacts/:id' element={<CardsIdPage />} />
        <Route path='/add/:id' element={<Add />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
