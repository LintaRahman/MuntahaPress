import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer";
import CourseList from "../../components/courseList/courseList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import courseslists from "../../assets/docs/Courses/Courses.jsx";
import QuranicCourses from "../../assets/docs/Courses/QuranicCourses.jsx";
import FiqhCourses from "../../assets/docs/Courses/FiqhCourses.jsx";
import HadithCourses from "../../assets/docs/Courses/HadithCourses.jsx";
import HistoryCourses from "../../assets/docs/Courses/HistoryCourses.jsx";
import ArabicCourses from "../../assets/docs/Courses/ArabicCourses.jsx";
import bgImage from "../../assets/images/Header/Headers.png"
import "./publications.css";

const Publications = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const typeParam = searchParams.get("type") || "";
  console.log(typeParam);
  const categoryParam = searchParams.get("category") || "";

  const subCriteriaMap = {
    Quran: QuranicCourses,
    Hadith: HadithCourses,
    "fiqh": FiqhCourses,
    IS: HistoryCourses,
    Arabic: ArabicCourses,
  };

  const allCourses = courseslists;

  // State for selected filters
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [selectedAudience, setSelectedAudience] = useState([]);
  const [showAvailableCourses, setShowAvailableCourses] = useState(false);
  const [showFreeCourses, setShowFreeCourses] = useState(false);
  const [selectedSubCriteria, setSelectedSubCriteria] = useState("");
  const [manualSubCategory, setManualSubCategory] = useState(false);

  // Sync state from query params on mount & on URL change
  useEffect(() => {
    // Map typeParam to criteria filters
    if (typeParam === "short") {
      setSelectedCriteria(["Short Courses"]);
    } else if (typeParam === "annual") {
      setSelectedCriteria(["Annual Courses"]);
    } else if (typeParam === "summer") {
      setSelectedCriteria(["Summer Courses"]);
    } else if (typeParam === "all" || typeParam === "") {
      setSelectedCriteria([]);
    } else {
      // If typeParam is something else or invalid, clear criteria
      setSelectedCriteria([]);
    }

    // Set subcriteria if valid categoryParam else clear
    if (categoryParam && subCriteriaMap[categoryParam]) {
      setSelectedSubCriteria(categoryParam);
    } else {
      setSelectedSubCriteria("");
    }

    setManualSubCategory(false);
  }, [typeParam, categoryParam]);

  // Helper to normalize audience
  const normalizeAudience = (audience) => {
    if (!audience) return "";
    const lower = audience.toLowerCase();
    if (lower.includes("brother") && lower.includes("sister"))
      return "Brothers and Sisters";
    if (lower.includes("brother")) return "Brothers Only";
    if (lower.includes("sister")) return "Sisters Only";
    return audience;
  };

  // Update URL helper for criteria
  const updateTypeInUrl = (criteriaArr) => {
    const params = new URLSearchParams(location.search);
    if (criteriaArr.length === 0) {
      params.delete("type");
    } else {
      // For simplicity use first criteria and map back to typeParam string
      // Assuming one selection only for typeParam for now
      const c = criteriaArr[0];
      let val = "";
      if (c === "Short Course") val = "short";
      else if (c === "Annual") val = "annual";
      else if (c === "Summer Course") val = "summer";
      else val = "";

      if (val) params.set("type", val);
      else params.delete("type");
    }
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  // Update URL helper for subcategory
  const updateCategoryInUrl = (category) => {
    const params = new URLSearchParams(location.search);
    if (!category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  // Handlers for criteria filter
  const handleSelectCriteria = (filter) => {
    let newCriteria;
    if (selectedCriteria.includes(filter)) {
      newCriteria = selectedCriteria.filter((item) => item !== filter);
    } else {
      newCriteria = [...selectedCriteria, filter];
    }
    setSelectedCriteria(newCriteria);
    updateTypeInUrl(newCriteria);

    // When selecting criteria, clear subcriteria manual override and URL param
    if (selectedSubCriteria) {
      // setSelectedSubCriteria("");
      // updateCategoryInUrl("");
      setManualSubCategory(false);
    }
  };

  // Handler for subcriteria filter buttons
  const handleSelectSubCriteria = (sub) => {
    const newSub = selectedSubCriteria === sub ? "" : sub;
    setSelectedSubCriteria(newSub);
    setManualSubCategory(true);
    updateCategoryInUrl(newSub);

    // When subcriteria is selected manually, clear criteria filter and URL param
    if (selectedCriteria.length > 0) {
      setSelectedCriteria([]);
      updateTypeInUrl([]);
    }
  };

  // Audience handlers
  const handleSelectAudience = (filter) => {
    setSelectedAudience((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  // Toggles
  const handleToggleFreeCourses = () => {
    setShowFreeCourses((prev) => !prev);
  };

  const handleToggleAvailableCourses = () => {
    setShowAvailableCourses((prev) => !prev);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCriteria([]);
    setSelectedAudience([]);
    setShowFreeCourses(false);
    setShowAvailableCourses(false);
    setSelectedSubCriteria("");
    setManualSubCategory(false);
    navigate(location.pathname, { replace: true }); // Clear all query params
  };

  // Filtering courses logic
  const filteredCourses = allCourses.filter((course) => {
    const matchesSubCriteria =
      !selectedSubCriteria ||
      (course.SubCriteria &&
        course.SubCriteria.replace(/\s/g, "")
          .toLowerCase()
          .includes(selectedSubCriteria.toLowerCase()));

    const matchesCriteria = manualSubCategory
      ? true
      : selectedCriteria.length === 0 ||
        selectedCriteria.includes(course.Type);

    const matchesAudience =
      selectedAudience.length === 0 ||
      selectedAudience.includes(normalizeAudience(course.CardInfo.Audience));

    const matchesFreeCourses = !showFreeCourses || course.CardInfo.Fees === "Free";
    const matchesAvailableCourses =
      !showAvailableCourses || course.Available === "Yes";

    return (
      matchesCriteria &&
      matchesSubCriteria &&
      matchesAudience &&
      matchesFreeCourses &&
      matchesAvailableCourses
    );
  });

  // Filter categories arrays for UI
  const criteriaFilters = ["Short Courses", "Annual Courses", "Summer Courses"];
  const audienceFilters = ["Brothers Only", "Sisters Only", "Brothers and Sisters"];

  return (
    <>
      <Navbar />
      <Header text="Publications" img={bgImage} page="policy" />

      {/* Filter Component */}
      {/* <div className="filter-container">
        <div className="filter">
          <Filter label="Filter">
            <div className="filters-list">
                <h4>Course Type</h4>
                    {criteriaFilters.map((label, index) => (
                  <label key={index} className="filter-option">
                <input
                    type="checkbox"
                    checked={selectedCriteria.includes(label)}
                    onChange={() => handleSelectCriteria(label)}
                  />
                  <span className="ml-2">{label}</span>
                </label>
              ))}

              <h4>Audience</h4>
              {audienceFilters.map((filter, index) => (
                <label key={index} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedAudience.includes(filter)}
                    onChange={() => handleSelectAudience(filter)}
                  />
                  <span className="ml-2">{filter}</span>
                </label>
              ))}

              <h4>Free Courses</h4>
              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={showFreeCourses}
                  onChange={handleToggleFreeCourses}
                />
                <span className="ml-2">Show Only Free Courses</span>
              </label>

              <h4>Available Courses</h4>
              <label className="filter-option">
                <input
                  type="checkbox"
                  checked={showAvailableCourses}
                  onChange={handleToggleAvailableCourses}
                />
                <span className="ml-2">Show Only Available Courses</span>
              </label>

              <button className="clear-filters-btn" onClick={handleClearFilters}>
                Clear Filters
              </button>
            </div>
          </Filter>

          <>
            {[
              {
                label: "All Courses",
                isActive: selectedCriteria.length === 0 && !selectedSubCriteria,
                onClick: handleClearFilters,
              },
              // ...criteriaFilters.map((label) => ({
              //   label,
              //   isActive:
              //     selectedSubCriteria === "" && selectedCriteria.includes(label),
              //   onClick: () => handleSelectCriteria(label),
              // })),
              {
                label: "Qur'anic Programmes",
                isActive: selectedSubCriteria === "Quran",
                onClick: () => handleSelectSubCriteria("Quran"),
              },
              {
                label: "Hadith Programmes",
                isActive: selectedSubCriteria === "Hadith",
                onClick: () => handleSelectSubCriteria("Hadith"),
              },
              {
                label: "Fiqh & Aqeedah",
                isActive: selectedSubCriteria === "fiqh",
                onClick: () => handleSelectSubCriteria("fiqh"),
              },
              {
                label: "Islamic History",
                isActive: selectedSubCriteria === "IS",
                onClick: () => handleSelectSubCriteria("IS"),
              },
              {
                label: "Arabic",
                isActive: selectedSubCriteria === "Arabic",
                onClick: () => handleSelectSubCriteria("Arabic"),
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
          </>
        </div>
      </div> */}

      <div >
        {/* <CourseList filteredCourses={filteredCourses} /> */}
      </div>

      <section className="pgcontainer">
        Publications to come....
      </section>

      <Footer />
    </>
  );
};

export default Publications;
