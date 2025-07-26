import { useState } from 'react';
import { NavLink,} from 'react-router-dom';
import ThemeBtn from './themebtn';
import { useScrollSpy } from './useScrollSpy';

const sectionIds = ['Home' , 'about', 'skills', 'projects'];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeIndex = useScrollSpy(sectionIds); // adjust offset for sticky header

    return (
        <header className="sticky z-50 dark:bg-gray-900 dark:text-white">
            <nav className="bg-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center">
                        <p className='text-3xl font-bold text-blue-600'>AS.</p>
                    </NavLink>
                    {/* Hamburger button for mobile */}
                    <button
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className={`${menuOpen ? 'flex' : 'hidden'} flex-wrap justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pl-4`} id="mobile-menu-2">
                        <div className="flex-1"></div>
                        <ul className="flex flex-wrap flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ml-32 lg:ml-48">
                            {/* <li>
                                <NavLink to="/" end className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 ${
                                        isActive && location.pathname === "/" ? "text-blue-600 font-bold" : ""
                                    }`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 ${
                                        isActive && location.pathname === "/about" ? "text-blue-600 font-bold" : ""
                                    }`
                                }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/skills" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 ${
                                        isActive && location.pathname === "/skills" ? "text-blue-600 font-bold" : ""
                                    }`
                                }>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 ${
                                        isActive && location.pathname === "/projects" ? "text-blue-600 font-bold" : ""
                                    }`
                                }>Projects</NavLink>
                            </li> */}
                            {/* Show scrollspy section links only on the home page */}
                            { sectionIds.map((id, idx) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 ${
                                            activeIndex === idx ? "text-blue-600 font-bold" : ""
                                        }`}
                                    >
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </a>
                                </li>
                            ))}
                            <li className="flex items-center">
                                <p className="text-sm mr-2">Toggle Theme</p>
                                <ThemeBtn />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

