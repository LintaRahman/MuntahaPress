import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import Testimonials from "../../components/Testimonials/Testimonials";
import { TypeAnimation } from "react-type-animation";
import testimonials from "../../assets/docs/Testimonials.jsx";
import Logo from "../../assets/images/Muntaha.png";
import "./home.css";
import bgImage from "../../assets/images/Header/Headers.png"
// import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel.jsx";
import AnnualCalligraphy from "../../assets/images/HomePage/AnnualBlue.png"
import ShortCalligraphy from "../../assets/images/HomePage/ShortBlue.png"
import SummerCalligraphy from "../../assets/images/HomePage/SummerBlue.png"
import QuranCalligraphy from "../../assets/images/HomePage/QuranProgrammeBlue.png"
import HadithCalligraphy from "../../assets/images/HomePage/Hadith.png"
import HistoryCalligraphy from "../../assets/images/HomePage/HistoryBlue.png"
import FiqhCalligraphy from "../../assets/images/HomePage/FiqhBlue.png"
import ArabicCalligraphy from "../../assets/images/HomePage/ArabicBlue.png"
import logo from "../../assets/images/Muntaha.png"
import { Link } from "react-router-dom";
const home = () => {
  const courseBoxes = [
  { to: "/courses?type=annual", img: AnnualCalligraphy, label: "Annual Programmes" },
  { to: "/courses?type=short", img: ShortCalligraphy, label: "Short Courses" },
  { to: "/courses?type=summer", img: SummerCalligraphy, label: "Summer Courses" },
  { to: "/courses?category=Quran", img: QuranCalligraphy, label: "Qur'anic Programmes" },
  { to: "/courses?category=Hadith", img: HadithCalligraphy, label: "Hadith Programmes" },
  { to: "/courses?category=fiqh", img: FiqhCalligraphy, label: "Fiqh & Aqeedah" },
  { to: "/courses?category=IS", img: HistoryCalligraphy, label: "Islamic History" },
  { to: "/courses?category=Arabic", img: ArabicCalligraphy, label: "Arabic" },
];
  return (
    <>
      <Navbar />
      <Header page="home" />
      <section className="aboutcontainer">
        <h1>
            Lorem ipsum dolor sit amet consectetur
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum tempore cupiditate ducimus, officiis ipsum dolor laboriosam amet nihil est repellat beatae aspernatur voluptas ea necessitatibus soluta, laudantium, autem culpa?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit minus nobis maiores dolores ex ipsum consequatur, excepturi laborum animi, ipsa, similique deleniti dicta sit facilis eaque provident hic! Esse, excepturi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut libero quos alias. Aliquam nemo repellat rem quidem harum unde accusantium cum quasi. Delectus tempore iure asperiores sapiente sequi magni.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat odit, nihil totam autem illo labore hic doloremque excepturi optio placeat. Tenetur recusandae dolor quia ipsam consectetur earum culpa reprehenderit nemo?
            </p>
      </section>
       {/* <div className="watermark-background"> */}
        {/* <section className="aboutcontainer">
         
          <h1>
             Empowering Muslims Through Knowledge and Faith
            </h1>
            <p>
Muntaha Press Institute is a centre of sacred learning, dedicated to serving the educational and spiritual needs of the Muslim community. Rooted in the timeless tradition of classical Islamic scholarship, our aim is to cultivate a deep love for the Qur’an, Hadith, Arabic language, and the core sciences that support a meaningful understanding of Islam.
</p>

          <p>We are committed to nurturing adult student learners of all ages, in an environment of sincerity, discipline, and respect. Whether one seeks to memorise the Qur’an, strengthen their Tajweed, or obtain an Ijāzah in Qur’anic recitation, Hadith, Fiqh, or other Islamic sciences, we offer structured programmes taught by experienced and qualified teachers.

Our vision is to empower a generation of believers who carry the Qur’an with precision, live its message with humility, and share its light with confidence. At Muntaha Press, sacred knowledge is not simply taught—it is preserved, practiced, and passed on, heart to heart.</p> */}
                  
                   {/* <Fade direction="up" cascade> */}
            {/* <h2 style={{color: "var(--color-primary)", textAlign: 'center', paddingTop: '30px'}}>
            <span style={{fontSize: "1.5rem"}}>
إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ


<br/>“Indeed, it is We who sent down the Qur’an, and indeed, We will be its guardian.”
(Surah Al-Ḥijr, 15:9)
</span>
          </h2> */}
          {/* </Fade> */}
      {/* </div> */}
      {/* </section> */}
      {/* </div> */}

       <section className="background-container " style={{}}>
        <h1>Our Publishing Houses</h1>
        <div className="col3">
        <Link to='/publications?filter=MuntahaPress' >
              <div className="col">
              
                <img src={logo} alt="" />
                <h3>Muntaha Press</h3>
              </div>
          </Link>
          <Link to='/publications?filter=MuntahaPress' >
              <div className="col">
              
                <img src={logo} alt="" />
                <h3>Sidra Series</h3>
              </div>
          </Link>

        {/* {courseBoxes.map((course, index) => (
          <Link to={course.to} key={index}>
              <div className="col">
              
                <img src={course.img} alt="" />
                <h3>{course.label}</h3>
              </div>
          </Link>
        ))} */}
      </div>
      </section> 
      {/* <TestimonialCarousel testimonialsData={testimonials} /> */}
      {/* <SubscribeForm /> */}
      
      <Footer />
    </>
  );
};

