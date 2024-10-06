import React from "react";

const Article = ({ subtitle, summary }) => {
  // Split the summary into an array using newline characters and filter out empty strings
  const summaryItems = summary.split('\n').filter(item => item.trim() !== '');

  return (
    <div className="p-4 bg-[#d8cfc4] rounded mb-4"> {/* Background for Article */}
      <h3 className="text-2xl font-semibold text-[#6b4f3c] flex items-center">
        <img 
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2050%2050%22%20viewBox%3D%220%200%2050%2050%22%3E%3Cpath%20d%3D%22M36.1%2C45.5c0-0.9-1-1.7-2.7-2.3c-0.9%2C2.1-5%2C2.8-8.5%2C2.8c-3.5%2C0-7.6-0.8-8.5-2.8c-1.7%2C0.6-2.6%2C1.4-2.6%2C2.3%0D%0A%09%09c0%2C1.9%2C5%2C3.5%2C11.1%2C3.5C31.1%2C49%2C36.1%2C47.4%2C36.1%2C45.5z%22%2F%3E%3Cpath%20d%3D%22M8%2C33.1c5.1%2C0%2C7.4-4%2C6.9-5L8.8%2C14.4c3.7%2C1.6%2C10.3-0.1%2C14.5-3.1c0%2C0%2C0.1%2C0%2C0.1%2C0V40c-3.2%2C0.2-5.7%2C1.1-5.7%2C2.2%0D%0A%09%09c0%2C1.3%2C3.2%2C2.3%2C7.2%2C2.3c4%2C0%2C7.2-1%2C7.2-2.3c0-1.1-2.4-2-5.7-2.2V11.3c0%2C0%2C0%2C0%2C0.1%2C0c4.2%2C3%2C10.8%2C4.7%2C14.5%2C3.1l-5.9%2C13.6c0%2C0%2C0%2C0%2C0%2C0c-0.4%2C1%2C1.8%2C5%2C7%2C5c5.1%2C0%2C7.3-4%2C6.9-5c0%2C0%2C0%2C0%2C0%2C0l-6.5-14.6c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0c0-0.2-0.3-0.4-0.6-0.3%0D%0A%09%09c-5.4%2C2.6-8.5-3.3-15.4-5.1V6.6C27.4%2C6.1%2C28%2C5.1%2C28%2C4c0-1.7-1.4-3-3-3s-3%2C1.4-3%2C3c0%2C1.1%2C0.6%2C2.1%2C1.5%2C2.6V8c-2.5%2C0.6-5.8%2C2.5-7.9%2C4%0D%0A%09%09c-3.3%2C2.3-5.9%2C1.8-7.4%2C1.1c-0.3-0.1-0.5%2C0.1-0.6%2C0.3c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0%2C0%2C0L1.1%2C28.1c0%2C0%2C0%2C0%2C0%2C0C0.7%2C29.1%2C2.9%2C33.1%2C8%2C33.1z%0D%0A%09%09%20M47.6%2C27.6l-5.1%2C0L42.5%2C16L47.6%2C27.6z%20M41.5%2C27.6l-5.1%2C0L41.5%2C16L41.5%2C27.6z%20M13.6%2C27.6l-5.1%2C0L8.4%2C16L13.6%2C27.6z%20M7.4%2C16%0D%0A%09%09l0.1%2C11.6l-5.1%2C0L7.4%2C16z%22%2F%3E%3C%2Fsvg%3E" 
          alt="Icon" 
          className="w-4 h-4 mr-2" // Adjust the size here
        />
        {subtitle}
      </h3>
      <ul className="list-inside text-gray-700 mt-2 pl-0"> {/* Remove list style dot */}
        {summaryItems.map((item, index) => (
          <li key={index} className="mb-1">{item.trim()}</li> // Display each summary item as a list item
        ))}
      </ul>
    </div>
  );
};

export default Article;
