import React from 'react';
import Navigation from "../Navigation/Navigation";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className='w-full h-20 px-10 items-center grid grid-cols-3 max-md:px-5 max-md:grid-cols-2 text-white'>
                <NavLink to ="/">
                <p className='h-full'>Thomas Bruand</p>
                </NavLink>
                <Navigation />
            </header>
        </>

    )
}

export default Header;