export default home;
  // FetchCSVData();
  // const courses = courseLists;
  // localStorage.setItem("courses", JSON.stringify(csvData));
  // console.log(JSON.parse(localStorage.getItem("courses")));
  // const courses = JSON.parse(localStorage.getItem("courses")) ? csvData : [];
  // console.log(courses);
  // const filteredCourses = courses.slice(0, 3);
  // console.log(filteredCourses);

  // const navigate = useNavigate();
  // const handleRegisterClick = () => {
  //   navigate(`/courses/type=all`);
  // };


      {/* <section className="columns2">
        <Fade direction="left" casecade>
          <img src={Logo} />
        </Fade>
        <div className="col75">
          <Fade direction="up" casecade>
            <h1>
              // An institute for the sacred Islamic sciences, dedicated to the
              // educational and spiritual needs of the Muslim community.
            </h1>
          </Fade>
        </div>
      </section> */}

      {/* <section className="pgcontainer">
        <div className="two-columns">
          <div className="col25">
          <Fade direction="left" casecade>
            <img src={Logo} />
          </Fade></div>
        
        <div className="col75">
          <Fade direction="left" cascade>
            <h1>
              Welcome to Muntaha Press Institute!
            </h1>
            <p>An institute where sacred knowledge is nurtured and passed from heart to heart.
<br/>
Muntaha Press Institute is a centre of sacred learning, dedicated to serving the educational and spiritual needs of the Muslim community. Rooted in the timeless tradition of classical Islamic scholarship, our aim is to cultivate a deep love for the Qur’an, Hadith, Arabic language, and the core sciences that support a meaningful understanding of Islam.
// {/* <br/>
// We are committed to nurturing adult student learners of all ages, in an environment of sincerity, discipline, and respect. Whether one seeks to memorise the Qur’an, strengthen their Tajweed, or obtain an Ijāzah in Qur’anic recitation, Hadith, Fiqh, or other Islamic sciences, we offer structured programmes taught by experienced and qualified teachers.
// <br/>
// Our vision is to empower a generation of believers who carry the Qur’an with precision, live its message with humility, and share its light with confidence. At Muntaha Press, sacred knowledge is not simply taught—it is preserved, practiced, and passed on, heart to heart. 
</p>
          </Fade>
        </div>
        </div>
        </section> */}