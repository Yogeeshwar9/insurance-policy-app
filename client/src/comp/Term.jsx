import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

function Term() {
  return (
    <div>
      <div className='h-[989px] bg-blue-200 flex flex-col '>
        <div className='w-full h-20 flex flex-row justify-between items-center'>
            <div className='ml-40'><Link to={`/home`}>Grdaious</Link></div>
            <div className='mr-36'>
                <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Claim Assistance</button>
                <button className='border-2 border-blue-700 mr-5 p-1 pl-3 pr-3 rounded-md'>Talk to Expert</button>
            </div>
        </div>
        <div className='flex flex-row w-[1200px] ml-40 rounded-xl bg-slate-400'>
            <div className='flex flex-col justify-evenly rounded-l-xl items-center w-[552px] h-[610px] bg-sky-700'>
                <div className='items-center'>
                    <div className='text-white flex flex-col items-center' >
                        <h1 className='text-2xl'><span className='text-3xl'>₹1 Crore</span>  life cover starting</h1>
                        <h3 className='text-lg'>from <span className='text-2xl'>₹473</span>/month+</h3>
                        <p className='bg-green-300 text-green-900 pt-1 pb-1 pr-9 pl-9 rounded-lg'>Get an online discount of <span className='text-green-950'>upto 10%</span></p>
                    </div>
                </div>
                <div className='w-[493px] h-[260px] bg-blue-100 flex flex-col justify-evenly items-center rounded-3xl'>
                    <div><p>~Source - Google Review Rating</p></div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col mr-2 items-center'>
                            <h2 className='text-xl text-blue-700'>6.7 crore</h2>
                            <p className='text-sm'>Registered Consumers</p>
                        </div>
                        <div className='flex flex-col mr-2 items-center'>
                            <h2 className='text-xl text-blue-700'>51</h2>
                            <p className='text-sm'>Insurance Partners</p>
                        </div>
                        <div className='flex flex-col mr-2 items-center'>
                            <h2 className='text-xl text-blue-700'>3.4 crore</h2>
                            <p className='text-sm'>Policies Sold</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>Gradious is one of India's leading digital</p>
                        <p>insurance marketplace</p>
                    </div>
                </div>
            </div>
            <div className='bg-white w-[650px] h-[610px] rounded-r-xl '>
                <div className='flex flex-col items-center'>
                    <RegisterForm/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Term
