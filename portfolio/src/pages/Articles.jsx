import React from "react";

const Articles = () => {
  return (
    <div className="p-6 m-4 rounded shadow-md bg-[#f8f4e3]"> {/* Container for Articles */}
      <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">Articles</h1> {/* Title */}

      <div className="flex flex-col md:flex-row justify-between"> {/* Flex container for responsive layout */}
        {/* Article 1 */}
        <div className="flex-1 p-4 bg-[#d8cfc4] rounded m-2"> {/* Background for Article 1 */}
          <h2 className="text-2xl font-semibold text-[#6b4f3c]">Article Title 1</h2>
          <p className="text-gray-700">
            This is a summary of the first article. It provides insights into the topic discussed and highlights key points.
          </p>
          <button className="mt-4 text-[#6b4f3c] underline">Read More</button>
        </div>

        {/* Article 2 */}
        <div className="flex-1 p-4 bg-[#d8cfc4] rounded m-2"> {/* Background for Article 2 */}
          <h2 className="text-2xl font-semibold text-[#6b4f3c]">Article Title 2</h2>
          <p className="text-gray-700">
            This is a summary of the second article. It offers a different perspective and insights related to the topic.
          </p>
          <button className="mt-4 text-[#6b4f3c] underline">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
