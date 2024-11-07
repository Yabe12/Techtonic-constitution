import React from "react";
import myImage from './../assets/a.png'; 
import { FaUserShield } from "react-icons/fa";
import icon from './../assets/b.png'
const Home = () => {
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

        {/* preamble Text Section */}
        <div className="p-6 m-4 rounded shadow-md   bg-[#d8cfc4]"> {/* Container with light beige background */}
      <div className="flex items-center p-0 bg-[#f8f4e3]"> {/* Bold beige background */}
        <img 
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E" 
          alt="Icon" 
          className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
        />
        <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">PREAMBLE</h1> {/* Dark brown text for magazine feel */}
      </div>

      <p className="text-gray-700 mt-4">
      TechTonic - Tribe Club was founded in 2024 by fifth-year software students at Debre Berhan University with official university approval. The club aims to educate and mentor students interested in technology, offering training in areas ranging from Python to full-stack development, along with various workshops. In addition to technical education, the club fosters a collaborative environment where members share experiences and knowledge. Membership requires agreeing to this constitution and obtaining approval from the Board of Directors (BOD).
      </p>
         {/*  Mission and Vision*/}
         <div className="p-6 m-4 rounded shadow-md bg-[#f8f4e3]"> {/* Container with light beige background */}
      <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">Mission and Vision</h1> {/* Title */}

      <div className="flex flex-col md:flex-row justify-between"> {/* Flex container for responsive layout */}
        {/* Mission Section */}
        <div className="flex-1 p-4 bg-[#d8cfc4] rounded m-2"> {/* Background for Mission section */}
          <h2 className="text-2xl font-semibold text-[#6b4f3c]">Mission</h2>
          <p className="text-gray-700">
            Our mission is to deliver exceptional services that meet our clients' needs while fostering a culture of innovation and collaboration. We aim to empower businesses with solutions that drive success and growth.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex-1 p-4 bg-[#d8cfc4] rounded m-2"> {/* Background for Vision section */}
          <h2 className="text-2xl font-semibold text-[#6b4f3c]">Vision</h2>
          <p className="text-gray-700">
            Our vision is to be the leading provider of innovative solutions, recognized for our commitment to excellence and our ability to adapt to the evolving needs of our clients. We aspire to create a positive impact in the communities we serve.
          </p>
        </div>
      </div>
    </div>
 
    </div>
   

      </div>
    </div>
  );
};

export default Home;
