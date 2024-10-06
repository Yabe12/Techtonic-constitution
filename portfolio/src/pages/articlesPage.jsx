import React from "react";
import Article from "../component/article/articleComponent"; // Import the Article component

const Articles = () => {
  return (
    <div className="p-6 m-4 rounded shadow-md bg-[#fff]">
      {/* Main Container for Articles */}
      <h1 className="text-4xl font-bold  text-center  text-[#6b4f3c]">
        Articles
      </h1>{" "}
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Flex container for responsive layout */}
        {/* Left Side: Article Section */}
        <div className="flex-1 m-2 p-6 bg-[#f0e6dc] shadow-md">
        <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md">
          {" "}
          {/* Container for Article 1 */}
          <div className="flex items-center p-0 bg-[#f8f4e3]">
            {/* Bold beige background */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E"
              alt="Icon"
              className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
            />
            <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">
              Article I - Purpose
            </h1>
          </div>
          {/* Title for Article Section 1 */}
          <div className="flex flex-col">
            {/* Flex container for articles within the section */}
            <Article
              subtitle="Subarticle 1.1: Objectives"
              summary={`The purpose of TechTonic - Tribe Club is to:
- Provide technical education and promote collaborative learning among students.
- Prepare students for hackathons and group challenges to showcase their skills.
- Foster an environment for students to work effectively in teams and apply their knowledge.`}
            />

            <Article
              subtitle="Subarticle 1.2: Student Requirements"
              summary={`To become a member and receive certification, students must:
-Attend all classes organized by the club.
-Complete all assigned projects.
-Actively participate in club activities and meet all membership requirements.`}
            />
            <Article
  subtitle="Subarticle 1.3: Registration Types"
  summary={`There are three types of registration available in TechTonic - Tribe Club:
* Full-Stack Registration: This program begins with HTML and covers the entire MERN stack (MongoDB, Express, React, and Node.js). Requirements: Open to students of DBU with a demonstrated interest in learning full-stack development. Frequency: This registration is available once a year.
* Short Workshop Registration: These workshops focus on specific topics or technologies and are designed to provide intensive, hands-on learning experiences. Requirements: Students must register separately for each workshop they wish to attend. Frequency: Registrations open for each individual workshop as they are scheduled.
* React-Only Registration: This program is for students who wish to continue their learning journey, starting specifically from React. Requirements: To register, students must demonstrate their skills by completing projects in HTML, CSS, and JavaScript and passing an assessment exam. Frequency: Registration is available to students who meet the prerequisites and wish to advance from foundational skills to React.`}
/>
          </div>
        </div>



        <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md">
          {" "}
          {/* Container for Article 1 */}
          <div className="flex items-center p-0 bg-[#f8f4e3]">
            {/* Bold beige background */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E"
              alt="Icon"
              className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
            />
            <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">
            Article II: Membership
            </h1>
          </div>
          {/* Title for Article Section 1 */}
          <div className="flex flex-col">
            {/* Flex container for articles within the section */}
            <Article
              subtitle="Subarticle 2.1: Eligibility"
              summary={`Membership is granted to students actively participating in the club’s programs and demonstrating a commitment to learning. Candidates must show strong technical skills, positive social interactions, complete all projects, attend all classes and activities, and meet certification requirements. Selection is conducted by the BOD.`}
            />

            <Article
              subtitle="Subarticle 2.2: Selection Process"
              summary={`
-Nomination: Potential members are nominated by the BOD and presented at a meeting.
-Approval: A two-thirds (2/3) majority vote of the BOD members is required for acceptance.
-Finalization: The President must sign off on the membership approval.`}
            />
           
          </div>
        </div>




        <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md">
          {" "}
          {/* Container for Article 1 */}
          <div className="flex items-center p-0 bg-[#f8f4e3]">
            {/* Bold beige background */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E"
              alt="Icon"
              className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
            />
            <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">
            Article III -  Governance Structure
            </h1>
          </div>
          {/* Title for Article Section 1 */}
          <div className="flex flex-col">
            {/* Flex container for articles within the section */}
            <Article
              subtitle="Subarticle 3.1: President"
              summary={`
                -Oversees the overall operations of the club..
-Leads meetings and sets agendas.
-Represents the club in external matters.
-Manages strategic decisions and emergency meetings.
`}
            />

            <Article
              subtitle="Subarticle 3.2: Vice President"
              summary={`-Supports the President in managing the club’s activities.
                -Steps in when the President is unavailable.
                -Coordinates projects and addresses issues.
                -Takes on special assignments as directed by the President.

`}
            />
             <Article
              subtitle="Subarticle 3.3: Secretary
"
              summary={`-Records and maintains minutes of meetings.
                -Manages documentation and internal communications.
                -Organizes the club’s calendar and schedules activities.
               

`}
            />
             <Article
              subtitle="Subarticle 3.4:  Educational Lead
"
              summary={`-Designs and manages the educational curriculum.
                -Coordinates workshops, seminars, and training sessions.
                -Provides mentorship and ensures learning objectives are met.
               

`}
            />
              <Article
              subtitle="Subarticle 3.5: Social Media Lead
"
              summary={`-Promotes events, achievements, and activities through social media.
                -Develops promotional materials and ensures timely updates.
                -Coordinates with other leads to highlight educational programs
               

`}
            />
               <Article
              subtitle="Subarticle 3.6: Networking and Human Resources Lead
"
              summary={`-Builds and maintains relationships with external partners and alumni.
                -Manages member recruitment and ensures a positive environment.
                -Organizes networking events and addresses member issues
               

`}
            />
             <Article
              subtitle="Subarticle 3.7: General Members
"
              summary={`-Actively participate in meetings and events.
                -Complete assigned tasks and report progress.
                -Contribute to teaching and mentoring students.
                -Collaborate on projects and uphold the club’s values.
               

`}
            />
            <Article
              subtitle="Subarticle 3.8: Finance 
"
              summary={`-Plans the budget for events and manages all financial aspects. Controls and manages all income and expenditures of the club. Oversees financial transactions, ensuring proper tracking of money in and out of the club.
                
               

`}
            />
           
          </div>
        </div>





        <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md">
          {" "}
          {/* Container for Article 1 */}
          <div className="flex items-center p-0 bg-[#f8f4e3]">
            {/* Bold beige background */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E"
              alt="Icon"
              className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
            />
            <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">
            Article  IV:Meetings and Procedures
            </h1>
          </div>
          {/* Title for Article Section 1 */}
          <div className="flex flex-col">
            {/* Flex container for articles within the section */}
            <Article
              subtitle="Subarticle 4.1: Regular Meetings"
              summary={`-Regular meetings are held every Monday at 1:30 PM for two hours.
- Attendance is mandatory for all members.
-Members must notify the President or Secretary at least two hours in advance if unable to attend.
`}
            />

            <Article
              subtitle="Subarticle 4.2: Emergency Meetings"
              summary={`-The President has the authority to call emergency meetings for urgent matters.
-Members must be informed at least two hours before the emergency meeting.
-Attendance is mandatory unless a valid reason is provided to the President or Secretary.
`}
            />
            <Article
  subtitle="Subarticle 4.3: Attendance and Reporting"
  summary={`-All members are required to actively participate in meetings and report on their assigned tasks.
  -Failure to complete tasks without valid reasons may result in a review of membership status.`}
/>
          </div>
        </div>
        </div>

        {/* Separator */}
        <div className="border-l-2 border-[#6b4f3c] mx-4"></div> {/* Vertical line in the middle */}
        <div className="flex-1 m-2 p-6 bg-[#f0e6dc] shadow-md">
        <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md">
          {" "}
          {/* Container for Article 1 */}
          <div className="flex items-center p-0 bg-[#f8f4e3]">
            {/* Bold beige background */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E"
              alt="Icon"
              className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
            />
            <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">
            Article V: Responsibilities and Roles
            </h1>
          </div>
          {/* Title for Article Section 1 */}
          <div className="flex flex-col">
            {/* Flex container for articles within the section */}
            <Article
              subtitle="Subarticle 5.1: President"
              summary={`Role and Responsibilities:
-Leadership of Club Operations:- The President is responsible for overseeing the day-to-day operations of the club. This includes managing the execution of the club’s mission and ensuring that all activities align with the club’s objectives. The President provides direction and support to other officers and members to ensure that the club functions smoothly and efficiently.
- Chairing Meetings:- The President leads all club meetings, including regular, special, and emergency meetings. This involves setting the meeting agenda, guiding discussions, and ensuring that meetings are productive and focused. The President facilitates communication between members and ensures that all voices are heard while maintaining order during meetings.
- Strategic Guidance:- As the primary leader, the President is responsible for setting the strategic direction of the club. This includes developing long-term goals, setting priorities, and making decisions that affect the overall course of the club. The President works closely with other executive members to plan and implement strategies that help the club achieve its objectives.
-Representation in External Matters:- The President acts as the official representative of the club in dealings with external entities such as sponsors, partners, other clubs, and the broader community. This includes attending external meetings, networking on behalf of the club, and maintaining relationships that can benefit the club.
-Decision-Making Authority:- The President plays a key role in making strategic decisions that impact the club, such as approving major initiatives, resolving conflicts, and handling emergency situations. When immediate decisions are required, the President has the authority to act in the best interest of the club, with accountability to the Board of Directors and the club’s members.
-Mentorship and Support:- The President provides mentorship and support to other club officers and members. This includes offering guidance, feedback, and encouragement to help others grow in their roles and contribute effectively to the club.
-Crisis Management:- In times of crisis or unexpected challenges, the President is responsible for leading the club through problem-solving processes, convening emergency meetings if necessary, and making decisions to navigate difficult situations`}
            />

            <Article
              subtitle="Subarticle 5.2: Vice President"
              summary={`Role and Responsibilities::
-Support to the President: The Vice President serves as the primary support for the President in all club activities. This includes assisting in planning meetings, coordinating events, and helping to implement the club’s strategic initiatives. The Vice President ensures that the President has the necessary support to fulfill their duties effectively.
-Leading Meetings: In the event that the President is unavailable for a meeting, the Vice President takes on the responsibility of leading the meeting. This involves setting the agenda, facilitating discussions, and ensuring that the meeting objectives are met. The Vice President must be prepared to step into this role at any time, ensuring continuity in leadership and decision-making within the club.
-Management of Club Labs: The Vice President is responsible for opening the lab when there are classes or workshops scheduled. This includes ensuring that all necessary materials and equipment are ready and available for use. The Vice President oversees the lab environment, making sure it is conducive to learning and collaboration among members.
-Representation: In the absence of the President, the Vice President may also represent the club at external events, meetings, or conferences. This responsibility includes communicating the club’s mission and activities to outside audiences, as well as building relationships with other organizations and stakeholders.
`}
            />
             <Article
              subtitle="Subarticle 5.3: Secretary"
              summary={`Role and Responsibilities::
-Documentation Management: The Secretary is responsible for maintaining accurate and organized records of all club activities. This includes documenting meeting minutes, agendas, and important decisions made during meetings. The Secretary ensures that these documents are easily accessible to club members and are stored in a secure location for future reference.
-Scheduling Meetings and Events: One of the key responsibilities of the Secretary is to coordinate the scheduling of club meetings and events

`}
            />
             <Article
              subtitle="Subarticle 5.4: Educational Lead"
              summary={`Role and Responsibilities::
-Educational Roadmap Development: The Educational Lead is responsible for creating and maintaining a comprehensive educational roadmap for the TechTonic - Tribe Club. This roadmap outlines the courses, workshops, and training sessions offered by the club
-Class Oversight and Evaluation: The Educational Lead monitors all classes to ensure they are being conducted effectively. This includes checking on the delivery of classes, assessing teaching methods, and ensuring that instructors are engaging with students appropriately. The Educational Lead collects feedback from students to continuously improve class quality
-Material Preparation: The Educational Lead ensures that all necessary materials for classes are prepared and available. This includes coordinating with instructors to develop lesson plans, handouts, and resources required for effective teaching. The Educational Lead verifies that materials are relevant, up-to-date, and suitable for the students’ skill levels.
-Reporting and Communication: The Educational Lead communicates regularly with club leadership and members about educational programs, upcoming classes, and any changes to the schedule or curriculum. They may also provide reports on the success and challenges of educational initiatives.


`}
            />
            <Article
              subtitle="Subarticle 5.5: Social Media Lead"
              summary={`Role and Responsibilities::
-Promotion of Club Activities: The Social Media Lead is responsible for promoting all club activities, events, and achievements across various social media platforms. This includes creating engaging posts that highlight the club's initiatives, workshops, hackathons, and other events to attract both current and prospective members.
-Content Creation: The Social Media Lead creates and curates content for social media, including written posts, images, and videos. They are tasked with designing visually appealing graphics and utilizing photography to showcase club events, projects, and student participation. This content aims to capture the essence of the club's activities and engage the audience effectively.
-Event Promotion: For each event organized by the club, the Social Media Lead is responsible for creating promotional materials and posts. This includes crafting event descriptions, sharing relevant details (such as date, time, location, and registration information), and using eye-catching visuals to generate interest and encourage attendance.
-Photography and Visuals: The Social Media Lead ensures that all posts include high-quality pictures from club events, classes, and activities. They may organize photo sessions during events or coordinate with members to capture and share moments that reflect the club’s vibrancy and engagement.
-Regular Updates: The Social Media Lead is tasked with providing regular updates on the club’s activities, ensuring that followers are informed about upcoming events, deadlines, and any news related to the club. They maintain a consistent posting schedule to keep the club’s presence active and engaging on social media.
-Engagement and Interaction: The Social Media Lead actively engages with followers, responding to comments, messages, and inquiries. They foster a sense of community by encouraging discussions, sharing member achievements, and highlighting contributions from club participants.

`}
            />
              <Article
              subtitle="Subarticle 5.6: Networking and Human Resources Lead"
              summary={`Role and Responsibilities::
-Feedback Collection: The Networking and Human Resources Lead is responsible for collecting feedback from club members regarding their experiences within the club. This includes conducting surveys, organizing focus groups, and facilitating informal discussions to gather insights about member satisfaction, program effectiveness, and areas for improvement. The feedback collected is crucial for understanding the needs and preferences of members and for enhancing the overall club experience.
-Member Recruitment: This lead manages the recruitment of new members to the TechTonic - Tribe Club. They develop and implement recruitment strategies to attract students interested in joining the club, including organizing outreach efforts, informational sessions, and campus events to raise awareness about the club’s offerings and benefits.

`}
            />
             <Article
              subtitle="
Subarticle 7.7: General Members
"
              summary={`Role and Responsibilities::
-Participate actively in club activities and contribute to mentoring and collaborative learning.

`}
            />
          </div>
          <div className="flex-1 rounded m-2 p-6 bg-[#f8f4e3] shadow-md">
          {" "}
          {/* Container for Article 1 */}
          <div className="flex items-center p-0 bg-[#f8f4e3]">
            {/* Bold beige background */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23231f20%22%20d%3D%22M44.53%2022.04a2.13177%202.13177%200%20003.02%200l.72-.71a2.1711%202.1711%200%20000-3.03L37.58%207.62a2.18039%202.18039%200%2000-3.02%200l-.72.71a2.171%202.171%200%20000%203.03zM26.7%2039.87a2.15577%202.15577%200%20003.03%200l.71-.72005a2.13178%202.13178%200%20000-3.02L19.76%2025.44a2.15481%202.15481%200%2000-3.03%200l-.71.72a2.12457%202.12457%200%20000%203.02zM43.57%2027.12a3.189%203.189%200%2000-1.23-2.44l-9.45%209.44a3.00764%203.00764%200%20004.5.37993L42.72%2029.17A2.88236%202.88236%200%200043.57%2027.12zM30.66%2034.94L43.34%2022.26s-8.21039-8.20794-9.71-9.71L20.95%2025.23C21.31064%2025.57551%2030.66%2034.94%2030.66%2034.94zM58.49%2045.4L43.19%2030.11l-4.86%204.87L53.62%2050.27A3.4438%203.4438%200%200058.49%2045.4zM10.81%2050.8H25.96c2.66358-.03036%202.67-4.15838-.00007-4.19H10.81C8.14635%2046.64036%208.13988%2050.76835%2010.81%2050.8zM29.26%2051.8H7.51c-2.66076.03028-2.67165%204.15108.00007%204.19H29.26C31.92209%2055.95305%2031.93034%2051.83224%2029.26%2051.8z%22%2F%3E%3C%2Fsvg%3E"
              alt="Icon"
              className="w-1/6 h-auto mr-4" // Adjust width and margin as needed
            />
            <h1 className="text-4xl font-bold mb-4 text-center w-5/6 text-[#6b4f3c]">
            Article VI: Amendments
            </h1>
          </div>
          {/* Title for Article Section 1 */}
          <div className="flex flex-col">
            {/* Flex container for articles within the section */}
            <Article
              subtitle="Subarticle 6.1: Amendment Proposal"
              summary={`-Any member may propose an amendment to the constitution.
-Proposals must be submitted to the BOD for review and consideration.
.`}
            />

            <Article
              subtitle="
Subarticle 6.2: Voting and Approval
"
              summary={`
-All proposed amendments are voted on by the BOD.
-An amendment is adopted if it receives a two-thirds (2/3) majority vote from the BOD members.
`}
            />
             <Article
              subtitle="
Subarticle 6.3: Selection Criteria
"
              summary={`
-Any roles affected by amendments are filled based on experience and skills.
-Appointments for new roles or changes require a two-thirds (2/3) majority vote.`}
            />
             <Article
              subtitle="
Subarticle 6.4: Implementation
"
              summary={`
-Once approved, amendments are integrated into the constitution and take effect immediately.
-Updated versions of the constitution are distributed to all members.`}
            />
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
