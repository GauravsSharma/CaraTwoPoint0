import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
const NewsLetter = () => {
  const [email,setEmail] = useState("")

  return (
    <section className=" my-10 bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300 flex justify-between sm:p-10  items-center flex-wrap bg-cover bg-no-repeat bg-center bg-banner-b14 p-5">
    <div className="newstext text-white">
      <h4 className="sm:text-2xl text-xl font-bold text-white">Signup For Newsletter</h4>
      <p className="sm:text-lg text-base sm:font-semibold  text-white">
        Get e-mail updates about our latest shop and <span className="text-yellow-500">special offer.</span>
      </p>
    </div>
    <div className="form flex h-12 w-full my-5 sm:my-0  md:w-2/5 lg:w-1/3 xl:w-1/4">
      <form>
      <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Your E-mail Address"
        className="h-full px-4 text-sm border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
      />
      <button type='submit' className="h-full border border-r-white border-b-white border-t-white bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300 bg-fixed bg-repeat-x bg-position-0 text-white rounded-r-md px-4 whitespace-nowrap"
      onClick={()=>email?toast.success("Thanks for subscribing"):toast.error("Enter email")}
      >
        Sign Up
      </button>
      </form>
    </div>
    
</section>
  )
}

export default NewsLetter