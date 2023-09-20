import React from "react";

const about = () => {
  return (

   
    <div className="container mx-auto py-8">
    {/* // -------------- About me blurb and picture -------------- */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 pr-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Hello, World! It's Grace!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            I'm so cool and you should hire me now.
          </p>
          <p className="text-lg text-gray-600 mt-4">
           I have many skills. Just trust me.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Nowadays, when I'm not coding, I am playing Baldur's Gate 3 or hanging out with my cat, Petra.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          {/* Placeholder Image */}
          <img
            src="https://via.placeholder.com/200" // Replace with your image URL
            alt="Profile"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>


  );
};

export default about;
