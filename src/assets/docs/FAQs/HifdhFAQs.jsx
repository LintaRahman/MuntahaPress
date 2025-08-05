import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faGraduationCap,
  faMoneyBillWave,
  faClock,
  faChalkboardTeacher,
  faBookOpen,
  faBan,
} from '@fortawesome/free-solid-svg-icons';

const HifdhFAQs = [
{
    Heading: (
      <>
        <FontAwesomeIcon icon={faInfoCircle} /> General Information
      </>
    ),
    Questions: [
      {
        Label: "What is the goal of the Hifdh Programme?",
        Content: (
          <>
            The programme aims to help students memorise the entire Qur’ān within 2–3 years, while also instilling correct Tajweed, strong revision habits, high moral character, and a love for the Qur’ān.
          </>
        ),
      },
      {
        Label: "How is the course delivered?",
        Content: (
          <>
            The course is delivered online via Zoom, with mandatory onsite Maqra’ah sessions held once every term.
          </>
        ),
      },
      {
        Label: "Who can join the course?",
        Content: (
          <>
            The programme is open to both brothers and sisters aged 18 and above.
          </>
        ),
      },
      {
        Label: "What are the class timings?",
        Content: (
          <>
            <p>You can choose one option from:</p>
            <ul>
              <li>Session 1: 5:45 AM – 7:45 AM (Mon–Thu)</li>
              <li>Session 2: 9:30 AM – 11:30 AM (Mon–Thu)</li>
              <li>Evening Session: 7:00 PM – 9:00 PM (Mon–Thu)</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faGraduationCap} /> Eligibility & Commitment
      </>
    ),
    Questions: [
      {
        Label: "What are the entry requirements?",
        Content: (
          <>
            <p>You must have:</p>
            <ul>
              <li>Fluency in recitation</li>
              <li>A solid foundation in Tajweed application</li>
              <li>Commitment to a minimum of 2–3 hours daily outside of class for memorisation and revision</li>
            </ul>
          </>
        ),
      },
      {
        Label: "Is there an assessment before enrolment?",
        Content: (
          <>
            Yes, all applicants will be assessed on their recitation. Successful applicants will be offered a place on a one-term probation period.
          </>
        ),
      },
      {
        Label: "What if I can’t commit to the daily study time?",
        Content: (
          <>
            Students who cannot meet the time requirement are advised to explore other courses that suit their schedule better.
          </>
        ),
      },
      {
        Label: "What if I can only attend on some of the 4 scheduled days?",
        Content: (
          <>
            Full commitment to all scheduled days is required. If you’re unable to attend all lessons or are only available for part of the week, this course is not suitable for you. We recommend considering alternative options that fit your availability.
          </>
        ),
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={
  faMoneyBillWave} /> Fees & Refunds
      </>
    ),
    Questions: [
      {
        Label: "What is the course fee?",
        Content:<>
          <p>The total fee is £1,350 for the academic year 2025/2026. Payment options:</p>
          <ul>
            <li>Annually: £1,350 (1 payment)</li>
            <li>Termly: 3 x £450</li>
            </ul></>,
      },
      {
        Label: "If I join a course midway through the term, do I still have to pay the full fee?",
        Content:
          "Yes, full payment is required regardless of when you join the course. Fees are not adjusted for late enrolments.",
      },
      {
        Label: "Are refunds available?",
        Content:
          "Refunds are not available after 14 days from course start, regardless of attendance. Partial refunds may be considered in exceptional cases (e.g., misrepresentation or course cancellation) if requested within 14 days of payment.",
      },
      {
        Label: "What happens if I miss an instalment payment?",
        Content:
          "Missing payments can lead to deregistration and referral to a third-party debt collection agency.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faClock} /> Attendance & Conduct
      </>
    ),
    Questions: [
      {
        Label: "How many absences are allowed?",
        Content:
          "A maximum of two excused absences per term is allowed. More than that may lead to removal unless there are extenuating circumstances.",
      },
      {
        Label: "Can I be late to class?",
        Content:
          "Punctuality is required. Late entries after the start time are not allowed. Consistent lateness or absences may lead to suspension.",
      },
      {
        Label: "What if I am struggling to keep up?",
        Content:
          "We encourage open communication with teachers. Support may be offered, but students must meet minimum progress expectations to remain enrolled.",
      },
      {
        Label: "What if I’m absent due to a sensitive issue?",
        Content:
          "You should still inform your teacher privately, even if the reason is personal. A brief message acknowledging the absence is expected.",
      },
      {
        Label: "Can I reapply if I leave the course or if I’m expelled?",
        Content:
          "If you voluntarily leave the course, reapplications may be considered on a case-by-case basis after a cooling-off period. However, students who are expelled are not eligible to reapply.\nNote: If a student is expelled at any point during the academic year, full annual fees still apply.",
      },
    ],
  },
  {
    Heading: (
      <>
        <FontAwesomeIcon icon={faChalkboardTeacher} /> Class Conduct & Technology
      </>
    ),
    Questions: [
      {
        Label: "Can I record the class for revision?",
        Content: "No. Personal recording is strictly prohibited.",
      },
      {
        Label: "Do I need to turn my camera on?",
        Content:
          "Yes, students must turn on their camera when reading. Sisters who observe Niqab may keep it on.",
      },
      {
        Label: "Can I attend class on my phone?",
        Content: "No. Only laptops are permitted for attending class.",
      },
      {
        Label: "What is the expected dress code for class?",
        Content:
          "Students must dress modestly in Islamic or smart formal attire. Casual wear like hoodies or t-shirts is discouraged.",
      },
      {
        Label: "What happens if my internet has issues?",
        Content:
          "Muntaha Press is not responsible for personal IT faults or disruptions. Classes will not be repeated for such issues.",
      },
    ],
  },
  {
  Heading: (
    <>
      <FontAwesomeIcon icon={faBookOpen} /> Assessment & Performance
    </>
  ),
  Questions: [
    {
      Label: "How are mistakes handled in recitation?",
      Content: (
        <ul>
          <li>Sabaq: 1 stutter allowed; 1 mistake = fail</li>
          <li>Sabaq Juz & Murāja’ah: 2 stutters or 1 mistake allowed</li>
          <li>Juz Test: 1 mistake (or 2 stutters) maximum</li>
        </ul>
      ),
    },
    {
      Label: "What happens if I don’t meet targets?",
      Content: "Students who fail to meet year-end goals may be expelled.",
    },
  ],
},
{
  Heading: (
    <>
      <FontAwesomeIcon icon={faBan} /> Disciplinary Actions
    </>
  ),
  Questions: [
    {
      Label: "What can lead to suspension or expulsion?",
      Content: (
        <>
          <ul>
            <li>Frequent unnotified absences</li>
            <li>Disruptive behaviour</li>
            <li>Cheating during daily tests or exams (e.g., reading answers instead of reciting from memory)</li>
            <li>Dishonesty</li>
            <li>Violation of Institute rules or policies</li>
            <li>Acts of violence, bullying, or harassment</li>
          </ul>
          <p>
            <strong>Note:</strong> If a student is expelled at any point during the academic year, full annual fees still apply.
          </p>
        </>
      ),
    },
  ],
}

];

export default HifdhFAQs;
