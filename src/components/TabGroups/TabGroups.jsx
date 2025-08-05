// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import "./TabGroups.css";
// import Accordion from "../Accordion/Accordion"; 
// const Tab = styled.button`
// // flex: 1;
//   // min-width: 200px;
//   // max-width: 300px;
//   // min-height: 80px;
//   font-size: 18px;
//   padding: 10px 20px;
//   // cursor: pointer;
//   // opacity: 0.9;
//   margin: 5px;
//   background:  white;
//   color: rgba(28, 52, 76, 1);
//   border-bottom: 3px solid var(--color-primary);
//   outline: 0;
//   transition: transform 0.3s ease, opacity 0.3s ease;


//   &:hover {
//     transform-y: scale(1.05);
//     opacity: 1;
//   }

//   ${({ active }) =>
//     active &&
//     `
//     // font-weight: bolder;
//   border-bottom: 5px solid var(--color-primary);
//     opacity: 1;
//   `}

//   @media only screen and (max-width: 600px) {
//     // border-bottom: 0;
//     margin: 0;
//     width: 100%;
//     // border-bottom: 2px solid var(--color-primary);
//     ${({ active }) =>
//       active &&
//       `
//       background: var(--color-primary);
//       color: white;
//       width: 100%;
//       // borderTop: 2px solid var(--color-primary);
      
//       opacity: 1;
//     `}
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   // justify-content: center;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-items: center;
//   height: 80px;

//   width: 100%;
//   gap: 0.5rem;
  
//   @media only screen and (max-width: 600px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 0;
//   }
// `;

// const TabGroup = ({ categories }) => {

// // console.log(categories);

//   const [activeTab, setActiveTab] = useState(categories.length > 0 ? categories[0].Label : '');
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 920);
//   const [fadeIn, setFadeIn] = useState(true);

//   useEffect(() => {
//     setFadeIn(false);
//     const timer = setTimeout(() => setFadeIn(true), 50);
//     return () => clearTimeout(timer);
//   }, [activeTab]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 920);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (isMobile) {
//     return <Accordion data={categories} />;
//   }

//   return (
//     <div className="tabcontainer">
//       <div className="tab-bar-wrapper">
//   <ButtonGroup>
//     {categories.map((cat) => (
//       <Tab
//         key={cat.Label}
//         active={activeTab === cat.Label}
//         onClick={() => setActiveTab(cat.Label)}
//       >
//         {cat.Label}
//       </Tab>
//     ))}
//   </ButtonGroup>
// </div>

//       <div className="tabcontent">
//         {categories.find((cat) => cat.Label === activeTab)?.Content}
//       </div>
//     </div>
//   );
// };

// export default TabGroup;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./TabGroups.css";
import Accordion from "../Accordion/Accordion"; 
const Tab = styled.button`
  flex-grow: 1;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  padding: 5px;
  background: white;
  color: var(--color-primary);
  border: none;
  
  border-bottom: 3px solid var(--color-primary);
  outline: 0;
  transition: transform 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  

  ${({ active }) =>
    active &&
    `
      font-weight: bold;
      border-bottom: 5px solid var(--color-primary);
    `}

  @media only screen and (max-width: 600px) {
    width: 100%;
    ${({ active }) =>
      active &&
      `
        background: var(--color-primary);
        color: white;
      `}
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: stretch;
  width: 100%;
  gap: 0.5rem;
  height: 60px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0;
    height: auto;
  }
`;


const TabGroup = ({ categories }) => {

// console.log(categories);

  const [activeTab, setActiveTab] = useState(categories.length > 0 ? categories[0].Label : '');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 920);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <Accordion data={categories} />;
  }

  return (
    <div className="tabcontainer">
      <div className="tab-bar-wrapper">
  <ButtonGroup>
    {categories.map((cat) => (
      <Tab
        key={cat.Label}
        active={activeTab === cat.Label}
        onClick={() => setActiveTab(cat.Label)}
      >
        {cat.Label}
      </Tab>
    ))}
  </ButtonGroup>
</div>

      <div className="tabcontent">
        {categories.find((cat) => cat.Label === activeTab)?.Content}
      </div>
    </div>
  );
};

export default TabGroup;
