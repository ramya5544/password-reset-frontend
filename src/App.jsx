import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';
import ResetPasswordpage from './Components/ResetPasswordpage.jsx';

function App (props) {
  
  
    return (
        <div>

            <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/Preset' element={<ResetPasswordpage />} />


            </Routes>





        </div>
    );
}

export default App;