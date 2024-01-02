import React, { useState } from 'react'
import { IoStar } from "react-icons/io5";
import CustomerReviewCard from './CustomerReviewCard';
import { CgChevronDown } from "react-icons/cg";
import GetReviewsModel from './GetReviewsModel';
import { useFirebase } from '../../../firebase/FirebaseContext';
import { useEffect } from 'react';
import { CgChevronUp } from "react-icons/cg";
import toast, { Toaster } from 'react-hot-toast';
const ProductReview = ({ productId }) => {
  const [showAllReview, setShowAllReview] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { getReviewDocument, user } = useFirebase()
  const [productReviewDoc, seProductReviewDoc] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState(2);
  const [overallRating, setOverallRating] = useState(0)
  const [ratingArr, setRatingArr] = useState();
  const [length, setLength] = useState(0);
  const [userInfo, setUserInfo] = useState(() => {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  })

  const toggleModel = () => {
    if (user) {
      if (userInfo) {
        console.log("toogle");
        setIsOpen(!isOpen);
      } else {
        toast.error("Please complete your profile")
      }
    }
    else {
      toast.error("Please login first");
    }
  }
  const fetchDocument = async () => {
    try {
      const res = await getReviewDocument(productId);
      console.log(res.docs);
      seProductReviewDoc(res.docs);
      const overallrating = calculateOverallRating(res.docs)
      setOverallRating(overallrating)
      countUsersArray(res.docs)
      setLength(res.docs.length);
      // console.log("HE tried",length);
      return;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const calculateOverallRating = (docs) => {


    const totalRatings = docs.reduce((sum, review) => sum + Number(review.data().rating), 0);
    console.log("entered", totalRatings);
    const averageRating = totalRatings / docs.length;
    return averageRating.toFixed(1); // Limit to one decimal place
  };
  const countUsersArray = (docs) => {
    const ratingCounts = Array(5).fill(0); // Initialize an array with zeros for each rating

    // Count users for each rating
    docs.forEach((review) => {
      const rating = review.data().rating;
      ratingCounts[rating - 1]++; // Increment the count for the corresponding rating
    });
    setRatingArr(ratingCounts);
    return ratingCounts;
  };

  const copyOfReviews = productReviewDoc.slice();
  console.log(productReviewDoc);
  console.log("cpy", copyOfReviews);
  const visibleReviews = copyOfReviews.splice(0, displayedReviews);
  console.log("splic", visibleReviews);

  const handleButtonClick = () => {
    setShowAllReview(!showAllReview);
    // If showAllReview is false, display all reviews; otherwise, display only the first 2
    setDisplayedReviews(showAllReview ? 2 : length)
  };
  useEffect(() => {
    fetchDocument()
    // console.log(productReviewDoc)
  }, [])
  // console.log(countUsersForRating(5))
  if (visibleReviews.length === 0) {
    return (
      <div className="box3  w-full h-auto py-10 flex justify-center items-center flex-col gap-5 px-5">
        <h1 className='text-2xl text-center font-semibold text-slate-600'>There is no reviews yet</h1>
        <div className='cursor-pointer py-4 text-white px-2 bg-red-600 rounded-md w-full sm:w-[20%] text-xs font-bold hover:shadow-xl hover:shadow-red-100 duration-500 text-center' onClick={toggleModel}>WRITE A PRODUCT REVIEW</div>
        <GetReviewsModel isOpen={isOpen} toggleModel={toggleModel} productId={productId} fetchDocument={fetchDocument} />
      </div>
    )
  }
  return (
    <>
      {
        <div className='h-auto  p-5 sm:p-10 flex flex-col sm:flex-row gap-4 mt-5 sm:mt-10 '>
          <div className="box1 w-full sm:w-[30%] border-t-2 sm:border-t-0 ">
            <h1 className='sm:text-3xl text-xl font-semibold mb-5 sm:mb-1 mt-5 sm:mt-0'>Rate & Review</h1>
            <div className='flex justify-start items-center mt-3'><IoStar className='text-xl text-green-600' /> <span className='font-semibold text-xl mx-1 sm:mx-2'>{overallRating}</span><span className='text-slate-400 sm:ml-4 ml-1 text-[14px]'>{length} varified customers review this.</span></div>
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div className={`flex justify-start items-center text-slate-400 text-[15px] sm:text-xl my-1 sm:my-5`} key={rating}>
                {rating} <IoStar className='text-slate-400 text-base mx-3 ' />
                <div className='h-[10px] w-[50%] sm:w-[60%] mr-2 bg-slate-200'>
                  <div style={{ width: `${(ratingArr[rating - 1] / length) * 100}%` }} className={`h-full bg-green-500`}></div>
                </div>
                <div className='text-slate-900 sm:text-base text-[15px]'>{ratingArr[rating - 1]
                }</div>
              </div>
            ))}
          </div>
          <div className="box2 w-full sm:w-[50%]">
            <h1 className='sm:text-3xl text-xl font-semibold mb-5 sm:mb-10'>Customer Reviews</h1>
            <div className='flex flex-col gap-5 duration-500'>
              {
                visibleReviews?.map((user) => (
                  <CustomerReviewCard key={user.id} rating={user.data().rating} reviewDescription={user.data().reviewDescription} reviewTitle={user.data().reviewTitle} date={user.data().currentDate} userName={user.data().userName} />
                ))
              }
              {
                length > 2 && <button onClick={handleButtonClick} className='duration-500 text-red-600 text-start'>{
                  showAllReview ? <>Hide reviews <CgChevronUp className='inline-block text-xl' /></> : <>Show all review <CgChevronDown className='inline-block text-xl' /></>
                }</button>
              }
            </div>
          </div>
          <div className="box3  w-full sm:w-[20%]">
            <div className='cursor-pointer py-4 text-white px-2 bg-red-600 rounded-md w-full sm:w-[70%] text-xs font-bold hover:shadow-xl hover:shadow-red-100 duration-500 text-center' onClick={toggleModel}>WRITE A PRODUCT REVIEW</div>
          </div>
          <GetReviewsModel isOpen={isOpen} toggleModel={toggleModel} productId={productId} fetchDocument={fetchDocument} />
          <Toaster />
        </div>
      }
    </>
  )
}

export default ProductReview



