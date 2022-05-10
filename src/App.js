import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home';
import Header from '../src/pages/Shared/Header';
import About from '../src/pages/About/About'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
