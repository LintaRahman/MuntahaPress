


import { useCallback, useState, useEffect } from "react";
import { Button, Form, Input, Select, DatePicker, Checkbox, notification } from "antd";
import dayjs from "dayjs";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import bgImage from '../../assets/images/Header/Headers.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './contact.css';
import { Link, useLocation } from 'react-router-dom';

// const { Option } = Select;

const Contact = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     useEffect(() => {
//   const script = document.createElement("script");
//   script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
//   script.onload = () => {
//     if (window.jotformEmbedHandler) {
//       window.jotformEmbedHandler(`iframe[id='JotFormIFrame-251845331573357']`, "https://form.jotform.com/");
//     }
//   };
//   document.body.appendChild(script);
// }, []);


//   const handleIframeLoad = () => {
//     window.parent.scrollTo(0, 0);
//   };

    // const courseName = queryParams.get("course") || "a Course";
    // const courses = coursesList;
    // const course = courses.find((p) => String(p.Title) === courseName);
    // console.log(course);
  
    // useEffect(() => {
    //   const script = document.createElement("script");
    //   script.src = "https://js-eu1.hsforms.net/forms/embed/146384979.js";
    //   script.async = true;
    //   document.body.appendChild(script);
  
    //   return () => {
    //     document.body.removeChild(script); // clean up
    //   };
    // }, []);
  // const [form] = Form.useForm();
  // const [submitted, setSubmitted] = useState(false);
  // const [api, contextHolder] = notification.useNotification();
  // const successMessage = "Form submitted successfully!";

  // const onFinish = useCallback(async (values) => {
  //   const formUrl = import.meta.env.VITE_GOOGLE_CONTACT_FORM;
  //   const formData = new URLSearchParams({
  //     "entry.535589386": values.name,
  //     "entry.1929998462": values.email,
  //     "entry.1142836410": values.message,
  //   }).toString();
  
  //   try {
  //     let success = false;
  
  //     await Promise.race([
  //       fetch(formUrl, {
  //         method: "POST",
  //         mode: "no-cors",
  //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //         body: formData,
  //       }).then(() => (success = true)),
  //       new Promise((_, reject) =>
  //         setTimeout(() => reject(new Error("Submission timeout! Please try again.")), 3000)
  //       ),
  //     ]);
  
  //     if (!success) throw new Error("Form submission might have failed. Please try again.");
  
  //     api.success({ message: "Submitted successfully" });
  //     form.resetFields();
  //     setSubmitted(true);
  //   } catch (e) {
  //     api.error({ message: e.message || "An error occurred while submitting the form." });
  //   }
  // }, [api, form]);
  

  return (
    <>
    <Navbar/>
    <Header text='Get in Touch' img={bgImage} page="policy" />
    <section className=" contact-info">
      <div className="contact"><p><FontAwesomeIcon icon={faEnvelope} /> ‍Email:<br/>‍info@muntahapress.com</p> </div>
      <div className="contact"><p>‍<FontAwesomeIcon icon={faClock} />‍ Opening Times:<br/>Monday to Friday, 9:00AM - 5:00PM</p> </div>
    </section>
       {/* <section className="pgcontainer">
       <p>‍Email:<br/>‍info@muntahapress.com</p><br/>
       <p>‍Opening Times:<br/>Monday to Friday, 9:00AM - 5:00PM</p><br/>
     </section> */}

     
{/* <iframe
  id="JotFormIFrame-251845331573357"
  title="Contact Form"
  onLoad={handleIframeLoad}
  allowTransparency={true}
  allow="geolocation; microphone; camera; fullscreen; payment"
  src="https://form.jotform.com/251845331573357"
  frameBorder="0"
  scrolling="no"
  style={{
    minWidth: "100%",
    maxWidth: "100%",
    // height: "539px",
    border: "none",
  }}
/> */}
    {/* <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251845331573357']", "https://form.jotform.com/")</script> */}
    
{/* <section className="googleform-container">
<div class="hs-form-frame" data-region="eu1" data-form-id="1309fd2b-359a-489d-b770-be0428209361" data-portal-id="146384979"></div>
</section> */}
      {/* {contextHolder}
      <div className="form-container">
        {submitted ? (
          <div className="success-message">{successMessage}</div>
        ) : (
          <Form form={form} layout="vertical" onFinish={onFinish}>


            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email" }]}>
              <Input type="email" />
            </Form.Item>

            <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter a message" }]}>
  <Input.TextArea rows={6} />
</Form.Item>

            <button type="submit" className="submit-btn">Send Message</button>
          </Form>
        )}
      </div> */}
      <Footer/>
    </>
  );
};

export default Contact;
