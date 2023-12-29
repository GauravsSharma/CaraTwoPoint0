import React, { useEffect, useState } from 'react'
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const Contact = ({ setFoot, setNav }) => {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        setFoot(true)
        setNav(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    return (
       <>
         {
            loading?<div className='p-5'>
            <div className='flex flex-col sm:flex-row w-full h-[60vh] '>
            <div className='w-full sm:w-[45%] flex justify-center items-start my-4 sm:my-0  flex-col gap-5 py-5 px-2'>
              <div className='w-[90%] h-6 bg-slate-200 rounded-sm animate-pulse'></div>
              <div className='w-full'>
               <div className='w-[50%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[55%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[60%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[55%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[50%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
              </div>
             </div>
             <div className="bg-slate-200 h-full w-full sm:w-[55%] rounded-lg animate-pulse"></div>
            
            </div>
            </div>: <>
            <section className="flex justify-between flex-col sm:flex-row items-center p-5 sm:p-10">
                <div className="sm:w-[40%]">
                    <span className='text-base'>GET IN TOUCH</span>
                    <h2 className='text-3xl py-5'>Visit one of our agency Locations today and contact us.</h2>
                    <h3 className='text-base pb-4'>Head Office</h3>
                    <div>
                        <li className='py-3 flex list-none  items-center'>
                            <FaMap />
                            <p className='ml-2 text-base'>56 Glass Gold Road near St.Road NewYork</p>
                        </li>
                        <li className='py-3 flex list-none  items-center'>
                            <MdEmail />
                            <p className='ml-2 text-base'>ContactUs@gmail.com</p>
                        </li>
                        <li className='py-3 flex list-none  items-center'>
                            <FaPhoneAlt />
                            <p className='ml-2 text-base'>5354643423</p>
                        </li>
                        <li className='py-3 flex list-none  items-center '>
                            <FaClock />
                            <p className='ml-2 text-base'>Monday to Saturday: 9:00 to 16:00</p>
                        </li>

                    </div>
                </div>
                <div className="map w-full h-52 sm:h-96 sm:w-[55%]">
                    <iframe
                        className="h-full w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158083.72648931606!2d-1.542925238614341!3d51.75025883356493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2sOxford%2C%20UK!5e0!3m2!1sen!2sin!4v1682152127479!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <section id="form-details" className='flex justify-between p-5 m-2 items-center flex-col sm:flex-row sm:m-16 sm:p-5 border border-slate-300 rounded-xl border-1'>
                <form action="" className='flex gap-2 w-full sm:w-[65%] flex-col '>
                    <span className='text-base my-3'>LEAVE A MESSAGE</span>
                    <h2 className='font-bold text-3xl my-3'>We Love To Hear From You.</h2>
                    <input type="text" placeholder="Your Name" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl' />
                    <input type="email" placeholder="Your E-mail" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl' />
                    <input type="text" placeholder="Subject" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl' />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl'></textarea>
                    <button className='w-1/3 p-2 bg-slate-800 text-white border hover:bg-slate-600  duration-500 border-slate-800 hover:text-white my-5 mb-6'>Submit</button>


                </form>
                <div class="peaple">
                    <div className='pb-6 flex items-start'>
                        <img src="https://gauravssharma.github.io/Cara.in/peaple/1.png" alt="" className='w-16 h-16 object-cover mr-4' />
                        <p className='m-0 text-base leading-6'><span className='text-lg font-semibold block text-black'>John Doe</span>Senior marketing manager <br /> Phone:+000034352 <br />Email: xyz@gmail.com</p>
                    </div>
                    <div className='pb-6 flex items-start'>
                        <img src="https://gauravssharma.github.io/Cara.in/peaple/2.png" alt="" className='w-16 h-16 object-cover mr-4' />
                        <p className='m-0 text-base leading-6'><span className='text-lg font-semibold block text-black'>John Doe</span>Senior marketing manager <br /> Phone:+000034352 <br />Email: xyz@gmail.com</p>
                    </div>
                    <div className='pb-6 flex items-start'>
                        <img src="https://gauravssharma.github.io/Cara.in/peaple/3.png" alt="" className='w-16 h-16 object-cover mr-4' />
                        <p className='m-0 text-base leading-6'><span className='text-lg font-semibold block text-black'>John Doe</span>Senior marketing manager <br /> Phone:+000034352 <br />Email: xyz@gmail.com</p>
                    </div>
                </div>
            </section>
        </>
         }
       </>
    )
}

export default Contact