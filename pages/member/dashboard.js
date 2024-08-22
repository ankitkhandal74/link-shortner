// pages/member/dashboard.js

import { getSession, useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Header from '@/component/header';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [viewCount, setViewCount] = useState(0);
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
      .then(() => {
        setCopyMessage('Copied!');

        // Remove the message after 2 seconds
        setTimeout(() => {
          setCopyMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/member/api-key?email=${session.user.email}`);
          const data = await response.json();
          if (response.ok) {
            setName(data.name);
            setEmail(data.email);
            setApiKey(data.apiKey);
            setViewCount(data.viewCount);
          } else {
            console.error(data.error);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchData();
    }
  }, [session]);

  // Calculate the total amount based on viewCount
  const totalAmount = (viewCount * 0.42).toFixed(2); // Fix to 2 decimal places

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in</div>;
  }

  return (
    <div className="">
      <Header className="flex justify-between items-center pr-6 pl-4 py-8 w-full h-12 bg-[#8a1fe2] " />
      <div>
        <h1 className="m-4 text-4xl bg-[#398bf7] rounded-xl p-4 font-medium userf ">Member Dashboard</h1>
        <div className='flex  items-center max-md:flex-col'>
          <div className=' m-4 md:ml-80 h-40 w-64 bg-[#06d79c] text-5xl flex justify-center items-center flex-col '>
            {viewCount}
            <div className='text-2xl p-2 bg-[#ffffff8a] text-black rounded-[14px] w-40 justify-center flex border-[2px] m-4'>Views</div>

          </div>
          <div className=' m-6 md:ml-40 h-40 w-64 bg-[#745af2] text-5xl flex justify-center items-center flex-col'>
            {totalAmount}
            <div className='text-2xl p-2 bg-[#ffffff8a] text-black rounded-[14px] w-40 justify-center flex border-[2px] m-4 '>Moeny</div>
          </div>
        </div>
        <h1 className="m-4 text-4xl bg-[#7239f7] rounded-xl p-4 font-medium userf">User Details</h1>
        <div className="flex  items-center max-md:flex-col">
          <div className=' w-96 h-72 border-[2px] border-gray-700 rounded-xl md:ml-48 pt-10 pl-8 boxs  m-4 flex flex-col '>
            <h1 className='text-5xl font-medium '>Welcome,</h1>
            <h2 className='text-2xl ml-20 '>{session.user.name}</h2>
            <div className='text-2xl font-normal'>
              {session.user.email}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} className=' w- h-72 border-[2px] border-gray-700 rounded-xl md:ml-36 p-5 boxs '>
            <div className='flex p-2 bg-slate-700 border-[2px] border-black rounded-xl'>
              <p style={{ marginRight: '10px' }}>{apiKey}</p>
              <button
                onClick={copyToClipboard}
                title="Copy API Key"
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                📋
              </button>
              {copyMessage && <span className="ml-3 text-green-500">{copyMessage}</span>}
            </div>
          </div>
        </div>

        <div className='flex flex-row-reverse pr-10 p-4 w-full'>
        <button
          onClick={() => signOut()}
          class="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[rgb(228,83,83)] to-[#ff9595] active:scale-95"
        ><span
          class="w-full h-full flex items-center gap-2 px-4 py-3 bg-[#ff0101] text-white rounded-[14px] bg-gradient-to-t from-[#d41a02] to-[#fc4343]  justify-center"
        >
            Logout</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Dashboard;
