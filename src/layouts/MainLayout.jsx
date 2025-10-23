import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    
    return (
        <div className="montserrat bg-base-100">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;