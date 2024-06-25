import React from 'react';

function Footer() {
  return (
    <div className='flex flex-col w-full text-black mt-4'>
      {/* Footer Section 1 */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-slate-600 p-4 mb-4'>
        <div className='flex items-center mb-2 md:mb-0'>
          <img src='./images/security.png' alt='Security' className='w-9 h-11 mr-3'/>
          <p className='text-xl'>100% SECURE<br/>CHECKOUT</p>
        </div>
        <div className='flex items-center mb-2 md:mb-0'>
          <img src='./images/globe_img.jpg' alt='Globe' className='w-10 h-10 rounded-full mr-2'/>
          <p>AVAILABLE OVER 70<br/>COUNTRIES</p>
        </div>
        <div className='flex items-center'>
          <img src='./images/headset_icon.png' alt='Headset' className='w-9 h-11 mr-3'/>
          <p className='text-xl'>OUTSTANDING<br/>SUPPORT</p>
        </div>
      </div>

      {/* Footer Section 2 */}
      <div className='flex flex-col md:flex-row justify-between items-start p-4'>
        <div className='mb-4 md:mb-0'>
          <img src='./images/security.png' alt='Security' className='w-16 h-20'/>
        </div>
        <div className='mb-4 md:mb-0'>
          <h3>Find us in social media</h3>
          <div className='flex mt-3'> 
            <img src='./images/insta_img.jpg' alt='Instagram' className='w-12 h-12 mr-3 rounded-full'/>
            <img src='./images/facebook_img.jpg' alt='Facebook' className='w-12 h-12 mr-3 rounded-full'/>
            <img src='./images/X_icon.png' alt='X Icon' className='w-9 h-9 mr-3 mt-[5px] rounded-full'/>
            <img src='./images/linkedin_img.png' alt='LinkedIn' className='w-9 h-9 mr-3 mt-[5px] rounded-full'/>
          </div>
        </div>
        <div className='mb-4 md:mb-0'>
          <h3 className='mb-2 text-xl font-bold'>COMMUNITY</h3>
          <p className='cursor-pointer hover:text-xl mb-2'>Blog</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Community</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Ideas</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Developers</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h3 className='mb-2 text-xl font-bold'>COMPANY</h3>
          <p className='cursor-pointer hover:text-xl mb-2'>About Us</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Team</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Affiliates</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Media</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Contacts & Imprint</p>
        </div>
        <div>
          <h3 className='mb-2 text-xl font-bold'>USEFUL LINKS</h3>
          <p className='cursor-pointer hover:text-xl mb-2'>Product Declarations</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Terms of Use</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Privacy Policy</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Cookie Policy</p>
          <p className='cursor-pointer hover:text-xl mb-2'>Cookie Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
