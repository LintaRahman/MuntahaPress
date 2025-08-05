import { useState } from "react";
import "./CourseTimingsTab.css";

export default function CourseTimingTabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="course-timings-tab-container">
      <div className="course-timings-tab-header">
        <ul className="course-timings-tab-list">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveIndex(index)}
                className={`course-timings-tab-button ${activeIndex === index ? "active" : ""}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="course-timings-tab-content">
        {tabs[activeIndex].content.map((item, idx) => (
          <li key={idx}>
            <strong>{item.day}:</strong> {item.topic} — {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
