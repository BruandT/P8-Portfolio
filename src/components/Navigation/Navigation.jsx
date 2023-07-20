import { useState, React }from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between md:justify-center max-md:justify-end">      
        <nav>
        {/* Menu mobile */}
        <section className="flex md:hidden lg:hidden">
        {/* Menu burger */}
        <div
        className="space-y-2"
        onClick={() => setIsNavOpen((prev) => !prev)}
        >
        <span className="block h-0.5 w-8 animate-pulse bg-green-dark"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-green-dark"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-green-dark"></span>
        </div>
        {/* Ouverture du menu burger */}
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
        className="absolute top-5 right-5 "
        onClick={() => setIsNavOpen(false)}
        >
        {/* SVG croix */}
        <svg
        className="h-8 w-8 text-green-dark"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        </div>
        <ul className='h-full pt-5 flex flex-col justify-evenly bg-black-bg uppercase'>
        <NavLink to="/">
        <li ><span className='text-green-dark'>/ </span>home</li>
        </NavLink>
        <NavLink to="/">
        <li><span className='text-green-dark'>/ </span>about</li>
        </NavLink>
        <NavLink to="/">
        <li><span className='text-green-dark'>/ </span>work</li>
        </NavLink>
        <NavLink to="/">
        <li><span className='text-green-dark'>/ </span>contact</li>
        </NavLink>
        </ul>
    </div>
    </section>
    {/* Desktop menu */}
    <ul className='hidden md:flex space-x-10 pt-5'>
    <NavLink to="/" className="nav-link">
    <li>/home<span className='badge relative bottom-4 right-3 text-xs text-green-dark'>01</span></li>
    </NavLink>
    <NavLink to="/" className="nav-link">
    <li>/about<span className='badge relative bottom-4 right-3 text-xs text-green-dark'>02</span></li>
    </NavLink>
    <NavLink to="/" className="nav-link">
    <li>/work<span className='badge relative bottom-4 right-3 text-xs text-green-dark'>03</span></li>
    </NavLink>
    <NavLink to="/" className="nav-link">
    <li>/contact<span className='badge relative bottom-4 right-3 text-xs text-green-dark'>04</span></li>
    </NavLink>
    </ul>
    </nav>
    <style>{`
    .hideMenuNav {
        display: none;
    }
    .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #141C1A;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    `}</style>
    </div>
    );
};

export default Navigation;