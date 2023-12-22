import React, { useEffect, useState } from 'react'
import CardSection from '../../components/cardSection/CardSection'
import { useFirebase } from '../../firebase/FirebaseContext';
import { useParams } from 'react-router-dom';
import Img from '../../components/lazyloader/Img'
import toast, { Toaster } from 'react-hot-toast'
import ProductReview from './productReview/ProductReview';
const ItemDetail = ({ setNav, setFoot }) => {
    const [carts, setCarts] = useState(() => {
        const data = localStorage.getItem('carts');
        return data ? JSON.parse(data) : [];
    });
    const [loading, setLoading] = useState(true);
    const [obj, setObj] = useState(null);
    const [mainSrc, setMainSrc] = useState();
    const [data, setData] = useState();
    const [imgArr, setImgArr] = useState([]);
    const firebase = useFirebase();
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await firebase.getDocument(id);
                const data = res.data();
                setObj(data);
                setImgArr(data?.image || []);
                setMainSrc(data?.image[0]);
                setLoading(false);
                return data;
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        const fetchData2 = async (obj) => {
            try {
                const res = await firebase.getDocuments(obj.category);
                const data = res.docs;
                console.log(data);
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
      
        fetchData()
        .then((res)=>fetchData2(res));
        setFoot(true);
        setNav(true);
    }, [id, setFoot, setNav]);
    const  discountPercentage = ((obj?.OPrice - obj?.DPrice) / obj?.OPrice) * 100;
    const handleImgChange = (img) => {
        setMainSrc(img);
    }
    const handleAddtoCart = () => {
        const newdata = [...carts, obj];
        console.log(newdata);
        localStorage.setItem('carts', JSON.stringify(newdata));
        toast.success("Item added...")
    }
    return (
        <>
            {
                loading ? <>
                    <div className='h-full'>
                        <section id="prodetails" className="p-5 sm:px-10 flex flex-col sm:flex-row w-full  items-center h-[70%]">
                            <div className='h-full w-full sm:w-[35%] flex justify-center items-center sm:gap-2 flex-col-reverse sm:flex-row '>
                                <div className='flex gap-1 justify-center items-center flex-row sm:flex-col w-full sm:w-[20%] mt-1'>
                                    <div className='w-[24%] sm:w-full bg-slate-200 animate-pulse h-[5.7rem] ' />
                                    <div className='h-[5.7rem] w-[24%] bg-slate-200 animate-pulse sm:w-full' />
                                    <div className='h-[5.7rem] w-[24%] bg-slate-200 animate-pulse sm:w-full' />
                                    <div className='h-[5.7rem] bg-slate-200 animate-pulse w-[24%] sm:w-full  ' />
                                </div>
                                <div className='w-full h-[350px]  sm:w-80 sm:h-[420px] bg-slate-200 animate-pulse'></div>
                            </div>
                            <div className=" w-full sm:w-[65%] mt-7 sm:px-12 pt-30">
                                <h6 className="text-xl font-semibold my-2 h-5 w-28 bg-slate-200 animate-pulse rounded-md"></h6>
                                <h4 className="text-3xl my-2  h-7 w-40 bg-slate-200 animate-pulse rounded-md"></h4>
                                <h2 className="text-2xl my-2  h-7 w-24 bg-slate-200 animate-pulse rounded-md"></h2>
                                <div className="block py-2 px-4 mb-4 border border-gray-300 focus:outline-none  h-7 w-32 bg-slate-200 animate-pulse rounded-md">
                                </div>
                                <div type="number" className="focus:outline-none w-14 border border-1 mr-3 p-2  h-5 bg-slate-200 animate-pulse rounded-md inline-block" />
                                <button className=' sm:w-1/4 p-2  hover:bg-slate-600  duration-500  
                      h-10 w-44 bg-slate-200 animate-pulse rounded-md
                    '></button>
                                <h4 className="text-2xl py-4  h-7 w-32 bg-slate-200 animate-pulse rounded-md my-3"></h4>
                                <div className="min-h-[100px] max-w-[400px] bg-slate-200 animate-pulse rounded-md"></div>
                            </div>
                        </section>
                    </div>
                </> : <>
                    <div className='h-full'>
                        <section id="prodetails" className=" p-5 sm:px-10 flex flex-col sm:flex-row w-full  items-center h-[70%]">
                            <div className='h-full w-full sm:w-[35%] flex justify-center items-center sm:gap-2 flex-col-reverse sm:flex-row '>
                                <div className='flex gap-1 justify-center items-center flex-row sm:flex-col w-full sm:w-[20%] mt-1'>
                                    {
                                        imgArr?.length > 0 && imgArr.map((img, index) => {
                                            return (<img key={index} src={img} className='hover:scale-105 duration-500 sm:w-full w-[25%]' onClick={() => handleImgChange(img)} />)
                                        })
                                    }
                                </div>
                                <img src={mainSrc} className='w-full sm:w-[80%] h-full cursor-pointer' />
                            </div>
                            <div className=" w-full sm:w-[65%] mt-7 sm:px-12 pt-30">
                                <h6 className="text-xl font-semibold my-2">Home / {obj?.category}</h6>
                                <h4 className="text-3xl my-2">{obj?.name}</h4>
                                <div className='flex justify-start items-center'>
                                    <h2 className="text-2xl my-2 font-semibold">₹{obj?.DPrice}</h2>
                                    <s className='mr-1 text-slate-400 mx-2 text-xl'>₹{obj?.OPrice}</s>
                                    <p className="font-bold my-1 text-green-600 text-xl">({Math.round(discountPercentage)}% off)</p>
                                </div>
                                <select className="block py-2 px-4 mb-4 bg-white border border-gray-300 focus:outline-none">
                                    <option>Select Size</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    <option>Small</option>
                                    <option>Large</option>
                                </select>
                                <input type="number" className="focus:outline-none w-14 border border-1 mr-3 p-2" />
                                <button className='fixed bottom-0 w-full left-0 p-3 text-lg sm:relative sm:w-1/4 sm:p-2 bg-slate-800 text-white border hover:bg-slate-600  duration-500 border-slate-800 hover:text-white' onClick={handleAddtoCart}>Add to bag</button>
                                <h4 className="text-2xl py-4">Product details</h4>
                                <span className="leading-5 w-full">{
                                    obj?.dis ? <p>{obj?.dis}</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusantium facilis ipsa ut laudantium eligendi omnis dolor dicta. Laborum illum eaque, nihil eius error vero repellat possimus, voluptatibus porro corporis dolor commodi et impedit! Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores?</p>
                                }</span>
                            </div>
                        </section>
                        <ProductReview/>
                        <CardSection data={data}/>
                        <Toaster />
                    </div>
                </>
            }
        </>
    )
}

export default ItemDetail