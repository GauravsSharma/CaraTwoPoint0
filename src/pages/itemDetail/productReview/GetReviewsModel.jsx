import { Dialog, Transition } from '@headlessui/react'
import { useFormik } from 'formik'
import StarRatings from 'react-star-ratings';
import { Fragment, useState, React } from 'react'
const GetReviewsModel = ({ isOpen, toggleModel }) => {
  const [rating, setRating] = useState(0);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  }
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // You can perform additional actions based on the rating if needed
  };
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: (values, action) => {
      const myPromise = firebase.signin(values.email, values.password)
      toast.promise(myPromise, {
        loading: 'Loading',
        success: 'login success, redirecting',
        error: 'Password incorrent ! retry',

      })
      action.resetForm();
    }
  })
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={toggleModel}>
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
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">

                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                          <form className="space-y-4 md:space-y-6" action="#">
                            <h1 className="text-2xl font-semibold">Write a Review</h1>

                            {/* Overall Rating */}
                            <div className="mb-6">
                              <label htmlFor="" className=" font-medium">
                                Overall rating
                              </label>
                              <div className="mt-3">
                                <StarRatings
                                  rating={rating}
                                  starRatedColor="gold"
                                  changeRating={handleRatingChange}
                                  numberOfStars={5}
                                  starDimension="27px"
                                  starSpacing="5px"
                                />
                              </div>
                            </div>

                            {/* Image Input */}
                            <div className="mb-6">
                              <label htmlFor="" className=" font-medium">
                                Add Photo
                              </label>
                              <div className="mt-3 flex items-center">
                                <label htmlFor="fileInput" className="cursor-pointer">
                                  <div className="w-20 h-20 border-dashed border-2 border-gray-400 flex items-center justify-center">
                                    <span className="text-gray-600 text-2xl">+</span>
                                  </div>
                                </label>
                                <input
                                  type="file"
                                  id="fileInput"
                                  className="hidden"
                                // Add your file handling logic here
                                />
                              </div>
                            </div>
                            <div>
                              <label>Write your review</label>
                             <div className='mt-3 '>
                             <input type="text" placeholder='Review title' className='block outline-none p-2 w-full border focus:border-slate-300'/>
                              <textarea name="" id="" cols="32" rows="5" placeholder='Description' className='outline-none p-2 w-full border focus:border-slate-300'></textarea>
                             </div>
                            </div>
                            {/* Other form fields go here */}
                          </form>
                          <button onClick={() => { toggleModel() }} type="button" className="focus:outline-none w-full text-white bg-slate-800  hover:bg-slate-900  outline-0 font-medium rounded-lg text-sm px-5 py-2.5">Submit Review</button>
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
    </>
  )
}

export default GetReviewsModel