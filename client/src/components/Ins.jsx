import React from 'react';
import { Link } from 'react-router-dom';

function Ins() {
  return (
    <div className='flex flex-col items-center justify-evenly'>
      {/* Insurance options */}
      <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-4 w-full mb-2 mt-5'>
        {/* Health Insurance */}
        <InsuranceOption imageSrc='./images/Health1.png' to='/register/health' title='Health Insurance' />
        {/* 2 Wheeler Insurance */}
        <InsuranceOption imageSrc='./images/Bike1.png' to='/register/bike' title='2 Wheeler Insurance' />
        {/* Car Insurance */}
        <InsuranceOption imageSrc='./images/Car1.png' to='/register/car' title='Car Insurance' />
        {/* Home Insurance */}
        <InsuranceOption imageSrc='./images/Home1.png' to='/register/house' title='Home Insurance' />
        {/* Travell Insurance */}
        <InsuranceOption imageSrc='./images/Travell1.png' to='/register/travell' title='Travell Insurance' />
        {/* Term Life Insurance */}
        <InsuranceOption imageSrc='./images/Term1.png' to='/register/term' title='Term Life Insurance' />
        {/* Fire Insurance */}
        <InsuranceOption imageSrc='./images/Fire1.jpg' to='/register/fire' title='Fire Insurance' />
      </div>
    </div>
  );
}

// Component for each insurance option
function InsuranceOption({ imageSrc, to, title }) {
  return (
    <div className='text-xl flex flex-col items-center'>
      <img src={imageSrc} className='w-[218px] h-[218px] rounded-xl' alt={title} />
      <button><Link to={to}>{title}</Link></button>
    </div>
  );
}

export default Ins;
