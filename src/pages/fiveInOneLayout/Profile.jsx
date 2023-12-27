import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEditSquare, } from "react-icons/md";
import Input from './Input';
const Profile = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [details, setDetails] = useState(null);
  const [userData, setUserData] = useState(null)
  const [loading,setLoading] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(details));
    console.log(details);
    handleSave();
  }
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsedata = JSON.parse(data);
      setUserData(parsedata);
    }
    else {
      setUserData(null);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // console.log(userData.name);
  }, [])
  const handleOnChange = (label, value) => {
    console.log(label, value);
    setDetails((prev) => {
      return { ...prev, [label]: value }
    })
  }
  const handleSave = () => {
    setIsReadOnly(prev => !prev);
  }
 
  return (
   <>
     {
      loading?<>
          <div className='p-5 sm:p-20 w-full '>
              <div className='h-7 w-40 bg-slate-200 rounded-lg animate-pulse'></div>
              <div className='w-full  mt-10 '>
                  <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 justify-start items-start'>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 justify-start items-start mt-7'>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 justify-start items-start mt-7'>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                    <div className='h-7 w-56 bg-slate-200 rounded-lg animate-pulse'></div>
                  </div>
              </div>
              <div className='h-12 w-32 mt-14 bg-slate-200 rounded-lg animate-pulse'></div>
          </div>
      </>:<>
          <div className="w-full sm:w-[85%] px-5 py-10 sm:p-14 h-auto">
      <h1 className='text-2xl font-semibold'>My Profile</h1>
      <p className='text-slate-400 text-xs my-3'>You can edit/update your profile information by click on edit profile button.</p>
      <div className='w-full sm:w-[70%] sm:my-5'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row sm:gap-0 gap-5 mt-10 w-full justify-between items-center'>
            <div className='relative w-full sm:w-1/2 text-start' >
              <p className='text-xs text-slate-400 font-semibold'>FULL NAME</p>
              {
                isReadOnly ? (
                  <h1  className="sm:text-xl text-lg">{userData?.name}</h1>
                ) : (
                  <>

                    <Input isReadOnly={isReadOnly} handleOnChange={handleOnChange} label={"name"} type="text"/>
                    {/* {!isReadOnly && <MdEditSquare color='black' className='inline-block absolute top-8' />} */}
                  </>

                )
              }
            </div>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-xs text-slate-400 font-semibold'>Email</p>
              {
                isReadOnly ? (
                  <h1 className="sm:text-xl text-lg">{userData?.email}</h1>
                ) : (
                  <>

                    <Input isReadOnly={isReadOnly} handleOnChange={handleOnChange} label={"name"} type="email" />
                    {/* {!isReadOnly && <MdEditSquare color='black' className='inline-block absolute top-8' />} */}
                  </>

                )
              }
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-0 gap-5 mt-10 w-full justify-between items-center'>
            <div className='relative  w-full sm:w-1/2 text-start' >
              <p className='text-xs text-slate-400 font-semibold'>PHONE NUMBER</p>
              {
                isReadOnly ? (
                  <h1 className="sm:text-xl text-lg">{userData?.phoneNum}</h1>
                ) : (
                  <>

                    <Input isReadOnly={isReadOnly} handleOnChange={handleOnChange} label={"name"} type="number" />
                    {/* {!isReadOnly && <MdEditSquare color='black' className='inline-block absolute top-8' />} */}
                  </>

                )
              }
            </div>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-xs text-slate-400 font-semibold'>ALTERNATE NUMBER</p>
              {
                isReadOnly ? (
                  <h1 className="sm:text-xl text-lg">{userData?.altNum}</h1>
                ) : (
                  <>

                    <Input isReadOnly={isReadOnly} handleOnChange={handleOnChange} label={"name"} type="number" />
                    {/* {!isReadOnly && <MdEditSquare color='black' className='inline-block absolute top-8' />} */}
                  </>

                )
              }
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-0 gap-5 mt-10 w-full justify-between items-center'>
            <div className='relative w-full sm:w-1/2 text-start' >
              <p className='text-xs text-slate-400 font-semibold'>DATE OF BIRTH</p>
              {
                isReadOnly ? (
                  <h1 className="sm:text-xl text-lg">{userData?.DOB}</h1>
                ) : (
                  <>

                    <Input isReadOnly={isReadOnly} handleOnChange={handleOnChange} label={"name"} type="date" />
                    {/* {!isReadOnly && <MdEditSquare color='black' className='inline-block absolute top-8' />} */}
                  </>

                )
              }
            </div>
            <div className='relative w-full sm:w-1/2 text-start'>
              <p className='text-xs text-slate-400 font-semibold'>GENDER</p>
              {
                isReadOnly ? (
                  <h1 className="sm:text-xl text-lg">{userData?.gender}</h1>
                ) : (
                  <>

                    <Input isReadOnly={isReadOnly} handleOnChange={handleOnChange} label={"name"} type="text" />
                    {/* {!isReadOnly && <MdEditSquare color='black' className='inline-block absolute top-8' />} */}
                  </>

                )
              }
            </div>
          </div>
          {
            !isReadOnly ? (
              <div className="flex w-full justify-between">
                <button onClick={handleSave} className='w-40 mt-5 p-1 border bg-slate-800  duration-500 border-slate-800 text-white flex justify-center items-center '> Cancle
                </button>

                <button type='submit' className='w-40 mt-5 p-1 border bg-slate-800  duration-500 border-slate-800 text-white flex justify-center items-center '> Save
                </button>

              </div>
            ) : (
              <button className='w-40 mt-5 p-1 border bg-slate-800  duration-500 border-slate-800 text-white flex justify-center items-center ' onClick={handleSave}> Edit
              </button>
            )
          }
        </form>


      </div>
    </div>
      </>
     }
   </>
  );
};

export default Profile;
