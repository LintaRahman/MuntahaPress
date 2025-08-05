import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import bgImage from "../../assets/images/Header/Book.png";
import Button from "../Button/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import "./CourseDetails.css";
import coursesList from "../../assets/docs/Courses/Courses.jsx";

const AnnualCourseDetails = () => {
  const courses = coursesList;
  const { courseId } = useParams();
  console.log(courseId);
  const course = useMemo(() => {
    return courses.find((p) => String(p.id) === courseId);
  }, [courses, courseId]);
  console.log(course);
  const navigate = useNavigate();


  const [gender, setGender] = useState("");

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
        {!course ? (
          <>
            <Header text="Course Not Available" img={bgImage} page="policy" />
            <section className="pgcontainer">
              <div>Course not available</div>
            </section>
          </>
        ) : (
          <>
            {/* <Header img={course.HeaderImage} /> */}
            <section className="relative bg-gray-100">
              <div
                className="absolute inset-0 bg-contain bg-center opacity-10"
                style={{ backgroundImage: `url(${course.BgCalligraphy})` }}
              ></div>
              <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
                <p
                  className="text-sm uppercase tracking-wide text-gray-600 mb-2"
                  style={{ paddingTop: "50px" }}
                >
                  Al-Khayriyyah Institute presents
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                  <span className="block">{course.Title}</span>
                  {/* <span className="block">Tafsir of the</span> */}
                  {/* <span className="text-indigo-800">Qur’an</span> */}
                </h1>
                <p
                  className="mt-2 text-lg max-w-4xl mx-auto py-6"
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  {course.Subheading}
                </p>
                

                {course.Available === "Yes" ? (
                                  <Button
                  text="Register Now!"
                  color="var(--color-primary)"
                  textcolor="white"
                  action={handleRegisterClick}
                  fill="50%"
                  borderColor="var(--color-primary)"
                />
                                ) : ""}
              </div>
            </section>

            {course.CourseDetails ? (
              <section className="short course-details-container">
                <div className="details-box">
                  <h2>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Course Details
                  </h2>
                  {course.CourseDetails}
                  <p>
                    <strong>Fees:</strong> {course.CardInfo.Fees}
                  </p>
                  {/* <h2>
                    <FontAwesomeIcon icon={faLaptop} className="mr-2" />
                    Course Format
                  </h2>
                  {course.CourseFormat} */}
                </div>
                <div className="details-box">
                  <h2>
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    Class Options
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
            )}
          </>
        )}
      </>
    </>
  );
};

export default AnnualCourseDetails;
