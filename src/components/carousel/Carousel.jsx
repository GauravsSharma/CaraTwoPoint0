import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { FiLoader } from 'react-icons/fi';
const Carousel = () => {
    const [loading, setLoading] = useState(true);
    const slides = [
        {
            url: "https://cdn-media.powerlook.in/mycustomfolder/Coechet-20Shirts-20231Nov.jpg",
        },
        {
            url: "https://cdn.sanity.io/images/qa41whrn/staging/de26961c21732dfefb070df4de59cc0b650269b1-2880x1040.jpg?w=2160&q=80&auto=format"
        },
        {
            url: "https://cdn-media.powerlook.in/mycustomfolder/Winter-Jackets.jpg"
        },
        {
            url: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-2802023-MainBannerDailyChanging-Z1-P4-GAP-min50.jpg"
        },
    ]
    const [currentIdx, setCurrIdx] = useState(0);
    const setPrev = () => {
        const firstSlide = currentIdx === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIdx - 1
        setCurrIdx(newIndex);
    }
    const setNext = () => {
        const firstSlide = currentIdx === slides.length - 1;
        const newIndex = firstSlide ? 0 : currentIdx + 1
        setCurrIdx(newIndex);
    }

    return (
        <>
            <div className='max-w-[1400px] h-[500px] w-full  py-2 relative group'>
                <div style={{ background: `url(${slides[currentIdx].url})`, width: "100%", height: "100%", transition: "1000ms", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className='duration-1000 bg-center bg-contain bg-no-repeat'>
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={setPrev} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={setNext} size={30} />
                </div>
            </div>
        </>
    )
}

export default Carousel