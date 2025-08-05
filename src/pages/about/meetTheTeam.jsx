import React from 'react'
// import TeamSection from "../../components/TeamMembers/TeamMembers";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/Header/Headers.png";
// import Teachers from '../../assets/docs/Teachers';

const meetTheTeam = () => {
  return (
    <>
    <Navbar />
    <div style={{height: '50px'}}></div>

      {/* <Header text="Meet the Team" img={bgImage} page="policy" /> */}
    {/* <section className="pgcontainer">
      <h1>Meet the Team</h1>
      <TeamSection  teamMembers={Teachers}/>
    </section> */}
    <Footer />
    </>
  )
}

export default meetTheTeam