import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
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

const ShortCourseDetails = () => {
  const courses = coursesList;
  const { courseId } = useParams();
  const course = useMemo(() => {
    return courses.find((p) => String(p.id) === courseId);
  }, [courses, courseId]);
  const navigate = useNavigate();


  const handleRegisterClick = () => {
    navigate(`/register?course=${encodeURIComponent(course.Title)}`);
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
            <section className="course-header-wrapper">
              <div style={{ height: "5rem" }}></div>
              <div className="course-header-bg"></div>

              <div className="course-header-container">
                <div className="course-header-image-wrapper">
                  <img
                    src={course.CPImage ? course.CPImage : bgImage}
                    alt="Course header"
                    className="course-header-image"
                  />

                  {/* <img      src={course.CardInfo.Calligraphy}    alt="Calligraphy"      className="calligraphy-bg"    /> */}
                </div>

                <div className="course-header-content">
                  
                  {/* <Fade direction="up" cascade> */}
                  <div className="course-header-tagline">
                    <div className="underline" />

                    <span>{course.CardInfo?.CardMedium}</span>
                  </div>
                  {/* </Fade>
                  
                  <Fade direction="right" cascade> */}
                  <h1 className="course-header-title">{course.Title}</h1>
                  <p className="course-header-subheading">
                    {course.Subheading}
                  </p>
                  {/* </Fade>
                  <Fade direction="up" cascade> */}
                  

                  {course.Available === "Yes" ? (
                                  <Button
                  text="Register Now!"
                  color="var(--color-primary)"
                  textcolor="white"
                  action={handleRegisterClick}
                  fill="50%"
                  borderColor="var(--color-primary)"
                />
                                ) : 
                                                  <Button text="Unavailable" color="grey" textcolor="white" fill="50%" />}
                  {/* </Fade> */}
                </div>
              </div>
            </section>


            {course.CourseDetails ? (
              <section className="short course-details-container">
                <div className="details-box">
                  <h2>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />{" "}
                    Course Details
                  </h2>
                  {course.CourseDetails}
                  <p>
                    <strong>Fees:</strong> {course.CardInfo.Fees}
                  </p>
                </div>
                <div className="details-box">
                  <h2>
                    <FontAwesomeIcon icon={faClock} className="mr-2" />{" "}
                    Class Options
                  </h2>
                  {course.CourseTimings}
                </div>
                <div className="details-box">
                  <h2>
                    <FontAwesomeIcon icon={faLaptop} className="mr-2" />{" "}
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

export default ShortCourseDetails;
