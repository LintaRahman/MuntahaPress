import '../../pages/policies/policies.css';
// import  {fees} from "../../assets/docs/Curriculum"
// import Table from '../../components/Table/Table';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


const policiesList = [
  {
    id: "enrolment",
    title: "Enrolment Policy",
    content:
      <>
      <p>Fees are payable through cash payments or online transfers. The first instalment or the entire fee must be paid on the first day of the academic year.</p>
<br />
<p>Instalment plans that are agreed to upon enrolment must be adhered to until completion of the course. Failure to make payment of outstanding instalment fees will result in deregistration and may be referred to a third-party debt collection agency.</p>
<br />
<p>Parents will not be entitled to a refund of that term if they decide to opt their child out of the Maktab classes after 14 days of starting the course (regardless of whether they attend or not). Instalment plans that are agreed to upon enrolment, must be adhered to until completion of the course (regardless of whether they opt out or not).</p>
<br />
<p>Please note that changes in your circumstances are not the responsibility of Muntaha Press Institute and neither can Muntaha Press Institute be held liable for changes in your circumstances.</p>
<br />
<p>Full or partial refund or relief of outstanding payments will only be issued in cases of:</p>
<ul>
  <li>- Statutory mistake or misrepresentation</li>
  <li>- Courses that have been discontinued</li>
  <li>- Exceptional circumstances -Muntaha Press Institute retains full discretion as to what is considered an exceptional circumstance. All refund requests due to exceptional circumstances must be received within 14 days of tuition fee payment or first instalment.</li>
</ul>

<br />
<p>If a refund request is accepted, then we will offer the options below:</p>
<ul>
  <li>- Parents may receive a refund, but any classes that have already been delivered (regardless of whether attended or not) will be deducted from the refund.</li>
  <li>- Parents will not be entitled to a refund if the course is delivered in full (regardless of whether attended or not).</li>
</ul>
<br />
<p>Please find below an overview of the fees for this academic year 2023-24 and updated term dates. Please note the timing of classes will be from 9am to 1pm on Sundays.</p>
<br />

{/* <Table Data={fees} /> */}
<br />
<p>The total cost of the fees for the academic year 2023/2024 is £690 (which works out to be £5ph/£20 per week).</p>
<br />
<p>We appreciate that some parents may struggle to pay their fees upfront, so we have offered two options for students to choose from. Also, for any family with more than two children attending the maktab, the cost of the fee for the third child onwards will be £650 per year.</p>

      </>},
  {
    id: "behaviour",
    title: "Behaviour Policy",
    content:
      <>
      <p><strong>Students are expected to:</strong></p>
<ul>
  <li>- Take responsibility for their own behaviour</li>
  <li>- Respect everyone</li>
  <li>- Look after the buildings and its environment</li>
  <li>- Wear the correct uniform as stated on the schools’ uniform policy</li>
  <li>- Have all equipment</li>
  <li>- Attend every day on time.</li>
</ul>
<br />
<p><strong>You must not...</strong></p>
<ul>
  <li>- Be defiant to any member of staff at The Academy</li>
  <li>- Bring in or use anything that is dangerous or illegal</li>
  <li>- Threaten, bully, fight, be violent, abusive or defiant to other students or staff</li>
  <li>- Damage Academy property or steal</li>
  <li>- Bring in valuable items, mobile phones etc (the items will be confiscated and parents will need to collect them). If a student has a mobile phone, it must be handed to the teacher at the start of class</li>
  <li>- Be late for lessons or take time off school</li>
  <li>- Wear incorrect uniform.</li>
</ul>
<br />
<p><strong>Parents/Carers will...</strong></p>
<ul>
  <li>- Support the rules of The Academy</li>
  <li>- Help your child to arrive on time and attend every day</li>
  <li>- Check your child’s journal for homework and comments</li>
  <li>- Check and support your child with their homework.</li>
</ul>
<br />
<p><strong>Teachers will...</strong></p>
<ul>
  <li>- Value any positive contribution students make</li>
  <li>- Reward students for good behaviour, effort and high quality work</li>
  <li>- Apply rules and sanctions consistently, these will include detentions during break and/or after school</li>
  <li>- Contact parents to praise students, or with concerns</li>
  <li>- Send students home for incorrect uniform (SLT ONLY)</li>
  <li>- Send students home for serious misconduct (SLT ONLY).</li>
</ul>

      </>
  },
  {
    id: "tnc", 
    title: "Terms & Conditions",
    content:<> 
      <h1>Muntaha Press Institute - Terms and Conditions</h1>
      <p><strong>Effective Date:</strong> 12 July 2025</p>
      <p>By enrolling in any course provided by Muntaha Press Institute, you agree to the following Terms and Conditions:</p>

      <hr />

      <h2>1. Enrolment & Eligibility</h2>
      <ul>
        <li>Applicants must meet all course-specific eligibility criteria as outlined at the point of application.</li>
        <li>Admission may be subject to assessment or interview and is at the sole discretion of the Institute.</li>
        <li>Applicants must be aged 18 or above unless otherwise stated.</li>
      </ul>

      <hr />

      <h2>2. Course Commitment</h2>
      <ul>
        <li>Students are expected to attend all scheduled classes and be punctual.</li>
        <li>Full commitment to the course structure, including out-of-class study time, is required.</li>
        <li>Irregular attendance or non-compliance may result in removal from the course.</li>
      </ul>

      <hr />

      <h2>3. Payment & Fees</h2>
      <ul>
        <li>Full fees apply regardless of when a student joins the course.</li>
        <li>Students may choose to pay annually or in instalments, depending on the course format and payment plan available.</li>
      </ul>

      <h3>Course-Specific Fee Policies:</h3>

      <p><strong>Part-time / Modular Courses</strong></p>
      <ul>
        <li> All fees are strictly non-refundable once the course start date has passed.</li>
      </ul>

      <p><strong>Annual / Full-Year Courses</strong></p>
      <ul>
        <li> A 14-day cooling-off period applies from the official course start date.</li>
        <li>  If a student withdraws during this period, a partial refund will be issued, with deductions for any sessions attended or administrative costs incurred.</li>
        <li>  After the 14-day period, no refunds will be granted, regardless of attendance or personal circumstances.</li>
      </ul>

      <ul>
        <li>Failure to make timely payments may result in suspension, removal from the course, or referral to a third-party debt collection agency.</li>
      </ul>

      <hr />

      <h2>4. Refunds & Cancellations</h2>
      <p><strong>Modular (Part-Time) Courses:</strong></p>
      <ul>
        <li>  No refunds will be issued once the course has commenced, unless the Institute cancels the course.</li>
      </ul>

      <p><strong>Annual (Full-Year) Courses:</strong></p>
      <ul>
        <li>  A refund may be requested within 14 days of the official course start date.</li>
        <li>  Any approved refund during this time will be pro-rated based on time attended and any relevant administrative deductions.</li>
        <li> No refunds will be processed after the 14-day period.</li>
      </ul>

      <ul>
        <li>If a course is cancelled by Muntaha Press Institute, a full refund or alternative arrangement will be offered.</li>
      </ul>

      <hr />

      <h2>5. Conduct & Discipline</h2>
      <ul>
        <li>Students must behave respectfully and in line with Islamic values.</li>
        <li>Any disruptive behaviour, dishonesty (including cheating), or rule violations may result in disciplinary action, including suspension or expulsion.</li>
        <li>Expelled students are not eligible for reapplication, and full annual fees will still apply.</li>
      </ul>

      <hr />

      <h2>6. Academic Requirements</h2>
      <ul>
        <li>Students must maintain minimum academic or memorisation standards (as relevant).</li>
        <li>Consistent underperformance without valid reason may result in academic review or removal.</li>
        <li>Students are encouraged to notify staff of any difficulties early.</li>
      </ul>

      <hr />

      <h2>7. Use of Technology</h2>
      <ul>
        <li>Online classes must be attended using a laptop or computer (phones are not allowed).</li>
        <li>Cameras must be turned on during classes.</li>
        <li>Personal recording of classes is strictly prohibited.</li>
      </ul>

      <hr />

      <h2>8. Privacy & Data</h2>
      <ul>
        <li>Personal information is collected and used in accordance with our <a href="/privacy-policy">Privacy Policy</a>.</li>
        <li>Names and email addresses may be retained indefinitely for internal communication and marketing purposes unless the individual unsubscribes or requests deletion.</li>
      </ul>

      <hr />

      <h2>9. Intellectual Property</h2>
      <ul>
        <li>All course materials remain the intellectual property of Muntaha Press Institute.</li>
        <li>Materials may not be shared, distributed, or reused outside the course without prior written permission.</li>
      </ul>

      <hr />

      <h2>10. Limitation of Liability</h2>
      <ul>
        <li>The Institute is not responsible for any technical issues, personal IT failures, or missed sessions due to student-side issues.</li>
        <li>The Institute does not guarantee particular outcomes and disclaims liability for application of course content outside the programme.</li>
      </ul>

      <hr />

      <h2>11. Amendments</h2>
      <ul>
        <li>Muntaha Press Institute reserves the right to update these Terms at any time. Continued participation indicates acceptance of the latest version.</li>
      </ul>

      <hr />

      <h3>For queries, please contact:</h3>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />{" "}
        <Link to="mailto:info@muntaha.org.uk">
          info@muntahapress.org.uk
        </Link>
      </p></>
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content:<>
  <h1>Privacy Policy – Muntaha Press Institute</h1>
  <p><strong>Effective Date:</strong> 12 July 2025</p>
  <p><strong>Last Updated:</strong> 10 July 2025</p>

  <p>Welcome to Muntaha Press Institute! This Privacy Notice explains how we collect, use, disclose, and safeguard your personal information. We are committed to protecting your privacy and ensuring the security of your data.</p>
  <p>Your privacy is of the highest importance to us. We promise never to release your personal details to any external company for marketing purposes.</p>

  <h2>1. Responsibility for Data Protection</h2>
  <p>We take full responsibility for ensuring that your personal data is processed in accordance with UK data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
  <p>You may contact us with any questions or concerns at:<br/>
  <FontAwesomeIcon icon={faEnvelope} /> <Link to="mailto:info@muntahapress.com">info@muntahapress.com</Link></p>

  <h2>2. How We Collect Personal Data</h2>
  <p>We generally receive personal data directly from individuals. This may include:</p>
  <ul>
    <li>Enrolment forms</li>
    <li>Email communication</li>
    <li>Written assessments</li>
    <li>Phone or in-person enquiries</li>
  </ul>
  <p>For pupils under 18, data may be provided by their parent or guardian.</p>

  <h2>3. Types of Data We Collect</h2>
  <ul>
    <li>Name, address, phone number, email address</li>
    <li>Nationality, age and gender</li>
    <li>Payment details (processed securely via third parties)</li>
    <li>Religious and educational background</li>
    <li>Class performance and attendance data</li>
    <li>IT data (e.g., IP addresses, device type)</li>
  </ul>

  <h2>4. How We Use Your Data</h2>
  <ul>
    <li>Process course applications and enrolments</li>
    <li>Communicate essential course information</li>
    <li>Collect fees and process payments</li>
    <li>Monitor attendance and progress</li>
    <li>Fulfil legal or safeguarding responsibilities</li>
    <li>Send updates and marketing communications (if opted in)</li>
  </ul>

  <h2>5. Lawful Basis for Processing</h2>
  <ul>
    <li>Contractual necessity: For providing the service you enrolled for</li>
    <li>Legal obligation: To meet safeguarding, reporting, and accounting duties</li>
    <li>Consent: For email marketing and optional updates</li>
    <li>Legitimate interests: For running and improving our courses and website</li>
  </ul>

  <h2>6. Data Retention</h2>
  <ul>
    <li>Student and staff records: Up to 7 years after leaving the Institute</li>
    <li>Safeguarding files: Retained in accordance with legal requirements (often longer)</li>
    <li>Financial records: 6 years for HMRC compliance</li>
  </ul>

  <h2>7. Marketing Data Retention</h2>
  <p>If you opt in to receive email updates or marketing communications, we will retain your name and email address only as long as your consent remains valid.</p>
  <p>You may unsubscribe at any time via the link in our emails or by contacting us.</p>
  <p>We periodically review our email list and may contact you to refresh consent.</p>
  <p>If you unsubscribe, your email will be placed in a suppression list to ensure you are not contacted again unless you re-subscribe.</p>

  <h2>8. Cookies</h2>
  <p>We use cookies to improve your browsing experience and collect analytics:</p>
  <ul>
    <li>Session cookies: Identify return users and keep the site functioning smoothly</li>
    <li>Google Analytics: Helps us understand user activity and improve our content</li>
    <li>YouTube embeds: May collect viewing data via YouTube’s own cookies</li>
  </ul>
  <p>You can disable cookies in your browser settings. For opt-out of marketing cookies, visit the Network Advertising Initiative.</p>

  <h2>9. Advertising</h2>
  <p>We may display advertising on third-party websites. Cookies may track ad clicks but do not collect personally identifiable information.</p>

  <h2>10. Email Communication</h2>
  <p>If you subscribe to our mailing list, you’ll receive occasional course and program updates, announcements, and appeals. You can unsubscribe at any time using the link in our emails.</p>

  <h2>11. Sharing Your Data</h2>
  <p>We do not sell or rent your personal data to third parties.</p>
  <p>We may share data with:</p>
  <ul>
    <li>IT and payment service providers (bound by strict confidentiality)</li>
    <li>Legal or safeguarding authorities when required</li>
    <li>Accrediting or examination bodies, when applicable</li>
  </ul>

  <h2>12. Data Security</h2>
  <p>We implement strong physical, digital, and organisational security measures to protect your information. This includes:</p>
  <ul>
    <li>Encrypted communication (SSL)</li>
    <li>Restricted access to data</li>
    <li>Staff training in data handling</li>
  </ul>

  <h2>13. Your Rights</h2>
  <p>Under UK GDPR, you have the right to:</p>
  <ul>
    <li>Access your personal data</li>
    <li>Request correction of inaccurate data</li>
    <li>Request deletion (where applicable)</li>
    <li>Withdraw consent at any time (e.g., from marketing)</li>
    <li>Lodge a complaint with the Information Commissioner’s Office (ICO)</li>
  </ul>
  <p>To exercise your rights, please contact us using the details above.</p>

  <h2>14. Changes to This Policy</h2>
  <p>We may update this policy from time to time. The latest version will always be available on our website. Significant changes will be communicated via email or website notice.</p>
</>
  }
];

export default policiesList;
