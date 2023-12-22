import React from 'react';
import './style.css';
import { useFormik } from 'formik'
import { RxCross2 } from "react-icons/rx";
const initialValues = {
    address1:"",
    zipCode:"",
    country:"",
    state:"",
    landmark:""
}
const AdForm = ({ isAddShow, setIsAddShow }) => {
  const handleClick = (e) => {
    // Check if the clicked element is not a descendant of the form
    if (!e.target.closest('.addform')) {
      // If not, close the form
      setIsAddShow(false);
    }
  };
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: (values, action) => {
        localStorage.setItem("userAddress",JSON.stringify(values))
      console.log("submit ",values);
      action.resetForm();
      setIsAddShow(false)
    }
  })
  return (
    <div className='absolute addform h-auto duration-700 p-10 left-0 top-0 flex z-40 justify-center items-center w-full' onClick={handleClick}>
      <div className="w-full md:w-3/6 shadow-lg bg-white md:max-w-full mx-auto">
        <div className="p-6 border-gray-300 sm:rounded-md">
         <div className='flex justify-between w-full'>
         <h1 className='mb-5 text-xl sm:text-3xl font-semibold '>Enter Your <span className='text-red-500'>Address</span></h1>
         <RxCross2 className='text-3xl font-bold cursor-pointer' onClick={(()=>setIsAddShow(false))}/>
         </div>
          <form onSubmit={handleSubmit}>
            {/* ... (your form input fields) */}
            <label className="block mb-6">
                        <span className="text-gray-700">Address line 1</span>
                        <input
                            name="address1"
                            value={values.address1}
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className=" p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=""
                        />
            </label>
            <label className="block mb-6">
                        <span className="text-gray-700">Zipcode</span>
                        <input
                            name="zipCode"
                            value={values.zipCode}
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className=" p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=""
                        />
            </label>
            <label className="block mb-6">
                        <span className="text-gray-700">Country</span>
                        <input
                            name="country"
                            value={values.country}
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className=" p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=""
                        />
            </label>
            <label className="block mb-6">
                        <span className="text-gray-700">State</span>
                        <input
                            name="state"
                            value={values.state}
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className=" p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=""
                        />
            </label>
            <label className="block mb-6">
                        <span className="text-gray-700">Landmark</span>
                        <input
                            name="landmark"
                            type="text"
                            value={values.landmark}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className=" p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder=""
                        />
            </label>
           
            <div className="mb-6 flex justify-start">
              <button
                type="submit"
                className="w-40 mt-5 p-1 border bg-slate-800 duration-500 border-slate-800 text-white flex justify-center items-center"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdForm;
