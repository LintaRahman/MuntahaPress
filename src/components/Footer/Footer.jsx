import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faWhatsapp, faTelegram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo from '../../assets/images/MuntahaWhite.png'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Wave from '../../assets/images/wave.png'

const Footer = () => {
    const iconStyle ={
        color: '#fff',
        height: '20px',
        paddingRight: '5px',
        paddingTop: '5px'
    }

  return (<>
    {/* <section style={{height: "130px", background:'var(--color-primary)', marginBottom: '-2px'}}>
         <div className='wave wave1'></div>
         <div className='wave wave2'></div>
         <div className='wave wave3'></div>
         <div className='wave wave4'></div>
     </section> */}
    <footer className='footer'>
    {/* <div className='wave wave1'></div>
         <div className='wave wave2'></div>
         <div className='wave wave3'></div>
         <div className='wave wave4'></div> */}
        <div className="footercontainer">
            <div className="row">
                <div className='footer-col'> 
                <img src={logo} alt="" className='logo' />
                </div>

                <div className="footer-col">
                    <h4>Institute</h4>
                    <ul>
                        <li><Link to="/aboutus">About Us</Link></li>
                        {/* <li><Link to="/meet_the_team">Meet the Team</Link></li> */}
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/publications">Publications</Link></li>
                        <li><Link to="/podcasts">Podcasts</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        {/* <li><Link to="/studentlife#faqs">FAQs</Link></li> */}
                        
                        
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Policies</h4>
                    <ul>
                        {/* <li><Link to="/policies/enrolment">Enrolment Policy</Link></li> */}
                        <li><Link to="/policies/privacy">Privacy Policy</Link></li>
                        <li><Link to="/policies/tnc">Terms & Conditions</Link></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h4>Get in Touch</h4>
                    <ul className='contacts'>
                        {/* <li><Link to="#">Phone</Link></li> */}
                        <li><Link to="mailto:info@muntahapress.com">{/*<FontAwesomeIcon icon={faEnvelope} />*/}Email</Link></li> 
                        {/* <li><Link to="#"> WhatsApp</Link></li>                         */}
                    </ul>
                </div>
                <div className="footer-col"> 
                    <h4>Follow Us</h4>
                    <ul className='social-links'>
                        <li><Link to="https://www.instagram.com/muntahapress/?hl=en" target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                        <li><Link to="https://www.facebook.com/muntaha.press" target='_blank'><FontAwesomeIcon icon={faFacebook}/></Link></li>
                        <li><Link to="https://www.youtube.com/@muntahaeducation" target='_blank'><FontAwesomeIcon icon={faYoutube} /></Link></li>
                        <li><Link to="https://x.com/MuntahaPress"  target='_blank'><FontAwesomeIcon icon={faXTwitter}/></Link></li>
                    </ul>
                </div>
               

                
                
            </div>
        </div>
<div className='footercontainer'>
    <div className='copyright'>
        Copyright ©2025 Muntaha Press | All Rights Reserved
    </div>
</div>
    </footer>
    </>
   
  )
}

export default Footer

// import styles from "./FooterStyle";
// // import { logo } from "../assets";
// import { footerLinks, socialMedia } from "../../constants";

// const Footer = () => (
//   <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col footer`} style="background: black">
//     <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//       <div className="flex-[1] flex flex-col justify-start mr-10">
//         <h1>Safwa Academy</h1>
//         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
//           Inspiring the next generation.
//         </p>
//       </div>

//       <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//         {footerLinks.map((footerlink) => (
//           <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
//             <h4 className="font-Calibri font-medium text-[18px] leading-[27px] text-white">
//               {footerlink.title}
//             </h4>
//             <ul className="list-none mt-4">
//               {footerlink.links.map((link, index) => (
//                 <li
//                   key={link.name}
//                   className={`font-Calibri font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
//                     index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
//                   }`}
//                 >
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//       <p className="font-Calibri font-normal text-center text-[18px] leading-[27px] text-white">
//         Copyright Ⓒ 2023 Safwa Academy. All Rights Reserved.
//       </p>

//       <div className="flex flex-row md:mt-0 mt-6">
//         {socialMedia.map((social, index) => (
//           <img
//             key={social.id}
//             src={social.icon}
//             alt={social.id}
//             className={`w-[21px] h-[21px] object-contain cursor-pointer ${
//               index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
//             }`}
//             onClick={() => window.open(social.link)}
//           />
//         ))}
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
