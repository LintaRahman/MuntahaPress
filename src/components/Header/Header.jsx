import React from "react";
import PagesFallingVideo from "../../assets/videos/HeaderVideo.mp4";
import PagesTurningVideo from "../../assets/videos/Headers.mp4";
import HeaderVideo from "../../assets/videos/HeaderVideo3.mp4";
import Button from "../Button/Button";
import { Fade } from "react-awesome-reveal";
import Wave from "../../assets/images/wave.png";
import Logo from '../../assets/images/MuntahaWhite.png';
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./Header.css";
import Carousel from "../Carousel/Carousel";
import bgImage from "../../assets/images/MosqueDomeInside.png";
import img1 from "../../assets/images/Header/1.png";
import img2 from "../../assets/images/Header/2.png";
import img3 from "../../assets/images/Header/3.png";
import HeaderImage from "../../assets/images/Header/Headers.png";
// import img2 from "../../assets/images/2.png";
// import img3 from "../../assets/images/Tafseerposter.png";

const waveStyle = {
  transform: "scaleX(-1)",
  bottom: "-30px",
  left: "0",
  width: "100%",
  height: "100px",
  position: "absolute",
};

const slides = [
  { image: PagesTurningVideo, text: "Hifdh" },
  { image: img2, text: "Tafseer" },
  { image: img3, text: "Tafseer" }
];

const Header = ({ text, page, img }) => {
  return (
    <>
      {page == "home" ? (
        <section className="box">
          {/* <img src={HeaderImage} /> */}
          <video src={HeaderVideo} autoPlay playsInline loop muted 
  preload="none"
  // poster={}
  >
    
  </video>
          {/* <Fade direction="up" cascade>
          <img src={Logo} style={{height: '70vh', objectFit: 'contain'}}/>
          </Fade> */}
          {/* <div className="rightContent">
          <Fade direction="right" cascade>
          <h2>An institute for the sacred <br/>Islamic Sciences</h2></Fade>
          <Fade direction="right" cascade>
            <Link to="/about" target="_blank">
              <button className="whitebutton">Read More</button>
            </Link>
          </Fade>
          </div> */}
          <div className="dark-overlay">
          <Fade direction="up" cascade>
          <h1>Lorem ipsum dolor sit </h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur ducimus laborum ab ratione aliquid dolore modi blanditiis fuga pariatur error possimus harum, vero excepturi temporibus dolores nulla maiores numquam?</h2>
          <Link to='/publications'>
            <button className="whitebutton">View Publications</button>
          </Link>
          </Fade>
          {/* <h1>
            <TypeAnimation
              sequence={["An institute for the sacred Islamic sciences, dedicated to the educational and spiritual needs of the Muslim community."]}
              wrapper="h1"
              speed={20}
              cursor="none"
              // repeat={Infinity}
            />
          </h1> */}
          
          
          {/* <Carousel slides={slides} /> */}
          {/* <img src={Wave} style={waveStyle} /> */}
        </div>
        </section>
      ) : page == "policy" ? (
        <section className="smallheader">
          <img src={img}  onError={(e) => (e.target.src = bgImage)}  className="bgimg" alt="image of ${text} header" />
          <h1>{text}</h1>
          {/* <img src={Wave} style={waveStyle} /> */}
        </section>
      ): (
        <section className="mediumheader">
          <img src={img} onError={(e) => (e.target.src = bgImage)} className="bgimg" alt="image of ${text} header" />
          <h1>{text}</h1>
          {/* <img src={Wave} style={waveStyle} /> */}
        </section>
      )}
    </>
  );
};

export default Header;
