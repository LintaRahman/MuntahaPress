import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/Header/Headers.png";
import "./about.css";
// import logo from "../../assets/images/alkhayriyyahsquarelogo.png";
// import WaveFrame from "../../components/WaveFrame/WaveFrame";
// import BottomWave from "../../components/WaveFrame/BottomWave";
// import TopWave from "../../components/WaveFrame/TopWave";
// import { Fade } from "react-awesome-reveal";
// import Carousel from "../../components/Carousel/Carousel";
// import SquareCarousel from "../../components/Carousel/SquareCarousel";

// import { Card } from "@mui/material";
// import CardSlider from "../../components/CardSlider/CardSlider";
// const AyahStyle = {
//   fontSize: "1.5rem",
//   color: "var(--color-primary)",
//   // background: "var(--blue-color)",
//   // borderRadius: "30px 0 30px 0",
//   // padding: "1rem",
// };
const about = () => {
const aboutSections = [
  {
    title: "Our Foundation and Mission",
    content: [
      `Muntaha Press Institute, established in 2019, is dedicated to enriching the lives of Muslims by providing comprehensive education in Islamic faith through Da’wah, structured courses, and inspiring lectures. Our mission is to make the Arabic language and Islamic sciences accessible to students from diverse backgrounds, fostering a clear and practical understanding of the Deen.`,
      `We aim to cultivate both intellectual and spiritual growth, empowering individuals to embody their faith in daily life and contribute positively to society. By grounding our teachings in the Qur’an and Sunnah, we strive to equip Muslims with the knowledge and confidence to address contemporary challenges, drawing upon the timeless wisdom of Islamic tradition.`,
    ],
  },
  {
    title: "Our Vision",
    content: [
      `At Muntaha Press Institute, we believe that a well-rounded Islamic education goes beyond personal learning—it creates individuals who are grounded in their faith yet engaged with the world around them. Our vision is to cultivate Muslims who not only deepen their connection with Allah but who also become beacons of guidance, wisdom, and compassion within their families, communities, and societies.`,
      `We aim to nurture graduates who are confident in upholding Islamic values, articulate in presenting Islamic perspectives, and proactive in addressing social, moral, and ethical challenges faced by Muslims today. By equipping students with both classical knowledge and practical application, we seek to bridge the gap between tradition and modern life, enabling students to navigate their roles as believers, leaders, and ambassadors of Islam. We envision a community where every Muslim is intellectually equipped and spiritually anchored, ready to contribute meaningfully to society and embody the principles of Islam in all aspects of life.`,
    ],
  },
  {
    title: "Our Courses",
    content: [<>Our courses are thoughtfully designed for adults aged 18 and above,
          recognising the unique needs of this demographic. We welcome both men
          and women into a learning environment that is respectful, structured,
          and spiritually nurturing.
          <br />
          <br />
          We offer a variety of programs to suit different schedules and
          learning goals, including:
          <ul className="list-disc pl-5">
            <li>Part-time modular courses for students seeking flexibility,
              allowing them to complete subjects in focused blocks while
              balancing other commitments.
            </li>

            <li>Annual structured courses offering a continuous, comprehensive
              study pathway for those committed to steady, long-term progress in
              their Islamic education.
            </li>
          </ul>
          Our curriculum ranges from foundational studies in Arabic and Tajweed
          to advanced classes in Qur'anic sciences, Tafsir, and Islamic
          jurisprudence.
          <br />
          <br />
          One of our flagship offerings is the Hifdh Programme, tailored for
          serious students committed to memorising the Qur’an over a period of
          2–3 years, under the guidance of experienced and highly qualified
          teachers. This program requires dedication and is supported by a
          strong framework of supervision, mentorship, and spiritual
          encouragement.</>],
  },
  {
    title: "Community Learning Opportunities",
    content: [
      `At Muntaha Press Institute, we are committed to fostering a sense of community rooted in shared learning and mutual support. Beyond formal classes, we run weekly Halaqas and open gatherings designed to build bonds among students, encourage open discussions, and create a safe space for asking questions and exploring faith together.`,
      `These community sessions go beyond academic study—they aim to strengthen spiritual connections, promote brotherhood and sisterhood, and provide a platform for collective reflection. Whether tackling contemporary issues, discussing practical aspects of worship, or reflecting on the Seerah, our community learning opportunities are inclusive, engaging, and transformative, encouraging students to grow as individuals while contributing to the collective spiritual upliftment of the ummah.`,
    ],
  },
  {
    title: "Our Learning Environment",
    content: [
      `We are committed to creating an inclusive and supportive learning environment, both onsite and online, ensuring that geographical barriers do not hinder anyone’s pursuit of Islamic knowledge. Our dedicated instructors bring a wealth of experience and a passion for teaching, guiding students through their educational journeys.`,
    ],
  },
  {
    title: "Our Vision for the Future",
    content: [
      `Looking ahead, Muntaha Press Institute envisions a future where access to authentic Islamic knowledge is within reach of every Muslim, regardless of background, geography, or circumstance. We aspire to expand our reach by developing more online and onsite programs, creating specialised pathways for deeper studies, and forming partnerships with scholars and institutions globally.`,
      `Our long-term goal is to contribute to the revival of knowledge-centered Muslim communities—places where learning is not confined to classrooms but is woven into the everyday life of individuals and families, nurturing generations who are faithful, informed, and proactive.`,
      `We hope to inspire students who will go on to teach, lead, and serve, becoming ambassadors of the Qur’an and Sunnah in their spheres of influence. Through this, we aim to play a small yet meaningful role in the collective revival of Islamic values, ethics, and scholarship in the modern world.`,
    ],
  },
];
  return (
    <>
      <Navbar />
      <Header text="About Us" img={bgImage} page="policy" />
          <section className="aboutcontainer ">
      {aboutSections.map((section, index) => (<>
        {/* // <Fade key={index} direction="up" cascade  triggerOnce> */}
          {/* <div className="about-section"> */}
            <h1>{section.title}</h1>
            {section.content.map((para, i) => (
        <React.Fragment key={i}>
          <p>{para}</p>
          {i < section.content.length - 1 && <br />}
        </React.Fragment>
      ))}
          {/* </div> */}
        {/* // </Fade> */}
        </>
      ))}
    </section>
      <Footer />
    </>
  );
};

export default about;
