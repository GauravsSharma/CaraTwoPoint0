import { Dialog, Transition } from '@headlessui/react';
import { useFormik } from 'formik';
import StarRatings from 'react-star-ratings';
import { Fragment, useState } from 'react';
import * as Yup from 'yup'
import { useFirebase } from '../../../firebase/FirebaseContext';
import toast ,{Toaster} from 'react-hot-toast'
import { RxCross2 } from "react-icons/rx";
const GetReviewsModel = ({ isOpen, toggleModel,productId,fetchDocument}) => {
  const [rating, setRating] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesForDb, setImagesForDb] = useState([]);
  const firebase = useFirebase()
  const [userInfo,setUserInfo] = useState(()=>{
    const data = localStorage.getItem('user');
    return data?JSON.parse(data):"user";
  })
  console.log(userInfo);
  const initialValues = {
    reviewTitle: "",
    reviewDiscription:""
  };
  const reviewScehma = Yup.object({
    reviewTitle:Yup.string().min(6).required("*Please enter the title"),
    reviewDiscription: Yup.string().min(20).required("*Please enter the discription"),
})
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newSelectedImages = [];

    for (let i = 0; i < files.length; i++) {
      const imageUrl = URL.createObjectURL(files[i]);
      imagesForDb.push(files[i]);
      newSelectedImages.push(imageUrl);
    }
    // console.log(imagesForDb);
    setSelectedImages([...selectedImages,...newSelectedImages]);
  };

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues,
    validationSchema:reviewScehma,
    onSubmit: async (values, action) => {
      try {
        const addReviewPromise = imagesForDb.length > 0
          ? firebase.addReviewForProduct(userInfo.fullName,productId, rating, values.reviewDiscription, values.reviewTitle, imagesForDb)
          : firebase.addReviewForProduct(userInfo.fullName,productId, rating, values.reviewDiscription, values.reviewTitle);
    
        await toast.promise(addReviewPromise, {
          loading: 'Loading',
          success: 'Thanks for giving a review',
          error: 'Something went wrong',
        });
    
        action.resetForm();
        toggleModel();
        fetchDocument()
      } catch (error) {
        console.error('Error in form submission:', error);
        // Handle error if needed
        toast.error('Something went wrong');
      }
    },
    
  });
  const handleClose = ()=>{
    toggleModel()
    fetchDocument()
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
                    <RxCross2 className='absolute top-3 right-3 cursor-pointer' onClick={handleClose}/>
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                          >
                            <h1 className="text-2xl font-semibold">
                              Write a Review
                            </h1>

                            {/* Overall Rating */}
                            <div className="mb-6">
                              <label htmlFor="" className="font-medium">
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
                              <label htmlFor="" className="font-medium">
                                Add Photo
                              </label>
                              <div className="mt-3 flex items-center space-x-2">
                                {selectedImages.map((image, index) => (
                                  <div
                                    key={index}
                                    className="w-20 h-20 overflow-hidden"
                                  >
                                    <img
                                      src={image}
                                      alt={`Selected Image ${index + 1}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                                <label htmlFor="fileInput" className="cursor-pointer">
                                  <div className="w-20 h-20 border-dashed border-2 border-gray-400 flex items-center justify-center">
                                    <span className="text-gray-600 text-2xl">+</span>
                                  </div>
                                </label>
                                <input
                                  type="file"
                                  id="fileInput"
                                  className="hidden"
                                  onChange={handleImageChange}
                                  multiple
                                />
                              </div>
                            </div>
                            <div>
                              <label>Write your review</label>
                              <div className="mt-3">
                                <input
                                  type="text"
                                  placeholder="Review title"
                                  name="reviewTitle"
                                  value={values.reviewTitle}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="block outline-none p-2 w-full border focus:border-slate-300"
                                />
                                 {errors.reviewTitle && touched.reviewTitle ? <p className='text-red-500 text-sm m-0.5'>{errors.reviewTitle}</p> : null}
                                <textarea
                                 
                                  id=""
                                  cols="32"
                                  rows="5"
                                  placeholder="Description"
                                  name="reviewDiscription"
                                  value={values.reviewDiscription}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="outline-none p-2 w-full border focus:border-slate-300"
                                ></textarea>
                                 {errors.reviewDiscription && touched.reviewDiscription ? <p className='text-red-500 text-sm m-0.5'>{errors.reviewDiscription}</p> : null}
                              </div>
                            </div>
                            <button
                            type="submit"
                           
                            className="focus:outline-none w-full text-white bg-slate-800  hover:bg-slate-900  outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                          >
                            Submit Review
                          </button>
                            {/* Other form fields go here */}
                          </form>
                         
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
      <Toaster/>
    </>
  );
};

export default GetReviewsModel;
