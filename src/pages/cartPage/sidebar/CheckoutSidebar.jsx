import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { useFirebase } from '../../../firebase/FirebaseContext';
import toast, { Toaster } from 'react-hot-toast'
const CheckoutSidebar = ({ calculateOriginalPrice, calculateSubTotal, setISCheckoutShow, isCheckoutShow }) => {
  const { user } = useFirebase()
  const handleCheckout = () => {
    if (user) {
      setISCheckoutShow(!isCheckoutShow)
    }
    else {
      toast.error("Please login first");
    }
  }
  return (
    <div className="right sm:p-10 w-full h-auto sm:w-[30%] sm:border-l-2">
      <h1 className='my-5 text-base font-semibold sm:text-2xl'>Price Details</h1>
      <div className='flex justify-between items-center py-0 sm:py-2  sm:text-base'>
        <h2>Total MRP</h2>
        <h2>₹{calculateSubTotal()}.00</h2>
      </div>
      <div className='flex justify-between items-center  py-0 sm:py-2 text-base'>
        <h2>Discount on MRP</h2>
        <h2>-₹{calculateOriginalPrice()}.00</h2>
      </div>
      <div className='flex justify-between items-center border-b-4  py-0 sm:py-2 pb-4 text-base'>
        <h2>Delivery</h2>
        <h2 className='text-red-500'>Free Delivery</h2>
      </div>
      {
        <div className='flex justify-center items-center border-b-4 py-5 pb-4 text-base'>
          <TbTruckDelivery className='mr-1 text-2xl' />
          Free delivery order over ₹499
        </div>
      }
      <div className='py-4 text-center px-6 border text-green-600 my-3 cursor-pointer rounded-md'>
        <LuBadgePercent className='inline-block text-2xl mr-1' />
        Apply coupon</div>
      <div className="flex w-full px-4 py-2  flex-row sm:flex-col justify-between items-center fixed left-0 bottom-0 sm:relative bg-white">
        <div className="total flex flex-col sm:flex-row w-1/2 sm:w-full sm:justify-between items-start sm:items-center">
          <h2 className='font-bold text-xs sm:text-xl text-left text-slate-500 sm:capitalize uppercase'>Total amount</h2>
          <h2 className='font-bold text-left sm:text-xl text-2xl'>₹{calculateSubTotal() - calculateOriginalPrice()}.00</h2>
        </div>
        {
          !isCheckoutShow && <div className="btn px-3 py-4 w-1/2 sm:w-full text-center cursor-pointer bg-slate-700 text-white font-semibold my-3 rounded-lg" onClick={handleCheckout}>
            CHECKOUT
          </div>
        }
      </div>
      <Toaster />
    </div>
  )
}

export default CheckoutSidebar