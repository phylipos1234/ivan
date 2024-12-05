import React from 'react';

const Whitepage = () => {
  return (
   <div className=' bg-white h-screen w-screen p-[10%]'>
     <div className="flex gap-6 border-t-2 border-t-blue-500 border-b-2 border-b-gray-500 py-10 ">
    <div>
      <p className="text-9xl text-black">01</p>
    </div>
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-500">Step 1</p>
      <h1 className="text-4xl text-black font-semibold">Configure your flight and follow up</h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.quae tempore sed corrupti sit architecto distinctio sunt obcaecati dolorem mollitia nam.
      </p>
      <button className="bg-black w-64 text-white rounded-lg px-6 py-1 mt-4 transition-colors hover:bg-gray-800">
        Choose Destination
      </button>
    </div>
  </div>
   </div>
  );
};

export default Whitepage;