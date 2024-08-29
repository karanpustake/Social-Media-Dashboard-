import React, { useEffect, useState } from 'react'
// import fetchData from './fetchData';

function Mainbarfollowers() {
    
  //   const [details, setDetails] = useState(null);
  // useEffect(() => {
  //   fetchData()
  //     .then(fetchedDetails => {
  //       setDetails(fetchedDetails);
  //     })
  //     .catch(err => {
  //       setError(err);
  //     });
  // }, []);
//   if (error) {
//     return <div>Error fetching data: {error.message}</div>;
//   }

  // if (!details) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="bg-white rounded-md w-72 bars h-[25vh]  ">
            <div className=' text-black'>
                <div className=' mx-[14px] pt-1'>
                    <p className='text-2xl font-lightbold mt-2 text-center'>Instagram Followers</p>
                    {/* <h1 className='text-5xl font-semibold mt-3 text-center'>{details.Followers}</h1> */}
                    <h1 className='text-5xl font-semibold mt-3 text-center'>4,  554
                    </h1>
                </div>
                <div className=' flex mt-4 justify-center items-center gap-1'>
                    <h1 className=' text-xl'>1%</h1>
                    
                    <i className='bx bxs-up-arrow-circle text-xl'></i>
        
                </div>

            </div>
        </div>
  )
}

export default Mainbarfollowers