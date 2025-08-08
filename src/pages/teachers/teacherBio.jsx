import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TeachersList from "../../assets/docs/Team"
import { useNavigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import allCourses from '../../assets/docs/Courses/Courses'
import CourseList from '../../components/courseList/courseList'



const teacherBio = () => {
  const teachers = TeachersList;
  const { teacherName } = useParams();
  console.log(teacherName);
  const teacherDetails = useMemo(() => {
    return teachers.find((p) => String(p.name) === teacherName);
  }, [teachers, teacherName]);
  console.log(teacherDetails);
  const navigate = useNavigate();

  //   const filteredCourses = useMemo(() => {
  //   return allCourses.filter(
  //     (course) => course.teacher === teacherDetails.name
  //   );
  // }, [teacherDetails.name]);

  const filteredCourses = useMemo(() => {
  if (!teacherDetails?.name) return [];

  return allCourses.filter((course) => {
    const courseTeachers = course?.CourseContent?.Teachers;

    if (!Array.isArray(courseTeachers)) return false;

    return courseTeachers.some(
      (teacher) =>
        teacher?.toLowerCase().trim() ===
        teacherDetails.name.toLowerCase().trim()
    );
  });
}, [teacherDetails]);

  return (
    <>
    <Navbar />
    <div style={{height: '50px'}}></div>
    <section className="instructor-profile">
                       <div className="instructor-image">
                {teacherDetails.image == ""? "" : <img src={teacherDetails.image} alt={teacherDetails.name} />}
                <div className="instructor-text">
                  <h2>{teacherDetails.name}</h2>
                  <h3>{teacherDetails.role}</h3>
                </div>
              </div>
              {teacherDetails.biography}
            </section>

          {filteredCourses.length > 0 ? <>
              <h1 style={{padding: "2rem", color:' var(--color-primary)', fontSize: '2rem', fontWeight:'bold', textAlign: 'center'}}>Courses led by {teacherDetails.name}</h1>
              
              <CourseList filteredCourses={filteredCourses} />
            </>
            : ""}
    <Footer />
    </>
  )
}

export default teacherBio