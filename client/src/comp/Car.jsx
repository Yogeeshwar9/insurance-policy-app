import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'


function Car() {
  return (
    <div className='w-full flex flex-col bg-light-500'>
      <div className='w-full h-20 flex flex-row justify-between items-center bg-blue-200'>
        <div className='ml-40'><Link to={`/home`}>Grdaious</Link></div>
          <div className='mr-36'>
            <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>
              Claim Assistance
            </button>
            <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>
              Talk to Expert
            </button>
          </div>
      </div>

      <div className='w-full flex flex-row'>
        <div className='flex flex-col w-[50%] ml-12'>
          <h1>Car Insurance</h1>
          <p>Car insurance provides financial coverage to you and your car against accidental damages arising from unforeseen incidents. A car insurance policy also covers a car from third party liabilities, theft and fire. Having a valid insurance policy for car ensures that you comply with laws of the Motor Vehicles Act, 1988.</p>
          <div className='flex flex-row justify-between mt-5 mb-5 ml-5'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row'>
                <img src='/images/time.png' className='w-16 rounded-full'/>
                <h2 className='ml-3'> Renew policy in 2minutes*</h2>
              </div>
              <div className='flex flex-row'>
                <img src='/images/security.png' className='w-12 rounded-full' />
                <h2 className='ml-3'>20+ Insurers to choose</h2>
              </div>
              <div className='flex flex-row'>
                <img src='/images/CarIns_img.jpg' className='w-20 '/>
                <h2 className='ml-3'>1.2cr+ Vehicles Insured</h2>
              </div>
            </div>
            <div>
              <img src='/images/cins.png' className='w-48'/>
            </div>
          </div>
        </div>
        <div className='flex flex-col text-center'>
          <h1>Get Car Insurance Starting at only <br/>Rs.2049 only</h1>
          <RegisterForm/>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Car
