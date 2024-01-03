import React, { useEffect, useState, Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Transition, Dialog } from '@headlessui/react';
import { RxCross2 } from "react-icons/rx";
import toast ,{ Toaster } from 'react-hot-toast';
import * as Yup from 'yup'
const addressScehma = Yup.object({
  name: Yup.string().required("*Please enter your name"),
  phoneNumber: Yup.string().max(10, "*Phone number must be at most 10 characters").required("*Please enter your phone number"),
  address1: Yup.string().min(6, "*Address must be at least 6 characters").required("*Please enter your address"),
  zipCode: Yup.string().min(5, "*Zip code must be at least 5 characters").required("*Please enter your zip code"),
  country: Yup.string().min(3, "*Country must be at least 3 characters").required("*Please enter your country"),
  state: Yup.string().min(5, "*State must be at least 5 characters").required("*Please enter your state"),
  landmark: Yup.string().min(3, "*Landmark must be at least 3 characters").required("*Please enter your landmark"),
})
const AdForm = ({ isAddShow, setIsAddShow, address = "", landmark = "", zipCode = "", country = "", state = "",getUserAddress,name="",phoneNumber=""})=>{
  const [formValues, setFormValues] = useState({
    name:name,
    phoneNumber:phoneNumber,
    address1: address,
    zipCode: zipCode,
    country: country,
    state: state,
    landmark: landmark
  });

  useEffect(() => {
    setFormValues({
      name:name,
    phoneNumber:phoneNumber,
      address1: address,
      zipCode: zipCode,
      country: country,
      state: state,
      landmark: landmark
    });
  }, [address, landmark, zipCode, country, state]);


  const initialValues = {
    name:name,
    phoneNumber:phoneNumber,
    address1: address,
    zipCode: zipCode,
    country: country,
    state: state,
    landmark: landmark
  };

  useEffect(() => {
    // Update the form values when props change
    setFormValues(initialValues);
  }, [address, landmark, zipCode, country, state]);

  const handleSubmit = (formValues, action) => {

    const addressData = {
      phoneNumber:formValues.phoneNumber,
      name:formValues.name,
      address: formValues.address1,
      zipCode: formValues.zipCode,
      country: formValues.country,
      state: formValues.state,
      landmark: formValues.landmark
    };

    localStorage.setItem("userAddress", JSON.stringify(addressData));
    console.log("submit ", formValues);
    toast.success("Success")
    if(getUserAddress){
      getUserAddress();
    }
    action.resetForm();
    setIsAddShow(false);
  };

  return (
    <>
      <Transition appear show={isAddShow} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsAddShow(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-sm p-2  text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0 relative">
                      <RxCross2 className='absolute top-3 right-3 cursor-pointer' onClick={()=>{setIsAddShow(false)}}/>
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <Formik initialValues={initialValues} validationSchema={addressScehma} onSubmit={handleSubmit}>
                            <Form className="space-y-4 md:space-y-6">
                              <h1 className="text-2xl font-semibold">
                                Add Your Address
                              </h1>
                              <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Full Name</label>
                                <Field
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="name" component="p" className='text-red-500 text-sm m-0.5'/>
                              </div>

                              <div>
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
                                <Field
                                  type="text"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="phoneNumber" component="p" className='text-red-500 text-sm m-0.5' />
                              </div>
                              <div>
                                <label htmlFor="address1" className="block mb-2 text-sm font-medium text-gray-900">Address 1</label>
                                <Field
                                  type="text"
                                  id="address1"
                                  name="address1"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="address1" component="p" className='text-red-500 text-sm m-0.5' />
                              </div>

                              <div>
                                <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-gray-900">Zip Code</label>
                                <Field
                                  type="text"
                                  id="zipCode"
                                  name="zipCode"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="zipCode" component="p" className='text-red-500 text-sm m-0.5' />
                              </div>

                              <div>
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                                <Field
                                  type="text"
                                  id="country"
                                  name="country"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="country" component="p" className='text-red-500 text-sm m-0.5' />
                              </div>

                              <div>
                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">State</label>
                                <Field
                                  type="text"
                                  id="state"
                                  name="state"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="state" component="p" className='text-red-500 text-sm m-0.5' />
                              </div>

                              <div>
                                <label htmlFor="landmark" className="block mb-2 text-sm font-medium text-gray-900">Landmark</label>
                                <Field
                                  type="text"
                                  id="landmark"
                                  name="landmark"
                                  className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                />
                                <ErrorMessage name="landmark" component="p" className='text-red-500 text-sm m-0.5' />
                              </div>

                              <button
                                type="submit"
                                className="focus:outline-none w-full text-white bg-slate-800  hover:bg-slate-900  outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                              >
                                Submit Review
                              </button>
                            </Form>
                          </Formik>

                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Toaster />
    </>
  );
};

export default AdForm;