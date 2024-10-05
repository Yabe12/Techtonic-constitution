import React from "react";
import myImage from './../assets/a.png'; 
import icon from './../assets/b.png'
const App = () => {
  return (
    <div className="flex  ">
      {/* Container to control the layout */}
      <div className="flex flex-col sm:flex-row  gap-8">
        
        {/* Image Section */}
        <div className="flex-shrink-0 max-w-full">
          <img
            src={myImage}
            alt="3D Picture"
            className="w-full sm:w-[540px] "
          />
        </div>

        {/* About Us Text Section */}
        <div className="p-6 m-4 rounded shadow-md bg-[#f8f4e3]"> {/* Container with light beige background */}
        <div className="flex items-center p-8 bg-[#d8cfc4]"> {/* Bold beige background */}
    <img src="path-to-your-image.jpg" alt="About Us" className="w-1/2 h-auto" />
    <h1 className="text-4xl font-bold mb-4 text-center w-1/2 text-[#6b4f3c]">About Us</h1> {/* Dark brown text for magazine feel */}
</div>


    <p className="text-gray-700">
        Welcome to our company! We specialize in delivering exceptional services to our clients, ensuring their satisfaction and success. Our team is dedicated to providing innovative solutions tailored to your unique needs.
    </p>
</div>


      </div>
    </div>
  );
};

export default App;
