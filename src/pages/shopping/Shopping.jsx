import React, { useEffect, useState } from 'react'
import Card from '../../components/cardSection/Card'
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineFilterList } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useFirebase } from '../../firebase/FirebaseContext';
import Sidebar from './sidebar/Sidebar';
import NewsLetter from '../../components/newsLetter/NewsLetter';
const Shopping = ({ setNav, setFoot }) => {
  const [data, setData] = useState(null);
  const [filter, setFilterData] = useState(null);
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState(null);
  const [isSleeves, setIsSleeves] = useState(null);
  const [isSort, setIsSort] = useState("latest");
  const [colors, setColors] = useState([]);
  const [isFilterShow, setIsfilterShow] = useState("hidden")
  const [isSortShow, setISSortShow] = useState("top-full");
  const { category } = useParams();
  // const query2 = decodeURIComponent(category)
  // console.log(category);
  const { getAllDocuments } = useFirebase();
  const [loading, setLoading] = useState(true);
  const getColors = (products) => {
    const setOfUniqueColors = new Set();
    let arr = [];
    products.map(({ color }) => {
      if (setOfUniqueColors.has(color) === false) {
        arr.push(color);
        setOfUniqueColors.add(color)
      }
    })
    setColors(arr);
    return products;
  }

  useEffect(() => {
    const getAllTheDocuments = async () => {
      console.log("i run1");
      setLoading(true);
      const data = await getAllDocuments();
      const documents = [];
      data.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      // console.log(documents);
      setData(documents);
      setLoading(false);
      return documents;
    }

    const filterDataWithQuery = (data) => {
      if (category) {
        setLoading(true);
        const decodedQuery = decodeURIComponent(category);
        const word = decodedQuery.toLowerCase();
        const queryArr = word.split(" ");
    
        const filteredProducts = data?.filter(({ name, dis, category }) => {
          return (
            queryArr.some((q) => name && name.toLowerCase().includes(q)) ||
            queryArr.some((q) => dis && dis.toLowerCase().includes(q)) ||
            queryArr.some((q) => category && category.toLowerCase().includes(q))
          );
        });
    
        setLoading(false);
        return filteredProducts;
      }
    }
    const filterData = (data) => {
      // console.log("dataaa",data);
      setLoading(true);
      let filteredProducts = filterDataWithQuery(data);
      getColors(filteredProducts)
      if (price) {
        const priceArr = price.split("-");
        // console.log(priceArr);
        filteredProducts = filteredProducts.filter(({ DPrice }) => DPrice >= Number(priceArr[0]) && DPrice <= Number(priceArr[1]));
        // console.log(filteredProducts);

      }
      if (color) {
        filteredProducts = filteredProducts.filter((item) => item.color === color);
      }
      if (isSleeves) {
        filteredProducts = filteredProducts.filter(({ dis }) => dis&&dis.toLowerCase().includes(isSleeves.toLowerCase()))
      }
      if (isSort) {
        switch (isSort) {
          case 'latest':
            // Default sorting (no need to modify the order)
            break;
          case 'ratingHighToLow':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
          case 'ratingLowToHigh':
            filteredProducts.sort((a, b) => a.rating - b.rating);
            break;
          case 'priceHighToLow':
            filteredProducts.sort((a, b) => b.DPrice - a.DPrice);
            break;
          case 'priceLowToHigh':
            filteredProducts.sort((a, b) => a.DPrice - b.DPrice);
            break;
          default:
            break;
        }
      }
      setFilterData(filteredProducts);
      setLoading(false)
    }
    if (!data) {
      getAllTheDocuments()
        .then((res) => filterData(res))
        .catch((error) => console.log(error))
    }
    else {
      filterData(data);
      setLoading(false)
    }
    setFoot(true)
    setNav(true)

  }, [category, color, price, isSleeves, isSort])
  const toggleSort = () => {
    if (isSortShow === "top-full") {
      setISSortShow("top-0");
    }
    else {
      setISSortShow("top-full");
    }
  }
  const handleChildClick = (event) => {
    // Prevent the click event from reaching the outer div
    event.stopPropagation();
  };
  const handleSorting =(state)=>{
     setIsSort(state)
     toggleSort("top-full")
  }
  return (
    <>
    <div className='flex w-full h-auto relative'>
      <Sidebar colors={colors} setPrice={setPrice} setColor={setColor} setIsSleeves={setIsSleeves} setIsSort={setIsSort} isFilterShow={isFilterShow} setIsfilterShow={setIsfilterShow} price={price} isSleeves={isSleeves} color={color} />
      <div className="product w-full sm:w-4/5 sm:p-10 relative  border border-1 min-h">
        <div className="shorting flex justify-between items-center ">
          <h1 className='text-base sm:text-2xl p-3 font-medium mt-3 sm:mt-0'>Results for "{category}"  {filter?.length} products found</h1>
          <form>
            <div className='justify-center items-center hidden md:flex'>
              <label htmlFor="sort" className='text-slate-500 mr-2 font-extralight'>Sort by:</label>
              <select name="" id="sort" className='py-1 px-1 sm:py-2 sm:px-3 border border-1 text-slate-400 border-slate-300 rounded-sm' onClick={(e) => setIsSort(e.target.value)}>
                <option value="latest" className='h-5'>Latest</option>
                <option value="priceHighToLow" className='py-2 px-3'>Price high to low</option>
                <option value="priceLowToHigh" className='py-2 px-3'>Price low to high</option>
              </select>
            </div>
          </form>
        </div>
        {
          loading ?
            <>
              <div className='h-screen sm:h-[20rem] w-full sm:w-[90vw] px-2 py-8 sm:px-10 sm:pt-10 flex justify-start sm:gap-2 flex-wrap sm:flex-nowrap'>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[80%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[80%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse rounded-lg' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[80%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>
                <div className={` w-1/2 h-2/5 sm:h-full sm:min-h-96 sm:w-[20%] p-0 sm:p-2 mt-2 `} >
                  {/* <div className='h-5 w-16 bg-slate-200 animate-pulse'></div> */}
                  <div className='w-full h-[80%] sm:h-[80%] relative'>
                    <div className='w-full h-full group bg-slate-200 animate-pulse' />
                  </div>
                  <div className="text-black p-1 h-5 w-16 bg-slate-200 animate-pulse tracking-tighter sm:font-bold mt-2 sm:text-sm"></div>
                  <div className='flex justify-between p-1 items-center'>
                    <p className="font-bold my-1 h-5 w-10 bg-slate-200 animate-pulse"></p>
                    <div className='flex'>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                      <div className='bg-slate-200 animate-pulse h-2 w-2 rounded-full'></div>
                    </div>
                  </div>
                  <button className='w-full p-1 h-10 bg-slate-200 animate-pulse  duration-500 border-slate-800 hover:text-white'></button>
                </div>

              </div>
            </> : <>
              <div className="flex relative flex-wrap justify-start items-center h-auto">

                {filter.length>0?filter?.map((item) => (
                  <Card key={item.id} img={item?.image[0]} name={item.name} price1={item.DPrice} price2={item.OPrice} id={item.id} />
                )):<div className='h-[50vh] flex-col w-full flex justify-center items-center'>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696455.jpg?w=740&t=st=1704097849~exp=1704098449~hmac=5687c29893929c2e701b30b28d07e38eb69a69b1cb29215aaa85d6c6c683dd0b" className='h-60 w-60 object-cover' alt="" />
                    <h1 className='-mt-5 text-xl text-slate-500'>Oops!! search not found</h1>
                </div>}
              </div>
              <div className={`h-full bg-slate-700/25 duration-300 w-full fixed ${isSortShow} left-0 sm:hidden flex justify-center overflow-hidden`} onClick={() => toggleSort("top-full")}>
                <div className={` w-full h-48 bg-slate-100 shadow-2xl p-5 absolute bottom-0`} onClick={(event) => handleChildClick(event)}>
                  <h2 className='font-bold text-base'>SORT BY</h2>
                  <div className='w-full border-b py-2 mt-5' onClick={()=>handleSorting("priceHighToLow")}>Price High to Low</div>
                  <div className='w-full border-b py-2' onClick={()=>handleSorting("priceLowToHigh")}>Price Low to High</div>
                </div>
              </div>
            </>}
        <div className='sm:hidden flex fixed bottom-0 h-14 bg-slate-50 w-full justify-between items-center'>
          <div className="sort w-1/2 flex justify-center items-center">
            <TbArrowsSort className='mr-2' />
            <p className='text-base font-semibold text-red-500' onClick={() => toggleSort("top-0")}>SORT</p>
          </div>
          <div className="sort w-1/2 flex justify-center items-center">
            <MdOutlineFilterList className='mr-2' />
            <p className='text-base font-semibold text-red-500' onClick={() => setIsfilterShow("block")}>Filter</p>
          </div>
        </div>
      </div>
    </div>
      <NewsLetter/>
      </>
  )
}

export default Shopping