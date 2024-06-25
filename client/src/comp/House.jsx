import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
function House() {
  return (
    <div>
      <div className='bg-blue-200 flex flex-col '>
        <div className='w-full h-20 flex flex-row justify-between items-center'>
            <div className='ml-40'><Link to={`/home`}>Grdaious</Link></div>
            <div className='mr-36'>
                <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Claim Assistance</button>
                <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Talk to Expert</button>
            </div>
        </div>
        <div className='flex flex-row w-[1200px] ml-40 rounded-xl bg-white'>
            <div className='flex flex-col justify-evenly rounded-l-xl items-center w-[552px] h-[610px] bg-white'>
              <div>
                <h1>Home Insurance</h1>
                <h1>Get home insurance starting@ just ₹9/month*</h1>
                <ul className='flex'>
                  <li>Earthquake</li>
                  <li>Flood</li>
                </ul>
                <img src='/images/house.png'/>
              </div>  
            </div>
            <div className='bg-white w-[650px] h-[610px] rounded-r-xl '>
                <div className='flex flex-col items-center'>
                    <RegisterForm/>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-evenly '>
          <div className='flex flex-col text-white mb-9 bg-purple-700 mt-5 w-[300px] rounded-lg'>
            <div className='ml-5 mt-9'>
              <h1>₹7,000+ crores</h1>
              <p>Total coverage</p>
              <br/>
              <h2>600+ cities</h2>
              <p>Secured properties</p>
              <br/>
              <h1>3 crore sq ft+</h1>
              <p>Total area insured</p>
            </div>
            <div>
              <div className='w-[150px] rounded-lg border border-blue-50 h-[125px] flex justify-center items-center ml-9 mt-5 mb-5'>
                <h1>we are rated top</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <div className='flex flex-row'>
              <ul className='flex flex-row list-none justify-between text-left'>
                <li>
                  <img src='/images/doc.png' className='w-36 rounded-lg'/>
                  <h1>Zero <br/>Documentation</h1>
                </li>
                <li>
                  <img src='/images/csupport.png' className='w-36 rounded-lg'/>
                  <h1>Claim <br/>Support</h1>
                </li>
              </ul>
            </div>
            <div className='flex flex-row '>
              <ul className='flex flex-row list-none justify-between text-left '>
                <li>
                  <img src='/images/instantpolicy.png' className='w-36 rounded-lg'/>
                  <h1>Instant <br/> Policy</h1>
                </li>
                <li>
                  <img src='/images/apremium.png' className='w-36 rounded-lg'/>
                  <h1>Affordable<br/> Premium</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default House
