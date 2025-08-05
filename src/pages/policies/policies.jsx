import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/Header/Headers.png";
import { useParams } from "react-router-dom";
import policiesList from "../../assets/docs/Policies"
import './policies.css';

const policies = () => {
  return (
    <>
      <Navbar />
      <Header text="Our Policies" img={bgImage} />
      {/* <section className="pgcontainer policygrid">
        {policiesList.map((policy, i) => {
          return (
            <Link to={`/policies/${policy.id}`}>
              <div className="policybox"  >
                <h1>{policy.title}</h1>
                <p style={{textAlign:'left'}}>{policy.content}</p>
              </div>
            </Link>
          );
        })}
      </section> */}
      <Footer />
    </>
  );
};

export default policies;
