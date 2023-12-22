import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="p-7 sm:p-14 my-5 flex flex-col sm:flex-row justify-between items-center flex-wrap bg-cover" style={{ backgroundImage: "url('https://gauravssharma.github.io/Cara.in/banner/b14.png')", backgroundRepeat: 'no-repeat', backgroundPosition: '20% 30%', backgroundColor: '#041e42' }}>
      <div className="newstext">
        <h4 className="text-2xl font-bold text-white">Signup For Newsletter</h4>
        <p className="text-xl font-semibold text-gray-300">Get e-mail updates about our latest shop and <span className="text-yellow-500">special offer.</span></p>
      </div>
      <div className="form flex w-96 items-center">
        <input type="email" placeholder="Your E-mail Address" className="h-12 px-4 text-base w-full border border-transparent rounded-l-md outline-none" />
        <button className="normal h-12 px-6 bg-slate-700 text-white rounded-r-md whitespace-nowrap">Sign Up</button>
      </div>
    </section>
  );
};

export default Newsletter;
