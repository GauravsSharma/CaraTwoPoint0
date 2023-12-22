import React, { useEffect, useState } from 'react';
import Logo from './logo.png'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink,Link, useNavigate, useLocation } from 'react-router-dom';
import { useFirebase } from '../../firebase/FirebaseContext';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const navigate = useNavigate();
  const firebase = useFirebase()
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const searchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      // console.log(newArr.join(""));
      const searchString = encodeURIComponent(query);
      navigate(`/shopping/${searchString}`);
    }
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])
  return (
    <>
      {
        loading ? (
          <section className="bg-white ">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 animate-pulse sm:space-y-0 sm:flex-row">
              <p className="w-32 h-2 bg-gray-200 rounded-lg "></p>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
                <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
                <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
                <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
                <p className="w-20 h-2 bg-gray-200 rounded-lg "></p>
                <p className="w-8 h-8 bg-gray-200 rounded-full "></p>
              </div>
            </div>
          </section>
        ) : (
          <nav className=" bg-white shadow sticky left-0 top-0 z-50">
            <div className=" bg-white sm:w-full  container px-6 py-3 mx-auto">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Link to="/">
                      <img className="w-auto h-6 sm:h-8" src={Logo} alt="" />
                    </Link>
                    <div className="hidden mx-10 md:block">
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                        <input
                          type="text"
                          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                          placeholder="Search"
                          onChange={((e)=>setQuery(e.target.value))}
                          onKeyUp={searchQuery}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:hidden">
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                      aria-label="toggle menu"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {isOpen ? (
                          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                          <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                  <div className="flex flex-col md:flex-row md:mx-1">
                    <Link
                      to="/"
                      className="my-2 text-base leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-1"
                     
                    >
                      Home
                    </Link>
                    <Link
                      to="/blog"
                      className="my-2 text-base leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-1"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/about"
                      className="my-2 text-base leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-1"
                    >
                      About Cara
                    </Link>
                    <Link
                      to="/contact"
                      className="my-2 text-base leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-1"
                    >
                      Contact Us
                    </Link>
                    {!firebase?.isLoggedIn ? (
                      <>
                        <Link
                          to="/login"
                          className="my-2 text-base leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-1"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="my-2 text-base leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-1"
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      ""
                    )}
                    <div className="hidden sm:ml-6 gap-4 sm:flex justify-center items-center">
                      <Link to="/fiveinone/wishlist"  ><FaRegHeart className='text-2xl cursor-pointer' /></Link>
                      <Link to="/checkout/cart" ><FiShoppingCart className='text-2xl cursor-pointer' /></Link>
                      <Link to="/fiveinone/profile "><div className="profile w-7 h-7 bg-slate-600 rounded-full"></div>
                    </Link>
                    </div>
                  </div>
                  <div className="my-4 md:hidden">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>

                      <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                        placeholder="Search"

                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class=" pt-4 my-3 border-t sm:scroll-hidden flex justify-center item-center w-full">
                <Link class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/t-shirts">T-shirts</Link>
                <Link class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 whitespace-nowrap dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/shirts">Shirts</Link>
                <Link class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/coorders">Co-Orders</Link>
                <Link class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/pants">Bottoms</Link>
                <Link class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/jackets">Jackets</Link>
              </div>
            </div>
          </nav>
        )
      }

    </>

  );
};

export default Header;
