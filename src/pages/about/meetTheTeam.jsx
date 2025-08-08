import React from 'react';
import TeamSection from "../../components/TeamMembers/TeamMembers";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/Header/Headers.png";
import Team from '../../assets/docs/Team';

const MeetTheTeam = () => {
  const directors = Team.filter((member) => member.criteria === "Director");
  const teachers = Team.filter((member) => member.criteria === "Teacher");

  return (
    <>
      <Navbar />
      <Header text="Meet the Team" img={bgImage} page="policy" />
      
      <section className="pgcontainer">
        {directors.length > 0 && (
          <>
            <h1>Directors</h1>
            <TeamSection teamMembers={directors} />
          </>
        )}

        {teachers.length > 0 && (
          <>
            <h1>Teachers</h1>
            <TeamSection teamMembers={teachers} />
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default MeetTheTeam;
