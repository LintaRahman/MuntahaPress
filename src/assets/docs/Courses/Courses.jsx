import React from 'react'
import QuranicCourses from "./QuranicCourses";
import FiqhCourses from './FiqhCourses';
import HistoryCourses from './HistoryCourses';
import HadithCourses from './HadithCourses';
import ArabicCourses from './ArabicCourses';

const Courses = [
    ...QuranicCourses,
    ...HadithCourses,
    ...FiqhCourses,
    ...HistoryCourses,
    ...ArabicCourses

]

export default Courses