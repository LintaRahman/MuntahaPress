// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
// import bgImage from "../../assets/images/Header/Headers.png";
// import { useParams } from "react-router-dom";
// import communitypublications from "../../assets/docs/publications"
// import { Fade } from "react-awesome-reveal";
// import './publications.css';

// const publications = () => {
//   return (
//     <>
//     <section className="pgcontainer">
//         <Fade direction="up" casecade>
//           <h1>Our Courses</h1>
//         </Fade>
//       <div className="content-section">
//         {communitypublications.map(programme => (
          
//            <Link to={`/publications/${programme.id}`} key={programme.id}>
//           <div className="overlayCard">
//             <img src={programme.imageSrc} alt={programme.title} />
//             <h2>{programme.title}</h2>
//             {/* <div className="overlay">
//               <div className="text">{programme.title}</div>
//             </div> */}
//           </div>
//           </Link>
//         ))}
//       </div>
//       </section>
//     </>
//   );
// };

// export default publications;
