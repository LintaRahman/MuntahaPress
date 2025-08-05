// // import React from "react";
// // import { DialogContent, DialogOverlay } from "@reach/dialog";
// // import "./filterModal.css";

// // const FilterModal = React.forwardRef(({ children, onApply, onDismiss }, ref) => {
// //     return (
// //         <DialogOverlay ref={ref} className="filter-modal" aria-label="modal window">
// //             <DialogContent className="filter-modal__wrapper">
// //                 <div className="filter-modal__header">
// //                     <button onClick={onDismiss} className="filter-modal__close">
// //                         x
// //                     </button>
// //                 </div>
// //                 <div className="filter-modal__content">{children}</div>
// //                 <div className="filter-modal__actions">
// //                     <button onClick={onApply} className="filter-modal__apply">
// //                         Apply
// //                     </button>
// //                 </div>
// //             </DialogContent>
// //         </DialogOverlay>
// //     );
// // });

// // export default FilterModal;
// import React, { useEffect, useRef } from "react";
// import "./filterModal.css";

// const FilterModal = React.forwardRef(({ children, onApply, onDismiss }, ref) => {
//     const modalRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 onDismiss();
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         document.addEventListener("touchstart", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//             document.removeEventListener("touchstart", handleClickOutside);
//         };
//     }, [onDismiss]);

//     return (
//         <div className="filter-modal-overlay">
//             <div ref={modalRef} className="filter-modal">
//                 <div className="filter-modal__header">
//                     <button onClick={onDismiss} className="filter-modal__close">
//                         ✖
//                     </button>
//                 </div>
//                 <div className="filter-modal__content">{children}</div>
//                 <div className="filter-modal__actions">
//                     <button onClick={onApply} className="filter-modal__apply">
//                         Apply
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// });

// export default FilterModal;
import React, { forwardRef } from "react";
import "./filterModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const FilterModal = forwardRef(({ children, onApply, onDismiss }, ref) => {
    return (
        <div className="filter-modal__overlay" onClick={onDismiss}>
            <div
                ref={ref}
                className="filter-modal__wrapper"
                onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside
            >
                <div className="filter-modal__header">
                    <button onClick={onDismiss} className="filter-modal__close">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="filter-modal__content">{children}</div>
                <div className="filter-modal__actions">
                    <button onClick={onApply} className="filter-modal__apply">Apply</button>
                </div>
            </div>
        </div>
    );
});

export default FilterModal;
