import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
function Travell() {
  return (
    <div>
      <div className='h-[1003px] bg-blue-200 flex flex-col items-center'>
        <div className='w-full h-20 mt-2 flex flex-row justify-between items-center'>
          <div className='ml-40'><Link to={`/home`}>Grdaious</Link></div>
          <div className='mr-36'>
            <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Claim Assistance</button>
            <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Talk to Expert</button>
          </div>
        </div>
        <h1 className='text-5xl'>Let's secure your travel</h1>
        <h2 className='text-xl mt-3'>Which country are you travelling to?</h2>
        {/* country images start here */}
        <div className='text-center mt-9'>
          <h1 className='text-2xl mb-5'>Popular destinations</h1>
          <div className='flex flex-row gap-5 justify-evenly'>
            <div>
              <img className='rounded-full w-48 h-48 cursor-pointer' src={`/images/Schengen.jpeg`} alt="Schengen" />
              <p>Schengen</p>
            </div>
            <div>
              <img className='rounded-full w-48 h-48 cursor-pointer' src={`/images/usa.jpg`} alt="USA_img" />
              <p>USA</p>
            </div>
            <div>
              <img className='rounded-full w-48 h-48 cursor-pointer' src={`/images/thailand.jpg`} alt="thailand_img" />
              <p>Thailand</p>
            </div>
            <div>
              <img className='rounded-full w-48 h-48 cursor-pointer' src={`/images/germany.jpg`} alt="germany_img" />
              <p>Germany</p>
            </div>
            <div>
              <img className='rounded-full w-48 h-48 cursor-pointer' src={`/images/uae.jpg`} alt="UAE_img" />
              <p>UAE</p>
            </div>
            <div>
              <img className='rounded-full w-48 h-48 cursor-pointer' src={`/images/france-paris.jpg`} alt="france-paris" />
              <p>France</p>
            </div>
          </div>
        </div>
        {/* country images end here */}
        <div className='flex flex-col items-center mt-3'>
          <RegisterForm/>
        </div>
        <div className='flex flex-row justify-between mt-12'>
          <div className='flex flex-row gap-3 mr-9'>
            <div><img className='w-20 h-20 rounded-lg' src={`/images/instant.png`} alt="instant" /></div>
            <div>
              <h1 className='text-2xl'>Instant policy</h1>
              <p>in 2 Minutes</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 mr-9'>
            <div><img className='w-20 h-20 rounded-lg' src={`/images/flight_can.png`} alt="instant" /></div>
            <div>
              <h1 className='text-2xl'>Flight Cancellation</h1>
              <p>Delays & Change covered</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 mr-9'>
            <div><img className='w-20 h-20 rounded-lg' src={`/images/covid.png`} alt="instant" /></div>
            <div>
              <h1 className='text-2xl'>Covid-19</h1>
              <p>All plans cover Covid-19</p>
            </div>
          </div>
          <div className='flex flex-row gap-3 mr-9'>
            <div><img className='w-20 h-20 rounded-lg' src={`/images/Quick.png`} alt="instant" /></div>
            <div>
              <h1 className='text-2xl'>Quick Claim Settlement</h1>
              <p>With Cashless facility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travell
