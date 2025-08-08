import React from "react";
import "./TeamMembers.css";

import { Link } from "react-router-dom";

const TeamSection = ({ teamMembers }) => {
  const columns = 3; // match your grid-template-columns count
  const totalItems = teamMembers.length;
  const remainder = totalItems % columns;
  const blanks = remainder === 0 ? 0 : columns - remainder;

  return (
    <section className="team-section">
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <Link
            key={member.name + index} // ✅ safer unique key
            to={member.biography === "" ? "#" : `/teacherbio/${member.name}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="team-card">
              {member.image === "" ? (
                <div className="blank-icon"></div>
              ) : (
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                />
              )}
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </Link>
        ))}

        {/* Blank placeholders to center the last row */}
        {/* {[...Array(blanks)].map((_, index) => (
          <div
            className="team-card team-placeholder"
            key={`placeholder-${index}`}
          />
        ))} */}
      </div>
    </section>
  );
};

export default TeamSection;
