import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Header from "../../../components/Header/Header.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
// import FetchCSVData from "../../FetchCSVData.js";
// import bgImage from "../../../assets/images/MosqueDomeInside.png";
import bgImage from "../../../assets/images/Header/Book.png";

// import Timeline from "../../../components/Timeline/Timeline.jsx";
// import { Card } from "@mui/material";
// import CardSlider from "../../../components/CardSlider/CardSlider.jsx";
// import Button from "../../../components/Button/Button.jsx";
// import Loader from "../../../components/Loader/Loader.jsx";
import TabGroup from "../../../components/TabGroups/TabGroups.jsx";
// import CourseDropdowns from "../../../components/courseDropdown/courseDropdown.jsx";
// // import Hifdh from "../../../assets/images/Header/CourseHeaders/1.gif";
// import HifdhLogo from "../../../assets/images/Courses/HifdhulQuranBlue.png";
// import Qaaidah from "../../../assets/images/Courses/Qaaidah.gif";
// import bg from "../../../assets/images/Courses/1.png";
// import HifdhArabic from "../../../assets/images/Courses/HifdhulQuranBlue.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faClock, faLaptop } from '@fortawesome/free-solid-svg-icons';

// import { Fade } from "react-awesome-reveal";

import "./coursePage.css";
import coursesList from "../../../assets/docs/Courses/Courses.jsx";
import AnnualCourseDetails from "../../../components/CourseDetails/AnnualCourseDetails.jsx"
import ShortCourseDetails from "../../../components/CourseDetails/ShortCourseDetails.jsx"
import teachersBiographies from "../../../assets/docs/Teachers.jsx"
import TeamSection from "../../../components/TeamMembers/TeamMembers.jsx";

