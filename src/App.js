
import { Routes, Route } from 'react-router-dom';
import AboutUs from './About';
import './App.css';
import ContactUs from './ContactUs';
import Donate from './Pages/Donate';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import RequestForm from './RequestForm';

function App() {
  return (
    <div className="w-[100vw] m-0 p-0 h-[100vh] overflow-y-auto overflow-x-hidden bg-[#fedcdc] lg:pt-[50px] scroll-smooth">
      <div className="lg:w-[80%] w-full max-w-[1260px] bg-white h-fit mx-auto rounded-xl "
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/requestBlood' element={<RequestForm />} />
          <Route path='/donateBlood' element = {<Donate/>} />
        </Routes>
        

      </div>
    </div>




  );
}

export default App;
