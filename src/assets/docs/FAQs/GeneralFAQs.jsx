import {
  faClipboardCheck,
  faLaptop,
  faClock,
  faMoneyBillWave,
  faBook,
  faChalkboardTeacher,
  faTools,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GeneralFAQs = [
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faClipboardCheck} /> Enrolment & Eligibility
      </>
    ),
    Questions: [
      {
        Label: "Who can join the courses?",
        Content:
          "Our courses are open to students of all ages from 18+, backgrounds, and levels, unless otherwise specified in the course details.",
      },
      {
        Label: "Is there an assessment before joining?",
        Content:
          "Some courses require an assessment to determine your current level and suitability. Check individual course requirements.",
      },
      {
        Label: "How do I enrol?",
        Content:
          "You can enrol by completing the online registration form and submitting any required documents or fees.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faLaptop} /> Course Delivery
      </>
    ),
    Questions: [
      {
        Label: "Are courses offered online, onsite, or both?",
        Content:
          "We offer both online and onsite classes depending on the course. Check the course description for delivery mode.",
      },
      {
        Label: "What platform is used for online classes?",
        Content:
          "Online classes are usually conducted via Zoom or other video conferencing tools specified at registration.",
      },
      {
        Label: "Do I need any special equipment for online courses?",
        Content:
          "Yes, a reliable internet connection and a laptop or tablet with a webcam and microphone are recommended. Phones are generally not preferred unless specified.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faClock} /> Attendance & Commitment
      </>
    ),
    Questions: [
      {
        Label: "Is attendance mandatory?",
        Content:
          "Yes, regular attendance is important to keep up with the course.",
      },
      {
        Label: "What happens if I miss classes?",
        Content:
          "Notify the admin/course instructor in advance if possible. Excessive unnotified absences may affect your enrolment status.",
      },
      {
        Label: "Can I attend classes part-time or skip some sessions?",
        Content:
          "Most courses require full participation. Part-time attendance or skipping sessions is usually not allowed unless approved.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faMoneyBillWave} /> Fees & Payments
      </>
    ),
    Questions: [
      {
        Label: "How much do courses cost?",
        Content:
          "Fees vary by course and must be paid before the start of the course. Please refer to the specific course page for pricing details.",
      },
      {
        Label: "What payment methods are accepted?",
        Content:
          "Payments can be made online via bank transfer, credit/debit card, or in cash.",
      },
      {
        Label: "Are refunds available?",
        Content:
          "Refund policies vary; generally, refunds are not available after the course starts. Check the refund policy on your course registration page.",
      },
      {
        Label: "If I join a course midway through the term, do I still have to pay the full fee?",
        Content:
          "Yes, full payment is required regardless of when you join the course. Fees are not adjusted for late enrolments.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faBook} /> Course Materials & Conduct
      </>
    ),
    Questions: [
      {
        Label: "Will I receive course materials?",
        Content:
          "Yes, materials will be provided digitally or onsite depending on the course format.",
      },
      {
        Label: "What is the expected conduct during classes?",
        Content:
          "Students are expected to maintain respect, punctuality, modest dress, and active participation. Disruptive behaviour may lead to disciplinary action.",
      },
      {
        Label: "Can I record the lessons?",
        Content:
          "Recordings are not allowed unless explicitly permitted by the instructor.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faChalkboardTeacher} /> Assessments & Certification
      </>
    ),
    Questions: [
      {
        Label: "Are there exams or assessments?",
        Content:
          "Some courses include assessments to evaluate progress. Details vary by course.",
      },
      {
        Label: "Will I receive a certificate?",
        Content:
          "Certificates may be awarded upon successful completion, depending on the course.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faTools} /> Technical Support
      </>
    ),
    Questions: [
      {
        Label: "What if I have technical issues during an online class?",
        Content:
          "Ensure your device and internet are working before class. Muntaha Press is not responsible for personal IT faults or disruptions. Classes will not be repeated for such issues.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faQuestionCircle} /> Other Questions
      </>
    ),
    Questions: [
      {
        Label: "Can I switch between online and onsite classes?",
        Content:
          "Switching depends on availability and course policies. Please contact administration for options.",
      },
      {
        Label: "How can I get help if I have questions during the course?",
        Content:
          "You can reach out to your instructor or course coordinator via email or the designated communication platform.",
      },
    ],
  },
];

export default GeneralFAQs