const CoursePage = () => {
  console.log("Rendering CoursePage");
  // const coursesArray = FetchCSVData();
  // const courses = Object.values(coursesArray);
  const courses = coursesList;
  // console.log(courses);
  const { courseId } = useParams();
  console.log(courseId);
  const course = useMemo(() => {
    return courses.find((p) => String(p.id) === courseId);
  }, [courses, courseId]);
  // const course = courses.find((p) => String(p.id) === courseId);
  console.log(course);
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay for page load
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Set loading to false after content has "loaded"
  //   }, 7000); // Adjust this duration based on your needs

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

  const categories = course
    ? [
        { Label: "Overview", Content: course.CourseContent.Overview },
        ...(course.CourseContent.Structure          ? [{ Label: "Structure", Content: course.CourseContent.Structure }]          : []),
        ...(course.CourseContent.LearningOutcomes          ? [{ Label: "Learning Outcomes", Content: course.CourseContent.LearningOutcomes }]          : []),
        ...(course.CourseContent.EntryRequirements          ? [{ Label: "Entry Requirements", Content: course.CourseContent.EntryRequirements }]          : []),
        ...(course.CourseContent.TermDates          ? [{ Label: "Term Dates", Content: course.CourseContent.TermDates }]          : []),
        ...(course.CourseContent.Fees ? [{ Label: "Fees", Content: course.CourseContent.Fees }] : []),
        // ...(course.CourseContent.Teachers          ? [{ Label: "Teachers", Content: course.CourseContent.Teachers }]          : []),
...(course.CourseContent.Teachers
  ? [{
      Label: "Teachers",
      Content: (
        <div className="course-teacher-section">
          {course.CourseContent.Teachers.length > 1
            ? course.CourseContent.Teachers.map((teacherName, index) => {
                const teacher = teachersBiographies.find(t => t.name === teacherName);
                if (!teacher) return null;
                return (
                  <Link
                    key={teacher.name + index}
                    to={teacher.biography === "" ? "#" : `/teacherbio/${teacher.name}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="team-card">
                      {teacher.image === "" ? (
                        <div className="blank-icon"></div>
                      ) : (
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="team-img"
                        />
                      )}
                      <h3 className="team-name">{teacher.name}</h3>
                      <p className="team-role">{teacher.role}</p>
                    </div>
                  </Link>
                );
              })
            : course.CourseContent.Teachers.map((teacherName) => {
                const teacher = teachersBiographies.find(t => t.name === teacherName);
                if (!teacher) return null;
                return (
                  <div key={teacher.name} className="mb-4"> 
                    <h3 className="font-bold text-lg mb-2">{teacher.name}</h3>
                    <p>{teacher.biography}</p>
                  </div>
                );
              })}
        </div>
      )
    }]
  : []),

        ...(course.CourseContent.FAQs          ? [{ Label: "FAQs", Content: course.CourseContent.FAQs }]          : []),
        
      ]
    : [];

  const [gender, setGender] = useState("");
  const [timing, setTiming] = useState("");
  const [date, setDate] = useState("");
  // const [duration, setDuration] = useState(course.Duration);
  const genderOptions = course?.Timings ? Object.keys(course.Timings) : [];
  const handleRegisterClick = () => {
    navigate(`/register?course=${encodeURIComponent(course.Title)}`);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    console.log("Gender:");
    console.log(gender);
    console.log(course.Sessions[gender].Timings);
    setTiming("");
  };

  return (
    <>
      {/* <Link to={`/policies/${course.id}`}>{course.title}</Link> */}
      {/* {loading ? (
        <Loader /> // Show loader when the app is in loading state
      ) : ( */}
      <>
        <Navbar />
        {!course ? (
          <>
            <Header text="Course Not Available" img={bgImage} page="policy" />
            <section className="pgcontainer">
              <div style={{minHeight: '60vh'}}>Course not available</div>
            </section>
          </>
        ) : (
          <>
            {course.Type === "Annual Courses" || course.Type === "Summer Courses"  ? 
              <AnnualCourseDetails course={course} />
             : <ShortCourseDetails course={course}/>}
            {categories.length > 0 && (
              <section className="coursesContainer">
                <TabGroup categories={categories} />
              </section>
            )}
            
          </>
        )}
        <Footer />
      </>
    </>
  );
};

export default CoursePage;


           





      
                  {/* <h2>{course.Type === "Annual"? "Annual Programme | ": course.Type === "Short Course"? "Short Course | " : ""} {course.CardInfo.CardMedium}</h2> */}

            {/* <section className="two-columns">
              {course.Type != "Annual" ? (
                <>
                  <Fade direction="left" casecade>
                    <img style={{}} src={course.CPImage} />
                  </Fade>{" "}
                </>
              ) : (
                ""
              )}
              
        }
       
              <div className="col75">
                <Fade direction="left" casecade>
                  <h1>{course.Title}</h1>
                </Fade>
                <Fade direction="left" casecade>
                  <p>{course.Subheading}</p>
                  <Button
                    text="Register Now!"
                    color="var(--color-primary)"
                    textcolor="white"
                    action={handleRegisterClick}
                    fill="50%"
                    borderColor="var(--color-primary)"
                  />
                </Fade>
              </div>
            </section> */}

            {/* {course.CourseDetails ? (
              <section className="course-details-container">
                <div className="details-box"><h2>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Course Details
                  </h2>
                  {course.CourseDetails}
  <p><strong>Fees:</strong> {course.CardInfo.Fees}</p>
                  
                  </div>
                <div className="details-box">
                  <h2>
    <FontAwesomeIcon icon={faClock} className="mr-2" />
    Class Timings
  </h2>
  {course.CourseTimings}
  </div>
                <div className="details-box">
                  <h2>
    <FontAwesomeIcon icon={faLaptop} className="mr-2" />
    Course Format
  </h2>
  {course.CourseFormat}
  </div>
              </section>
            ) : (
              ""
            )} */}
{
  /* <section className="coursesContainer"> 
                <div className="courseSidebar">
                  {course.CourseDetails} */
}
{
  /* <h2> Teacher</h2> */
}
{
  /* <p>{course.Teacher}</p>
                   <h2>Course Dates</h2> 
                  <p>{course.Dates}</p>
                  <h2>Course Dates</h2>
<p>{Array.isArray(course.Dates) ? course.Dates.join(" / ") : course.Dates}</p>
                  <p>{course.Duration}</p>
                  <h2>Time</h2>
                  <p>{course.Time}</p>
                  
                  <h2>Medium</h2>
                  <p>{course.Medium}</p>
                  <h2>Course Fees</h2>
                  <p>{course.Fees}</p>
                  <h2>
  <span onClick={handleRegisterClick} style={{ cursor: "pointer", textDecoration: "underline" }}>
    {course.Available === "Yes" ?  'Register Now!' : 'Join Waiting List ->'}
  </span>
</h2> */
}

{
  /* </div>
                <div className="courseContent"> 
                
                 {categories.length > 0 && <TabGroup categories={categories} />} */
}

{
  /* <CourseDropdowns
  gender={gender}
  setGender={setGender}
  timing={timing}
  setTiming={setTiming}
  date={date}
  setDate={setDate}
  duration={duration}
  setDuration={setDuration}
  course={course}
/> */
}

{
  /* <h2>Course Description</h2> */
}
{
  /* {course.Description != null
                    ? course.Description.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))
                    : ""} */
}
{
  /* <Button
                  text="Register Now!"
                  color="white"
                  textcolor= "var(--color-primary)"
                  action={handleRegisterClick}
                  fill="50%"
                  borderColor="var(--color-primary)"
                />*/
}
{
  /* </div>  */
}
{
  /* </section> */
}
