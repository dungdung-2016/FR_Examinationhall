import * as React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import '../App.css';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';


function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;