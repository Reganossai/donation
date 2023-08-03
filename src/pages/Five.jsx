import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Five = () => {
  return (
    <div>
      <Navbar />
      <div className="about-sub-div">
        <h1>HOW TO CHOOSE YOUR ADOPTION AGENCY</h1>

        <h5>
          So why should you adopt through AGCI? We’ve compiled the top 5 reasons
          to adopt through All God’s Children International.
        </h5>

        <h6>#1) We’re so much more than an adoption agency!</h6>

        <h5>
          AGCI is dedicated to intervening for the 8 million orphans living in
          institutions. We believe that every child deserves to be loved, and
          we’re working to change the system that keeps children in institutions
          and out of families. By elevating the standard of care, and creating
          more pathways to family, we’re able to create real, lasting change for
          His children!
        </h5>

        <h6>#2) Financial Guidance</h6>

        <h5>
          At AGCI, we believe that cost should never prevent a child from
          uniting with their loving forever family! To make this a reality, we
          always try to minimize fees as much as possible and seek to prevent
          finances from being a barrier in adoption. We’re also committed to
          assisting families in utilizing all of the grants and resources
          available to them. In the last two years, over 1 million dollars in
          adoption grants have been awarded to AGCI families. Additionally,
          AGCI’s Financial Adviser is here to help! Additionally, AGCI’s
          Financial Adviser is here to help! Our Financial Adviser is here to
          guide you through the often stressful aspects of financing your
          adoption.
        </h5>

        <h6>#3) Personalized Support</h6>

        <h5>
          Our experienced, dedicated team is committed to walking every step of
          your adoption journey with you. We have over 29 years of experience
          working in over 24 countries and are truly passionate about the
          children we serve. Adoption is not always easy, but it’s much easier
          when you have a supportive team on your side! Our team will always
          strive to be your advocate and ensure you are well prepared throughout
          the process.
        </h5>

        <h6>#4) We Know Many of The Kids We Advocate For</h6>

        <h5>
          AGCI has established relationships with many of the orphanages we work
          with. This allows us to personally meet many of the children we are
          advocating so we truly get to know these kids! Additionally, our close
          relationship with the directors allows us to acquire medical updates,
          updated photos, and videos, and additional tests for children we are
          placing with families!
        </h5>

        <h6>#5) Communication</h6>

        <h5>
          At AGCI, we are committed to providing the absolute best in adoption
          and post-adoption support. Our team checks in regularly with
          in-process families during the paperwork process to ensure their needs
          are met and all questions are addressed. We pride ourselves on being
          as transparent as possible at every stage of the adoption process—from
          timelines to fees. We work hard to ensure families have accurate,
          updated information and know they are always welcome to check-in and
          call. We are dedicated to ensuring our families are never alone and
          are very well supported with an experienced team no matter which phase
          of the process they happen to be in.
        </h5>

        <h6>Ready to get started? Submit our free <span><Link to="/preapp">pre-app</Link></span> to begin the process! </h6>
      </div>

      <Footer/>
    </div>
  );
};

export default Five;
