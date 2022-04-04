import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navigation from "./Components/Navigation";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser2";
import ListUsers from './Components/ListUsers';
import NotFound from './Components/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<ListUsers />} />
                <Route path="/user/create" element={<CreateUser />} />
                <Route path="/user/update/:user_id" element={<UpdateUser />} />
                <Route path="*" element={<NotFound />} />
            </Routes> 
        </BrowserRouter>
    )
}
export default App;
