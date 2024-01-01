import React, { useEffect, useState } from 'react';
import Logo from './logo.png'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useFirebase } from '../../firebase/FirebaseContext';
import { IoSearch } from "react-icons/io5";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [searchOption, setSearchOption] = useState([])
  const navigate = useNavigate();
  const firebase = useFirebase()
  const location = useLocation()
  const [toggleSearch, setToggleSearch] = useState("top-0");
  const searchArray = ["men shirts ", "cargo pants", "demin shirt", "checked shirt", "half sleeves", "printed shirt", "black cargo"]
  const [toggleMenuOnMount, setToggleMenuOnMount] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);

  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };
  const searchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      // console.log(newArr.join(""));
      const searchString = encodeURIComponent(query);
      navigate(`/shopping/${searchString}`);
      setQuery("");
      setToggleSearch("top-0")
      setSearchOption([])
    }
  }
  let url = firebase.user?.photoURL!=null?firebase.user?.photoURL:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=740&t=st=1703837364~exp=1703837964~hmac=33dcc8385818924229394fd67ba929edb782c5eb07ec9f261dfa935f2ae88d53";
  console.log(url);
  useEffect(() => {
    closeMenu()
    window.scrollTo(0, 0);
  }, [location])
  const handleChange = (e) => {
    const getVal = e.target.value;
    if (getVal.length === 0) {
      setSearchOption([])
      setQuery(e.target.value);
      return;
    }
    setQuery(getVal);
    const filterOptions = searchArray.filter((option) => {
      return option.includes(getVal.toLowerCase());
    })
    setSearchOption(filterOptions);
  }
  const toggleSearchMenu = () => {
    if (toggleSearch === "top-0") {
      setToggleSearch("top-full")
    }
    else {
      setToggleSearch("top-0")
      setSearchOption([])
    }
  }
  const handleSearch = (option) => {
    const searchString = encodeURIComponent(option);
    navigate(`/shopping/${searchString}`);
    setQuery("");
    setSearchOption([]);
    toggleSearchMenu();
  }
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
          <nav className=" bg-white shadow sticky left-0 top-0 z-50 ">
            <div className=" bg-white sm:w-full  container px-6 py-4 mx-auto">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Link to="/">
                      <img className="sm:min-w-[7rem] w-[6rem] h-8 sm:h-8" src={Logo} alt="caralogo" />
                    </Link>
                    <div className={`sm:mx-5 sm:mr-2 bg-white sm:relative absolute duration-500 ${toggleSearch} -z-10 w-full left-0 px-2 sm:z-50 block `}>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                        <input
                          type="text"
                          className={`w-full sm:w-full py-2 pl-10 pr-4 text-gray-700 bg-white focus:border-slate-100 focus:outline-none ${searchOption.length > 0 ? "border-t border-l border-r rounded-tl-md rounded-tr-md" : "sm:border rounded-md"}`}
                          placeholder="Search"
                          onChange={handleChange}
                          onKeyUp={searchQuery}
                          value={query}

                        />
                      </div>
                      {
                        searchOption.length > 0 && <div className='h-auto w-full absolute left-0 bg-white p-1 border-l  border-r border-b rounded-br-md rounded-bl-md'>
                          {
                            searchOption.map((option) => {
                              return (<li key={Math.random()} className='text-[15px] cursor-pointer text-slate-400 p-2 sm:ml-6 ml-9 list-none'
                                onClick={() => handleSearch(option)}
                              >{option}</li>)
                            })
                          }

                        </div>
                      }
                    </div>

                  </div>

                  <div className="flex lg:hidden">
                    <div className="flex sm:ml-6 gap-3 sm:flex justify-center items-center">
                      <IoSearch className='text-[27px] cursor-pointer' onClick={toggleSearchMenu} />
                      <div className='relative'>
                   <Link to="/fiveinone/wishlist"  ><FaRegHeart className='text-2xl cursor-pointer' /></Link>
                   <div className=' p-[6px] h-2 w-2 rounded-full bg-red-500 border-white absolute top-0 -right-1 flex justify-center items-center text-[10px] text-white'>{firebase.lengthOfWishlist}</div>
                   </div>
                    <div className='relative'>
                    <Link to="/checkout/cart" ><FiShoppingCart className='text-2xl cursor-pointer mr-2' />
                    </Link>
                    <div className=' p-[6px] h-2 w-2 rounded-full bg-red-500 border-white absolute top-0 right-1 flex justify-center items-center text-[10px] text-white'>{firebase.lengthOfCart}</div>
                    </div>
                    </div>
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                      aria-label="toggle menu"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
                  </div>
                  <div className="sm:ml-6 gap-4 sm:flex justify-center items-center hidden">
                   <div className='relative'>
                   <Link to="/fiveinone/wishlist"  ><FaRegHeart className='text-2xl cursor-pointer' /></Link>
                   <div className=' p-[6px] h-2 w-2 rounded-full bg-red-500 border-white absolute top-0 -right-1 flex justify-center items-center text-[10px] text-white'>{firebase.lengthOfWishlist}</div>
                   </div>
                    <div className='relative'>
                    <Link to="/checkout/cart" ><FiShoppingCart className='text-2xl cursor-pointer' />
                    </Link>
                    <div className=' p-[6px] h-2 w-2 rounded-full bg-red-500 border-white absolute top-0 -right-1 flex justify-center items-center text-[10px] text-white'>{firebase.lengthOfCart}</div>
                    </div>
                    <Link to="/fiveinone/profile"><div className ="profile hidden sm:block w-7 h-7 bg-slate-600 rounded-full overflow-hidden">
                      <img src={url} alt="user-image" className='' />
                    </div>
                    </Link>
                  </div>
                </div>

              </div>
              <div className=" pt-4 my-2  border-t gap-3 overscroll-x-auto sm:scroll-hidden flex justify-center item-center">
                <Link className="sm:mx-4 ml-2 text-nowrap text-sm leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/t-shirts">T-shirts</Link>
                <Link className="sm:mx-4 ml-2 text-sm text-nowrap leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 whitespace-nowrap dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/shirts">Shirts</Link>
                <Link className="sm:mx-4 ml-2 text-sm  text-nowrap leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/coorders">Co-Orders</Link>
                <Link className="sm:mx-4 ml-2 text-sm  text-nowrap leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/pants">Bottoms</Link>
                <Link className="sm:mx-4 ml-2 text-sm text-nowrap  leading-5 text-gray-700 transition-colors duration-300 transform  hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" to="/shopping/jackets">Jackets</Link>
              </div>
            </div>
          </nav>
        )
      }

    </>

  );
};

export default Header;
