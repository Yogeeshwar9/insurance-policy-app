import React from 'react'
import RegisterForm from '../components/RegisterForm'

function Health() {

  return (
    <div>
      <div>
        {/* form input starts */}
        <div className='w-full bg-slate-600 text-white text-center'>
          <RegisterForm/>
        </div>
        {/* form inputends */}
        <div className='w-full flex flex-col'>
          <div className='w-full bg-blue-100 flex flex-row justify-evenly items-center rounded-t-3xl'>
            <div><p>Gradious is one of India's leading digital<br/> insurance marketplace</p></div>
            <div><p>~Source - Google Review Rating</p></div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl text-blue-700'>6.7 crore</h2>
              <p>Registered Consumers</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl text-blue-700'>51</h2>
              <p>Insurance Partners</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl text-blue-700'>3.4 crore</h2>
              <p>Policies Sold</p>
            </div>
          </div>
          <div className='w-full h-[540px] flex flex-col bg-pink-50'>
            <div className='w-full mt-5 flex flex-row justify-evenly'>
              <div>
                <h1 className='mt-9 text-xl text-blue-700'>Why Gradious is the preferred choice for</h1>
                <h1 className='ml-9 text-2xl text-purple-900'>55 Lakh+ people like you</h1>
              </div>
              <div className='w-80 h-52 rounded-3xl mt-5 bg-slate-200'>
                <div className='flex flex-row justify-between mt-3 ml-3'>
                  <div>
                    <h1 className='text-2xl text-blue-950'>Affordable<br/>options</h1>
                  </div>
                  <div>
                    <img className='w-20 h-20 mr-5 rounded-full' src="/images/money.png" alt="X Icon" />
                  </div>
                </div>
                <p className='ml-5'>We help you find health insurance plans with affordable premiums, uncover discounts and monthly payment options provided by our Insurance partners</p>
              </div>
            </div>
            <div className='w-full flex flex-row justify-evenly'>
              <div className='h-60 w-[395px] rounded-3xl mt-5 bg-slate-200'>
                <div  className='flex flex-row justify-between mt-3 ml-3'>
                  <div> <h1 className='text-2xl text-blue-950'> Platinum insurance<br/> partner</h1></div>
                  <div>
                    <img className='w-20 h-20 mr-5 rounded-full' src={`/images/achiv.png`} alt="achiv" />
                  </div>
                </div>
                <p className='ml-3 mr-2'>Gradious is one of the largest partners for most health insurance companies. Our dedicated claims team works with the insurance companies to help you answer insurer queries and track your claim settlement</p>
              </div>
              <div  className='h-48 w-[395px] rounded-3xl mt-5 bg-slate-200' >
                <div className='flex flex-row justify-between mt-3 ml-3'>
                  <div><h1 className='text-2xl ml-2 text-blue-950'>30 minute claim <br/> support*</h1></div>
                  <div>
                    <img className='w-20 h-20 mr-5 rounded-full' src={`/images/time.png`} alt="time" />
                  </div>
                </div>
                <p className='ml-5 mr-3'>Our claim specialists will reach your hospital or home in 30 minutes to support your health insurance claim</p>
              </div>
            </div>
          </div>
          {/* key points on health starts here */}
          <div className='mt-2 ml-28 mr-20'>
            <h2 className='text-2xl text-indigo-800'>Know More about Health Insurance</h2>
            <h4 className='text-2xl text-indigo-800 mt-2'>Health Insurance</h4>
            <ul>
              <li>Health insurance takes care of your medical expenses and ensures that out-of-pocket expenses are curtailed up to the Sum insured</li>
              <li>A health insurance policy ensures that you can avail cashless treatment at a network hospital, typically covering 30 days and 60 days pre and post hospitalization, respectively, in most of the Health Insurance plans.</li>
              <li>
                One can add value to the Base Health Insurance Plan by complementing them with additional
                benefits such as Personal Accident (PA) Cover, Critical Illness (CI) Cover, etc. These products
                are available at a very nominal cost adding benefits, which are not a part of the Base Health 
                Insurance plan. For Example, A PA plan helps by providing coverage for disability, which is typically
                not covered under the basic health insurance plan. An individual needs not go through any waiting period and medical checkups for a PA cover
              </li>
              <li>One can also invest on one of the popular senior citizen health insurance policies and ensure comprehensive security for their elderly parents or secure their old age that often brings along several ailments that require expensive medical treatment</li>
              <li>Almost all the health insurance plans include Coronavirus treatment cover. As per the IRDAI guidelines, insurers have also launched COVID-19 specific best health insurance</li>
              <li>Two special COVID health insurance policies namely, Corona Rakshak policy and Corona Kavach policy also introduced that provide lump sum payment upon diagnosis and also pay for the cost of consumable items like PPE Kits, Masks, Gloves, etc.</li>
            </ul>
            <h4 className='text-2xl text-indigo-800 mt-2'>Benefits of Health Insurance Health Coverage</h4>
            <p>Health Insurance plans have enhanced offerings to cover a wide spectrum of requirements, like a family health plan offers complete cover to all members of a family under a single umbrella.</p>
            <ul>
              <li>Medical Bills: Coverage against medicinal expenses incurred, including pre and post hospitalization</li>
              <li>Pre-existing Diseases: Coverage for any pre-existing disease is provided to you after a certain waiting period.</li>
              <li>Claim Reimbursement: Coverage for expenses incurred for hospitalization due to a medical</li>
            </ul>
            <h4 className='text-2xl text-indigo-800 mt-2'>Key Points to Remember when Comparing Health Insurance</h4>
            <ul>
              <li>Sum Insured Amount</li>
              <li>Policy premium to be paid to avail the coverage benefits</li>
              <li>List of network hospitals and Claim Settlement Ratio</li>
              <li>Sub-limits (if any) and Waiting Period (for PEDs)</li>
              <li>Co-payment clause</li>
            </ul>
          </div>
          {/* key points on health ends here */}
        </div>
      </div>
    </div>
  )
}

export default Health
