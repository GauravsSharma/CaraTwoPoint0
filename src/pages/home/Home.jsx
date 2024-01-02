import React, { useEffect, useState } from 'react'
import { Hero } from './hero/Hero'
import CardSection from '../../components/cardSection/CardSection'
import Carousel from '../../components/carousel/Carousel';
import Img from '../../components/lazyloader/Img'
import { firestore, useFirebase } from '../../firebase/FirebaseContext';
import { addDoc, collection } from 'firebase/firestore';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import { Link } from 'react-router-dom';

const Home = ({ setFoot, setNav }) => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true)
  const firebase = useFirebase()
  const fetchdata = (category, setFuction) => {
    firebase.getDocuments(category)
      .then(res => {
        // Handle the JSON data
        setFuction(res.docs)
        console.log(res.docs);
        setLoading(false);
        // console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Fetch error:', error);
      });
  }


  useEffect(() => {
    fetchdata("men-shirts", setData1);
    fetchdata("men-pants", setData2);
    setNav(true)
    setFoot(true);
  }
    , [])
  return (
    <>
      {
        loading ? <>
          <div className='max-w-[1400px] h-[500px] w-full  py-2 relative group bg-slate-200 animate-pulse'>
            <div className='duration-1000 bg-center bg-contain bg-no-repeat'>
            </div>
          </div>
          <div className='h-auto '>
            <div className="flex h-32 justify-center items-center gap-5 flex-col ">
              <h1 className=' h-6 w-48 rounded-md bg-slate-200 animate-pulse'></h1>
              <h1 className=' h-5 w-72 rounded-md bg-slate-200 animate-pulse'></h1>
            </div>
            <div className='flex justify-center items-center gap-20'>
              <div className='[h-80%] sm:h-96 sm:w-[40%]  rounded-lg bg-slate-200 animate-pulse'>
              </div>
              <div className='[h-80%] sm:h-96 sm:w-[40%] rounded-lg bg-slate-200 animate-pulse'>
              </div>
            </div>
          </div>
        </> : <>
          <Carousel />
          <div className='p-5 sm:py-10 sm:px-20 h-auto'>
            <h1 className=' text-xl sm:text-2xl  text-center my-1'>Winter Is Coming</h1>
            <p className='sm:text-base text-sm text-slate-400 text-center mb-7'>Upgrade your wardrobe with our must-have new launches</p>
            <div className='flex flex-col justify-center gap-2 sm:gap-12 overflow-auto items-center sm:flex-row '>
              <Img className="h-[80%] sm:h-96 object-cover" src="https://cdn-media.powerlook.in/mycustomfolder/tshirt_20_10.jpg" alt="" />
              <Img className="h-[80%] sm:h-96 object-cover" src="https://cdn-media.powerlook.in/mycustomfolder/tshirt_20_10_23.jpg" alt="" />
            </div>
          </div>
          <div className='p-5 sm:py-10 sm:px-20'>
            <h1 className=' text-xl sm:text-2xl  text-center my-1'>Explore Products</h1>
            <p className='sm:text-base text-sm text-slate-400 text-center mb-7'>Select category</p>
            <div className="flex justify-between mt-10 flex-wrap w-full">
              <Link to="/shopping/shirts" className='w-1/2 sm:w-44 h-52'>
                <div className="rounded-xl h-full w-full sm:my-0 my-2 sm:w-44 hover:scale-110 hover:shadow-2xl duration-700 shadow-lg">
                  <img src="https://cdn-media.powerlook.in/catalog/category/Shirts.jpg" style={{ height: '80%', width: '100%', objectFit: "cover" }} />
                  <h1 className='font-bold text-lg text-center h-[20%] p-2'>SHIRTS</h1>
                </div></Link>
              <Link to="/shopping/pants" className='w-1/2 sm:w-44 h-52'> <div className="rounded-xl h-full w-full sm:w-44 sm:my-0 my-2 hover:scale-110 hover:shadow-2xl duration-700 shadow-lg">
                <img src="https://cdn-media.powerlook.in/catalog/category/Bottoms.jpg" style={{ height: '80%', width: '100%', objectFit: "cover" }} />
                <h1 className='font-bold text-lg text-center h-[20%] p-2'>BOTTOMS</h1>
              </div></Link>
              <Link to="/shopping/jackets" className='w-1/2 sm:w-44 h-52'>
                <div className="rounded-xl h-full w-full sm:w-44 sm:my-0 my-2 hover:scale-110 hover:shadow-2xl duration-700 shadow-lg">
                  <img src="https://cdn-media.powerlook.in/catalog/category/Jackets.jpg" style={{ height: '80%', width: '100%', objectFit: "cover" }} />
                  <h1 className='font-bold text-lg text-center h-[20%] p-2'>JACKETS</h1>
                </div></Link>
              <Link to="/shopping/coorders" className='w-1/2 sm:w-44 h-52'>
                <div className="rounded-xl h-full w-full sm:w-44 sm:my-0 my-2 hover:scale-110 hover:shadow-2xl duration-700 shadow-lg">
                  <img src="https://cdn-media.powerlook.in/catalog/category/Co-Ords.jpg" style={{ height: '80%', width: '100%', objectFit: "cover" }} />
                  <h1 className='font-bold text-lg text-center h-[20%] p-2'>CO-ORDS</h1>
                </div>
              </Link>
              <Link to="/shopping/t-shirts" className='w-1/2 sm:w-44 h-52'>
                <div className="rounded-xl h-full w-full sm:w-44 sm:my-0 my-2 hover:scale-110 hover:shadow-2xl duration-700 shadow-lg">
                  <img src="https://cdn-media.powerlook.in/catalog/category/T-shirts_1.jpg" style={{ height: '80%', width: '100%', objectFit: "cover" }} />
                  <h1 className='font-bold text-lg text-center h-[20%] p-2'>T-SHIRTS</h1>
                </div>
              </Link>
              <Link to="/shopping/shirts" className='w-1/2 sm:w-44 h-52'>
                <div className="rounded-xl h-full w-full sm:w-44 sm:my-0 my-2 hover:scale-110 hover:shadow-2xl duration-700 shadow-lg">
                  <img src="https://cdn-media.powerlook.in/catalog/category/On-Sale.jpg" style={{ height: '80%', width: '100%', objectFit: "cover" }} />
                  <h1 className='font-bold text-lg text-center h-[20%] p-2'>70% OFF</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className='p-5 sm:p-20'>
            <img src="https://cdn-media.powerlook.in/mycustomfolder/Live-Offer-1Nov-2023.jpg" alt="" />
          </div>
          <CardSection data={data1} heading={"New Arrival"} subHead={"Upgrade your wardrobe with our must-have shirts"} />
          <div className='p-5 sm:py-10 sm:px-20'>
            <h1 className=' text-xl sm:text-2xl  text-center my-1'>Flannel Season</h1>
            <p className='sm:text-base text-sm text-slate-400 text-center mb-7'>Shop a shirt + layer in one with this new collection</p>
            <img className='w-full sm:h-[500px] h-[220px] object-cover' src="https://cdn-media.powerlook.in/mycustomfolder/discover-the-magic.jpg" alt="" />

          </div>
          <CardSection data={data2} heading={"Season's Best Collections"} subHead={"Discover the latest trends in streetwear"} />
        </>
      }
      <NewsLetter />
    </>

  )
}

export default Home