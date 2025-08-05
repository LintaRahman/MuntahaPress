
import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/MosqueDomeInside.png";
import { useParams } from "react-router-dom";
import communityProjects from "../../assets/docs/Projects";
import { Fade } from "react-awesome-reveal";
import Button from "../Button/Button.jsx";
import courseLists from "../../assets/docs/Courses/QuranicCourses.jsx";
import "./courseList.css";
import HifdhCalligraphy from "../../assets/images/Courses/ArabicCalligraphy/HifdhulQuran.png"

export const CourseList = ({ filteredCourses }) => {
  const Courses = filteredCourses || JSON.parse(localStorage.getItem("courses"));

  return (
    <section className="pgcontainer">
      {Courses && Courses.length > 0 ? (
        <div className="content-section-cards">
          {Courses.map((course) => (
            // <CourseCard course={course}/>
            <div className="course-card-wrapper" key={course.id}>
              <Link
                to={`/coursespage/${course.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="course-card">
                  <div style={{ position: "relative" }}>
  <img
    src={course.CardImage || bgImage}
    alt={"Image for " + course.Title}
    className="course-card-image"
    onError={(e) => (e.target.src = bgImage)}
  />
  {/* <div className="arabic-text" style={{backgroundColor: course.CardInfo.CalligraphyBg}}>
    <img src={course.CardInfo.Calligraphy} alt="" />
  </div> */}
</div>

                  <div className="course-card-body">
                    <span className="course-badge">
                      {course.CardInfo.CardMedium}{' | '}
                      {course.CardInfo.Audience}
                      </span> 
                    <h3 className="course-title">{course.Title}</h3>
                    <p className="course-instructor">{course.CardInfo.Audience}</p>
                    <p className="course-description">
                    {course.Subheading.length > 90 
    ? course.Subheading.slice(0, 90) + '...' 
    : course.Subheading}
                    </p>
                  </div>
                  <div className="course-card-footer">
                    <div className="footer-item">{course.CardInfo.CardMedium}</div>
                    <div className="footer-item">{course.CardInfo.CardDuration}</div>
                    <div className="footer-item">{course.CardInfo.Fees}</div>
                  </div>

                </div>
                
              </Link>
              <div className="course-button">
                {course.Available === "Yes" ? (
                  <Link
                to={`/coursespage/${course.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                  <Button
                    text="Sign Up"
                    color="var(--color-primary)"
                    textcolor="white"
                    borderColor="var(--color-primary)"
                    fill="100%"
                  /></Link>
                ) : (
                  <Button text="Unavailable" color="grey" textcolor="white" fill="100%" />
                )}
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        <div style={{ padding: "2rem", minHeight: "300px", color: "black" }}>
          No courses available.
        </div>
      )}
    </section>
  );
};

export default CourseList;

{/* <img
                    src={course.CardImage || bgImage}
                    alt={"Image for" + course.Title}
                    className="course-card-image"
                    onError={(e) => (e.target.src = bgImage)}
                  />
                  <div className="arabic-text" style={{backgroundColor: "var(--color-primary)"}}>
                    <img src={HifdhCalligraphy} alt="" />
                  </div> */}

                    {/* <span className="course-badge"> */}
                      {/* {course.CardInfo.CardMedium}{' | '} */}
                      {/* {course.CardInfo.Audience}*/}
                      {/* </span>  */}