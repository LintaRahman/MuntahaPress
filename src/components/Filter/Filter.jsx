import React, { useState, useRef, useEffect } from "react";
import "./filter.css";
import FilterModal from "./FilterModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";


export default function Filter({ children, onApply, label }) {  
    const [isOpen, setIsOpen] = useState(false);  
    const dropdownRef = useRef(null);  
    const buttonRef = useRef(null);  
    const modalRef = useRef(null);

    useEffect(() => {  
        const handleClickOutside = (event) => {    
            if (
                (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
                (buttonRef.current && buttonRef.current.contains(event.target)) ||
                (modalRef.current && modalRef.current.contains(event.target))
            ) {
                return;    
            }    
            setIsOpen(false);    
        };  
    
        document.addEventListener("mousedown", handleClickOutside);  
        document.addEventListener("touchstart", handleClickOutside);  

        return () => {    
            document.removeEventListener("mousedown", handleClickOutside);    
            document.removeEventListener("touchstart", handleClickOutside);   
        };
    }, []);

    const handleApply = (event) => {  
        setIsOpen(false);  
        onApply(event);
    };

    return (  
        <div className="filter-wrapper">
            <button 
                ref={buttonRef}      
                onClick={() => setIsOpen(!isOpen)}      
                className="filter__button"
            >      
                {label === "Filter" ? <>Filter <FontAwesomeIcon icon={faFilter} /></> : label}
  
            </button>
            {/* {isOpen && (      
                <div ref={dropdownRef} className="filter__dropdown">        
                    <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>  
                        {children}  
                    </div>  
                    <div className="filter__dropdown__actions">        
                        <button onClick={handleApply} className="filter__dropdown_button">  
                            Apply  
                        </button>        
                    </div>  
                </div>  
            )} */}

            {/* {isOpen && (  
                <FilterModal  
                    ref={modalRef}        
                    onApply={handleApply}        
                    onDismiss={() => setIsOpen(false)}
                >  
                    {children}  
                </FilterModal>  
            )}   */}
            {isOpen && (
                <div ref={dropdownRef} className="filter-modal__wrapper">
                    <div className="filter-modal__content">
                        {children}
                        <div className="filter-modal__actions">
                        <button onClick={handleApply}>Apply</button>
                    </div>
                    </div>
                    
                </div>
            )}

            {/* Full-Screen Modal for Mobile */}
            {isOpen && window.innerWidth < 768 && (
                <FilterModal
                    ref={modalRef}
                    onApply={handleApply}
                    onDismiss={() => setIsOpen(false)}
                >
                    {children}
                </FilterModal>
            )}
        </div>
    );
}

// import React, { useState, useRef, useEffect } from "react";
// import "./filter.css";
// import FilterModal from "./FilterModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";

// export default function Filter({ children, onApply, label }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const buttonRef = useRef(null);
//     const modalRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
//                 (buttonRef.current && buttonRef.current.contains(event.target)) ||
//                 (modalRef.current && modalRef.current.contains(event.target))
//             ) {
//                 return;
//             }
//             setIsOpen(false);
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         document.addEventListener("touchstart", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             document.removeEventListener("touchstart", handleClickOutside);
//         };
//     }, []);

//     // const handleApply = (event) => {
//     //     setIsOpen(false);
//     //     onApply(event);
//     // };
//     const handleApply = (event) => {  
//         setIsOpen(false);  
//         if (onApply) { // Ensure onApply exists before calling
//             onApply(event);  
//         }  
//     };

//     return (
//         <div className="filter" style={{ position: "relative" }}>
//             <button
//                 ref={buttonRef}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="filter__button"
//             >
//                 {label === "Filter" ? (
//                     <>Filter <FontAwesomeIcon icon={faFilter} /></>
//                 ) : (
//                     label
//                 )}
//             </button>

//             {/* Dropdown for Desktop */}
//             {isOpen && (
//                 <div ref={dropdownRef} className="filter-modal__wrapper">
//                     <div className="filter-modal__content">
//                         {children}
//                     </div>
//                     <div className="filter-modal__actions">
//                         <button onClick={handleApply}>Apply</button>
//                     </div>
//                 </div>
//             )}

//             {/* Full-Screen Modal for Mobile */}
//             {isOpen && window.innerWidth < 768 && (
//                 <FilterModal
//                     ref={modalRef}
//                     onApply={handleApply}
//                     onDismiss={() => setIsOpen(false)}
//                 >
//                     {children}
//                 </FilterModal>
//             )}
//         </div>
//     );
// }
