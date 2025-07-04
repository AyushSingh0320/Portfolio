import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeBtn from './themebtn';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="shadow sticky z-50 dark:bg-gray-900 dark:text-white">
            <nav className="bg-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <p className='text-3xl font-bold text-blue-600'>AS.</p>
                    </Link>

                    {/* Hamburger button for mobile */}
                    <button
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div
                        className={`${menuOpen ? 'flex' : 'hidden'} flex-wrap justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-wrap flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to=""
                                end
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-600  font-bold dark:text-blue-600 " : 'text-gray-800 dark:text-white'}
                                          hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 `
                                         
                                    }
                                >
                                     Home
                                </NavLink>
                            </li>
                            <li>                            
                                <NavLink
                                to={"/about"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-600 font-bold  dark:text-blue-600  " : 'text-gray-800   dark:text-white'}
                                         hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 `
                                    }
                                >
                                    About 
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                to = {"/skills"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-600 font-bold " : 'text-gray-800   dark:text-white'}
                                         hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0 `
                                    }
                                >
                                    Technical Skills
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                 to=""
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-shadow-orange-700  dark:text-blue-600" : 'text-gray-800   dark:text-white'}
                                         hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0  dark:text-white `
                                    }
                                    
                                >
                                   Projects 
                                </NavLink> 
                             </li>
                             <li>
                               <ThemeBtn/>
                             </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

