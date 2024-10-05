import React from "react";
import myImage from './../assets/c.png'; 

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      {/* Container to control the layout */}
      <div className="flex flex-col sm:flex-row items-center gap-8">
        
        {/* Image Section */}
        <div className="flex-shrink-0 max-w-full">
          <img
            src={myImage}
            alt="3D Picture"
            className="w-full sm:w-[503px] h-auto"
          />
        </div>

        {/* About Us Text Section */}
        <div className="k " >
          <h1 className="">About Us</h1>
          <p className="">
            Welcome to our company! We specialize in delivering exceptional services to our clients, ensuring their satisfaction and success. Our team is dedicated to providing innovative solutions tailored to your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
