import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import MeetTheTeam from "./pages/about/meetTheTeam";
import Contact from "./pages/contact/contact";
// import Policies from "./pages/policies/policies";
// import Register from "./pages/register/register_jotform";
import Courses from "./pages/courses/courses";
import PolicyPage from "./pages/policies/policyPage";
// import ProjectPage from "./pages/publications/projectPage";
import CoursePage from './pages/courses/coursespage/coursePage';
import TeacherBio from './pages/teachers/teacherBio';
// import ComingSoon from "./pages/ComingSoon/ComingSoon";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // Import the ScrollToTop component
// import Loader from "./components/Loader/Loader";
import Blogs from "./pages/blog/blogs";
import BlogPage from "./pages/blog/blogPages/blogPage";
import Podcasts from "./pages/podcasts/podcasts";
import Publications from "./pages/publications/publications";

// import Studentlife from "./pages/studentlife/studentlife";
// import SupportUs from "./pages/supportus/supportus";
// import Volunteer from "./pages/supportus/Volunteer/volunteer";
// import VolunteerForm from "./pages/supportus/Volunteer/VolunteerForm";
// import Sponsor from "./pages/supportus/sponsor";

// import WhatsOn from "./pages/whatson/whatson";
// import Events from "./pages/whatson/Events";
// import Retreats from "./pages/whatson/Retreats";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay for page load
    
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Set loading to false after content has "loaded"
  //   }, 7000); // Adjust this duration based on your needs

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

  return (
    <BrowserRouter>
      {/* {loading ? (
        <Loader /> // Show loader when the app is in loading state
      ) : ( */}
        <>
      {/* <ScrollToTop /> Add ScrollToTop here */}
      <Routes>
        {/* <Route path="/" element={<ComingSoon />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/meet_the_team" element={<MeetTheTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications/:filter?" element={<Publications />} />
        <Route path="/articles" element={<Blogs />} />
        <Route path="/articles/:blogId" element={<BlogPage />} />
        <Route path="/podcasts" element={<Podcasts />} />
        {/* <Route path="/courses/:filterType/:subCategory?" element={<Courses />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/coursespage/:courseId" element={<CoursePage />} />
        <Route path="/teacherbio/:teacherName" element={<TeacherBio />} />
        <Route path="/policies/:policyId" element={<PolicyPage />} />
        {/* <Route path="/studentlife" element={<Studentlife />} /> */}
        {/* <Route path="/supportus" element={<SupportUs />} /> */}
        {/* <Route path="/volunteer" element={<Volunteer />} /> */}
        {/* <Route path="/volunteer_form" element={<VolunteerForm />} /> */}
        {/* <Route path="/sponsor" element={<Sponsor />} /> */}
        {/* <Route path="/whatson" element={<WhatsOn />} /> */}
        {/* <Route path="/retreats" element={<Retreats />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/publications/:projectId" element={<ProjectPage />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
    {/* )} */}
    </BrowserRouter>
  );
};


export default App;
