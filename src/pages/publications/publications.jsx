import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";
import bgImage from "../../assets/images/Header/Headers.png";
import PublicationsList from "../../assets/docs/Publications/Publications.jsx";
import MuntahaPress from "../../assets/docs/Publications/MuntahaPress.jsx";
import SidraSeries from "../../assets/docs/Publications/SidraSeries.jsx";
import "./publications.css";
import PublicationsCard from "../../components/PublicationsCard/PublicationsCard.jsx";

const Publications = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const urlFilter = searchParams.get("filter"); // Read ?filter= from URL

  const [selectedPublisher, setSelectedPublisher] = useState("");

  // Sync filter from URL on mount or change
  useEffect(() => {
    if (urlFilter === "MuntahaPress" || urlFilter === "SidraSeries") {
      setSelectedPublisher(urlFilter);
    } else {
      setSelectedPublisher(""); // Show all books
    }
  }, [urlFilter]);

  const handleSelectPublisher = (publisher) => {
    const newPublisher = selectedPublisher === publisher ? "" : publisher;
    setSelectedPublisher(newPublisher);

    // Update the URL param accordingly
    if (newPublisher) {
      navigate(`?filter=${newPublisher}`, { replace: true });
    } else {
      navigate(location.pathname, { replace: true });
    }
  };

  // Filter logic
  let displayedPublications = PublicationsList;
  if (selectedPublisher === "MuntahaPress") {
    displayedPublications = MuntahaPress;
  } else if (selectedPublisher === "SidraSeries") {
    displayedPublications = SidraSeries;
  }

  return (
    <>
      <Navbar />
      <Header text="Publications" img={bgImage} page="policy" />

      {/* Filter buttons */}
      <div className="filter-container">
        <div className="filter">
          {[
            {
              label: "All Books",
              isActive: selectedPublisher === "",
              onClick: () => handleSelectPublisher(""),
            },
            {
              label: "Muntaha Press",
              isActive: selectedPublisher === "MuntahaPress",
              onClick: () => handleSelectPublisher("MuntahaPress"),
            },
            {
              label: "Sidra Series",
              isActive: selectedPublisher === "SidraSeries",
              onClick: () => handleSelectPublisher("SidraSeries"),
            },
          ].map((btn, index) => (
            <button
              key={index}
              className={`Courses-filter-button ${btn.isActive ? "active" : ""}`}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Publications list */}
      <section className="">
        {displayedPublications && displayedPublications.length > 0 ? (
          <div className="publications-list">
            {displayedPublications.map((book, i) => (
              <PublicationsCard key={i} book={book} />
            ))}
          </div>
        ) : (
          <section className="pgcontainer"><p>Books coming soon...</p></section>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Publications;
