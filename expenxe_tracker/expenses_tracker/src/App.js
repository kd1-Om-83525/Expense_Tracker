
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import { ToastContainer } from 'react-toastify';
import Home from './Screens/Home';


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
