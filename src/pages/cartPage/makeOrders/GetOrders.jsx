import React, { useEffect, useState } from 'react';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import ShoppingCart from '../ShoppingCart'
import AdForm from '../../fiveInOneLayout/AdForm';
import toast, { Toaster } from 'react-hot-toast';
const GetOrders = ({isCheckoutShow=false, setISCheckoutShow,handleQuantityChange,buyNow}) => {
  console.log(handleQuantityChange);
  const [deliveryAddressExpanded, setDeliveryAddressExpanded] = useState(true);
  const [orderSummaryExpanded, setOrderSummaryExpanded] = useState(false);
  const [isAddShow, setIsAddShow] = useState(false);
  const [cards, setCards] = useState([]);
  // const [paymentExpanded, setPaymentExpanded] = useState(false);
  const [address, setAddress] = useState(null);
  const getCards = () => {
    const data = localStorage.getItem("cart");
    const items = JSON.parse(data);
    setCards(items);
  }
  useEffect(() => {
    getCards();
  }, [])
  const handleContinue = () => {
    if (deliveryAddressExpanded) {
      if (address !== null) {
        setDeliveryAddressExpanded(false);
        setOrderSummaryExpanded(true);
      }
      else {
        toast.error("Please add address first")
      }
    } else if (orderSummaryExpanded) {
      setOrderSummaryExpanded(false);
    }
  };
  const handleClick = () => {
    if (deliveryAddressExpanded) {
      setDeliveryAddressExpanded(false);
      setOrderSummaryExpanded(true);
    } else if (orderSummaryExpanded) {
      setOrderSummaryExpanded(false);
      setDeliveryAddressExpanded(true)
    }
    else {
      setDeliveryAddressExpanded(true);
    }
  };
  const getUserAddress = () => {
    const getAddress = localStorage.getItem('userAddress');
    setAddress(JSON.parse(getAddress))
  }
  const removeAddress = () => {
    localStorage.removeItem("userAddress")
    setAddress(null)
  }
  useEffect(() => {
    getUserAddress()
  }, [])
  const renderDeliveryAddress = () => (
    <div className={`h-auto border w-full rounded-md  shadow-md py-3`}>
      <div className='w-full p-3'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center'>
            <span><PiNumberCircleOneFill className='text-xl mr-2' /></span>
            <h2 className='font-semibold text-base'>SELECT DELIVERY ADDRESS</h2>
          </div>
         {!address&&<div className='flex text-red-500 justify-center items-center text-base cursor-pointer' onClick={() => setIsAddShow(true)}>
            <FaPlusCircle className='mr-2' />
            <p className='font-semibold flex'>ADD <span className='sm:block hidden'> NEW ADDRESS</span></p>
          </div>}
        </div>
        {
          !deliveryAddressExpanded && <p className='ml-7 text-[14px] my-2 text-slate-500'>{address?.address} {address?.landmark}, {address?.state} - {address?.zipCode}</p>
        }
      </div>
      {deliveryAddressExpanded && 
       <div className={` bg-slate-100 p-3 pl-7 ${deliveryAddressExpanded ? 'max-h-screen' : 'max-h-0'} ${deliveryAddressExpanded ? 'opacity-100' : 'opacity-0'} transition-max-height duration-500 ease-out`}>
          <div className='flex justify-between items-center '><div className='flex items-center'>
            <div className='h-5 w-5 rounded-full border-[5px] border-red-500 flex justify-center items-center'></div><span className='font-semibold mx-2 my-2'>{address?.name}</span>
          </div><div><span className='text-[14px] text-slate-400 mr-2 border-r px-3 cursor-pointer' onClick={() => setIsAddShow(true)}>EDIT</span> <span className='text-[14px] text-red-500 cursor-pointer' onClick={removeAddress}>REMOVE</span></div></div>
          <div className='ml-7 text-[14px] text-slate-500'><p>{address?.address} {address?.landmark}, {address?.state} - {address?.zipCode}</p>
            <p className='my-3'>+91 {address?.phoneNumber}</p>
          </div>
          <button onClick={handleContinue} className='ml-7 py-2 rounded-md px-4 bg-slate-800 font-semibold text-white text-[15px]'>DELIVER HERE
          </button>
        </div>
      }
      {
        !address&&<div className='p-3 pl-7 text-slate-500'>
        No record found
     </div>
      }
    </div>
  );

  const renderOrderSummary = () => (
    <div className='h-auto border w-full rounded-md my-3 shadow-md py-3'>
      <div className='w-full p-3'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center'>
            <span><PiNumberCircleTwoFill className='text-xl mr-2' /></span>
            <h2 className='font-semibold text-base'>ORDER SUMMARY</h2>
          </div>
        </div>
        <p className='ml-7 text-[14px] my-2 text-slate-500'>Estimated delivery by <span className='text-red-500 font-bold'>Thursday, December 28, 2023</span></p>
      </div>
      {orderSummaryExpanded && (
        <div>
          {cards?.map((item, idx) => (
            <ShoppingCart key={idx}
            name ={item.name}
            DPrice ={item.DPrice}
            OPrice ={item.OPrice}
            color ={item.color}
            image ={item.image[0]}
            id ={item.id}
            setCart={setCards}
            idx={idx}
            isCheckoutShow={isCheckoutShow}
            setISCheckoutShow={setISCheckoutShow}
            handleQuantityChange={handleQuantityChange}
            quan={item.qty}
            size={item.size}
            />
          ))}
          <button onClick={buyNow} className='ml-7 mx-2 py-2 rounded-md px-4 bg-slate-800 font-semibold text-white text-[15px]'>Continue</button>
        </div>
      )}
    </div>
  );

  return (
    <div className='sm:p-10 w-full sm:w-[70%]'>
      {renderDeliveryAddress()}
      {renderOrderSummary()}
      <AdForm isAddShow={isAddShow} setIsAddShow={setIsAddShow} 
      address={address?.address} 
      landmark={address?.landmark} 
      zipCode={address?.zipCode} c
      ountry={address?.country} s
      tate={address?.state} 
      name={address?.name} 
      phoneNumber={address?.phoneNumber} 
      getUserAddress={getUserAddress} />
      <Toaster />
    </div>
  );
};

export default GetOrders;
