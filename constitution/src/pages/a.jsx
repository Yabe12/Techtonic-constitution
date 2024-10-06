import React from "react";

const Articles = () => {
  return (
    <div className="p-6 m-4 rounded shadow-md bg-[#f8f4e3]"> {/* Main Container for Articles */}
      <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">Articles</h1> {/* Title */}

      <div className="flex flex-col md:flex-row justify-between"> {/* Flex container for responsive layout */}
        
     
        {/* Second Article Section */}
        <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md"> {/* Container for Article 2 */}
          <h2 className="text-2xl font-semibold text-[#6b4f3c]">Articles 2</h2> {/* Title for Article Section 2 */}
          <div className="flex flex-col"> {/* Flex container for articles within the section */}
            {/* Article 1 */}
            <div className="p-4 bg-[#d8cfc4] rounded mb-4"> {/* Background for Article 1 */}
              <h3 className="text-2xl font-semibold text-[#6b4f3c]">subArticle Title 1</h3>
              <p className="text-gray-700">
                This is a summary of the first article. It provides insights into the topic discussed and highlights key points.
              </p>
              <button className="mt-4 text-[#6b4f3c] underline">Read More</button>
            </div>

            {/* Article 2 */}
            <div className="p-4 bg-[#d8cfc4] rounded"> {/* Background for Article 2 */}
              <h3 className="text-2xl font-semibold text-[#6b4f3c]">subArticle Title 2</h3>
              <p className="text-gray-700">
                This is a summary of the second article. It offers a different perspective and insights related to the topic.
              </p>
              <button className="mt-4 text-[#6b4f3c] underline">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
