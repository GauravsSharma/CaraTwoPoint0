import React, { useEffect, useState, Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Transition, Dialog } from '@headlessui/react';
import toast,{ Toaster } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";
const ProfileForm = ({ isModelShow, setIsModelShow, fullName = "", email = "", phoneNumber = "", altNumber = "", dob = "", gender = "",getUserDetails }) => {
    const [formValues, setFormValues] = useState({
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        altNumber: altNumber,
        dob: dob,
        gender: gender,
    });

    useEffect(() => {
        setFormValues({
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            altNumber: altNumber,
            dob: dob,
            gender: gender,
        });
    }, [phoneNumber, email, altNumber, dob, gender]);


    const initialValues = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        altNumber: altNumber,
        dob: dob,
        gender: gender,
    };

    useEffect(() => {
        // Update the form values when props change
        setFormValues(initialValues);
    }, [phoneNumber, email, altNumber, dob, gender]);

    const handleSubmit = (formValues, action) => {
        const userData = {
            fullName: formValues.fullName,
            phoneNumber: formValues.phoneNumber,
            email: formValues.email,
            altNumber: formValues.altNumber,
            dob: formValues.dob,
            gender: formValues.gender,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        console.log("submit ", formValues);
        toast.success("Success")
        if(getUserDetails){
            getUserDetails();
        }
        action.resetForm();
        setIsModelShow(false);
    };

    return (
        <>
            <Transition appear show={isModelShow} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsModelShow(false)}>
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
                                        <RxCross2 className='absolute top-3 right-3 cursor-pointer' onClick={()=>{setIsModelShow(false)}}/>
                                            <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                                        <Form className="space-y-4 md:space-y-6">
                                                            <h1 className="text-2xl font-semibold">
                                                                Add Your Address
                                                            </h1>
                                                            <div>
                                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Full Name</label>
                                                                <Field
                                                                    type="text"
                                                                    id="name"
                                                                    name="fullName"
                                                                    className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                />
                                                                <ErrorMessage name="name" component="p" className='text-red-500 text-sm m-0.5' />
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
                                                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">Alternative Number</label>
                                                                <Field
                                                                    type="text"
                                                                    id="state"
                                                                    name="altNumber"
                                                                    className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                />
                                                                <ErrorMessage name="state" component="p" className='text-red-500 text-sm m-0.5' />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="address1" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                                                <Field
                                                                    type="email"
                                                                    id="address1"
                                                                    name="email"
                                                                    className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                />
                                                                <ErrorMessage name="address1" component="p" className='text-red-500 text-sm m-0.5' />
                                                            </div>

                                                            <div>
                                                                <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-gray-900">Date Of Birth</label>
                                                                <Field
                                                                    type="date"
                                                                    id="zipCode"
                                                                    name="dob"
                                                                    className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                />
                                                                <ErrorMessage name="zipCode" component="p" className='text-red-500 text-sm m-0.5' />
                                                            </div>

                                                            <div>
                                                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                                                                <Field
                                                                    type="text"
                                                                    id="country"
                                                                    name="gender"
                                                                    className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                />
                                                                <ErrorMessage name="country" component="p" className='text-red-500 text-sm m-0.5' />
                                                            </div>

                                                           
                                                            <button
                                                                type="submit"
                                                                className="focus:outline-none w-full text-white bg-slate-800  hover:bg-slate-900  outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                                                            >
                                                               Save
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

export default ProfileForm;
