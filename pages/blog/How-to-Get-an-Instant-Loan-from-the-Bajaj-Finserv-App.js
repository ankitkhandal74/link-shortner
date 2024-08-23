// pages/blog/How-to-Get-an-Instant-Loan-from-the-Bajaj-Finserv-App.js

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function BlogPage() {
//   const router = useRouter();
//   const { originalUrl } = router.query;

//   useEffect(() => {
//     if (originalUrl) {
//       // Redirect to the original URL if it's provided
//       window.location.href = originalUrl;
//     }
//   }, [originalUrl]);

//   if (!originalUrl) {
//     return <div>Error: Original URL not provided</div>;
//   }

//   return (
//     <div>
//       <h1>Redirecting...</h1>
//     </div>
//   );
// }


// pages/[alias].js

import { useState, useEffect, useRef } from 'react';
import '@/styles/globals.css';
import Header from '@/component/header';
import { useRouter } from 'next/router';
import AdScript1 from '@/component/AdScript1';
import AdScript2 from '@/component/AdScript2';

export default function BlogPage() {
  const [showStartButton, setShowStartButton] = useState(true);
  const [timer, setTimer] = useState(null); // 30-second timer
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showGoButton, setShowGoButton] = useState(false);
  const [scrollButtonTimer, setScrollButtonTimer] = useState(15); // 15-second timer for scroll button
  const [goButtonTimer, setGoButtonTimer] = useState(45); // 45-second timer for the final button
  const scrollButtonRef = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false); // Track if the button was clicked

  const router = useRouter();
  const { originalUrl, apiKey } = router.query;



  // Handle the start button click
  const handleStartButtonClick = () => {
    setShowStartButton(false);
    setTimer(30); // Start the 30-second timer
  };

  // Countdown timer effect (30 seconds)
  useEffect(() => {
    if (timer === null) return;

    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      // Timer finished, show the scroll button and start the 15-second timer
      setShowScrollButton(true);
      setScrollButtonTimer(15); // Start the 15-second timer for scroll button
    }
  }, [timer]);

  // Countdown timer effect (15 seconds) for scroll button
  useEffect(() => {
    if (scrollButtonTimer === null) return;

    if (scrollButtonTimer > 0) {
      const interval = setInterval(() => {
        setScrollButtonTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      // Timer finished, show the scroll button and start the 45-second timer for the final button
      setGoButtonTimer(30); // Start the 45-second timer for the final button
    }
  }, [scrollButtonTimer]);

  // Countdown timer effect (45 seconds) for the final button
  useEffect(() => {
    if (goButtonTimer === null) return;

    if (goButtonTimer > 0) {
      const interval = setInterval(() => {
        setGoButtonTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      // Timer finished, show the final go button
      setShowGoButton(true);
    }
  }, [goButtonTimer]);

  // Effect to scroll to the button
  useEffect(() => {
    if (showScrollButton) {
      // Scroll to the button after the scroll button appears
      const scrollTimeout = setTimeout(() => {
        scrollButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Slight delay for smooth scrolling
      return () => clearTimeout(scrollTimeout);
    }
  }, [showScrollButton]);

  // Increment click counters, apply animation, and redirect
  const handleGoButtonClick = async () => {
    setButtonClicked(true); // Trigger the animation

    try {
      const response = await fetch(`../../api/update-click?originalUrl=${encodeURIComponent(originalUrl)}&api=${encodeURIComponent(apiKey)}`);

      if (!response.ok) {
        console.error('Failed to update click counters');
      }
      const res = await fetch(`../../api/update-view?originalUrl=${encodeURIComponent(originalUrl)}&api=${encodeURIComponent(apiKey)}`);

      if (!res.ok) {
        console.error('Failed to update click counters');
      }

    } catch (error) {
      console.error('Error updating click counters:', error);
    } finally {
      setTimeout(() => {
        window.location.href = originalUrl; // Redirect to original URL after update
      }, 500); // Delay to allow animation to play
    }
  };




  return (
    <div>
      <Header className="flex justify-between items-center pr-6 pl-4 py-8 w-full h-12 bg-[#8a1fe2] " />
      <div className='flex justify-center text-xl font-semibold '>
        <div className=' md:w-3/4 shadow-2xl p-8'>
          <div>
            <h1 className=' text-5xl font-bold'>
              How to Get an Instant Loan from the Bajaj Finserv App
            </h1>
          <div>
               <AdScript1 />
          </div>
	  <div>
               <AdScript1 />
          </div>
	  <div>
               <AdScript1 />
          </div>
          </div>
          {showStartButton && (
            <div className='flex justify-center'>
              <button onClick={handleStartButtonClick} className='text-xl bg-[#0e3aff] rounded-full border-slate-100 border  px-4 py-2 m-4 text-white'>Start Timer</button>
            </div>
	   
          )}

	<div>
          <AdScript2 />
        </div>
	<div>
          <AdScript2 />
        </div>

          {!showStartButton && !showScrollButton && (
            <div className=''>
              <div className='timer flex items-center justify-center m-10'>
              <div class="loader"></div>
              </div>

              <p className='flex justify-center text-xl bg-[#0e3aff] rounded-full border-slate-100 border  px-4 py-2 m-4 text-white'> {timer} seconds</p>
            </div>
	   <div>
          <AdScript2 />
        </div>
          )}

          <div className='my-10'>
            <p className='my-10'>In today's fast-paced world, getting instant access to funds can be crucial for meeting unexpected expenses or fulfilling personal goals. Bajaj Finserv offers a convenient solution through its app, allowing users to apply for personal loans quickly and easily. In this blog, we'll walk you through the steps to get an instant loan from the Bajaj Finserv app, complete with images for guidance.</p>
          </div>

          {showScrollButton && (
            <div className='my-10 text-xl bg-[#0e3aff] rounded-full border-slate-100 border  px-4 py-2  text-white flex justify-center'>
              <button ref={scrollButtonRef}>
                Scroll down to go to the original URL
              </button>
            </div>
          )}

          <div>

            <h1 className='text-3xl font-bold my-10'>Step-by-Step Guide to Applying for an Instant Loan</h1>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 1: Download and Install the Bajaj Finserv App</h1>
              <p className='my-4'>To begin, you'll need to download the Bajaj Finserv app on your smartphone. The app is available for both Android and iOS devices.</p>
              <p>For Android:</p>
              <li>Open the Google Play Store on your phone.</li>
              <li>Search for Bajaj Finserv and install the app.</li>
              <p>For iOS:</p>
              <li>Open the Apple App Store on your phone.</li>
              <li>Search for Bajaj Finserv and download the app.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 2: Register or Log In</h1>
              <p className='my-4'>Once you have installed the app, open it. If you are a new user, you will need to register:</p>
              <li>Tap on Sign Up.</li>
              <li>Enter your mobile number and generate an OTP to verify your number.</li>
              <li>Provide the necessary personal details and set up a secure password.</li>
              <p>If you are an existing user, simply log in using your registered mobile number and password.</p>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 3: Navigate to the Loan Section</h1>
              <p className='my-4'>After logging in, you will land on the home screen of the app. Here’s how to proceed:</p>
              <li>Locate the Loans section on the app's dashboard.</li>
              <li>Tap on Personal Loans to explore the available loan options.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 4: Check Your Eligibility</h1>
              <p className='my-4'>Before applying for a loan, it's essential to check your eligibility. Bajaj Finserv allows you to do this quickly:</p>
              <li>Enter details such as your income, employment type, and existing liabilities.</li>
              <li>The app will show your loan eligibility and the maximum loan amount you can apply for.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 5: Apply for the Loan </h1>
              <p className='my-4'>Once you have checked your eligibility, you can proceed with the application:</p>
              <li>Select the loan amount you wish to apply for within your eligible limit.</li>
              <li>Choose a suitable repayment tenure based on your financial capability.</li>
              <li>Click on Apply Now.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 6: Submit the Necessary Documents </h1>
              <p className='my-4'>Bajaj Finserv requires minimal documentation to process your loan. You can upload these documents directly through the app:</p>
              <li>KYC Documents: Aadhar card, PAN card, or Voter ID.</li>
              <li>Income Proof: Salary slips or bank statements.</li>
              <li>Address Proof: Utility bills or rental agreements.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Step 7: Loan Approval and Disbursal</h1>
              <p className='my-4'>Once you have submitted your application and documents, the Bajaj Finserv team will review them:</p>
              <li>The approval process is quick and usually completed within a few hours.</li>
              <li>Upon approval, the loan amount will be credited directly to your bank account.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Benefits of Using the Bajaj Finserv App for Instant Loans</h1>
              <li>Quick Processing: Get approval and disbursal within a few hours.</li>
              <li>User-Friendly Interface: The app is easy to navigate and use</li>
              <li>Minimal Documentation: Fewer documents are needed, making the process smooth.</li>
              <li>Flexible Repayment Options: Choose a tenure that suits your financial situation.</li>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Tips for a Smooth Loan Application</h1>
              <li>Ensure all your documents are up-to-date and valid.</li>
              <li>Double-check your eligibility criteria before applying.</li>
              <li>Make sure your internet connection is stable while uploading documents.</li>

            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-bold my-4'>Conclusion</h1>
              <p className='my-4'>The Bajaj Finserv app offers a seamless and efficient way to apply for an instant loan. With its easy-to-use interface and quick processing time, you can get access to the funds you need without any hassle. Whether it’s for emergency expenses or fulfilling personal dreams, Bajaj Finserv makes it possible with just a few taps on your smartphone.</p>
              <p>By following the steps outlined above, you can easily navigate the loan application process and meet your financial needs swiftly.</p>
            </div>
          </div>

          <p className='text-xl bg-[#0e3aff] rounded-full border-slate-100 border  px-4 py-2 m-4 text-white flex justify-center'>Redirect button will appear in {scrollButtonTimer} seconds...</p>


          {showGoButton && (
            <div className='flex justify-center'>
              <button
                onClick={handleGoButtonClick}
                className=' cursor-pointer text-xl bg-[#0e3aff] rounded-full border-slate-100 border  px-4 py-2 m-4 text-white flex justify-center'>
                Go to Original URL
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

