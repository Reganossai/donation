import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import bed from "../assets/bed-1.jpeg";

const Home = () => {
  return (
    <div className="homepage-div">
      <Navbar />
      <img
        src={bed}
        className="home-pic"
        alt="home"
      />
      <div className="picture-text">
        <h1>JOIN JEP ROBERTSON AND CHANGE A CHILD'S LIFE!</h1>
        <h3>WILL YOU JOIN JEP AND GIVE A CHILD HOPE THROUGH SPONSORSHIP?</h3>
        <button id="sponsor-bt" className="btn btn-danger">
          <Link to='/sponsor'>SPONSOR A CHILD</Link>
        </button>
      </div>

      <div className="all-God">
        <h1>
          <b>ALL GOD’S CHILDREN INTERNATIONAL</b>
        </h1>
        <h1 className="all-God-sub">
          “RELIGION THAT GOD OUR FATHER ACCEPTS AS PURE AND FAULTLESS IS THIS:
          TO LOOK AFTER ORPHANS AND WIDOWS IN THEIR DISTRESS…” JAMES 1:27
        </h1>
      </div>

      <div className="intervene">
        <h1>
          WE'RE <span className="red">INTERVENING</span> FOR THE{" "}
          <span className="eight-mill">8 MILLION ORPHANS</span> LIVING IN
          INSTITUTIONS.
        </h1>
      </div>

      <div className="we-do">
        <h1>WE DO THIS IN FIVE WAYS</h1>
        <div className="we-do-sub">
          <div className="we-do-sub-sub">
            <img src="https://allgodschildren.org/wp-content/uploads/2021/04/icon-prevent-new.png" />
            <p>
              We prevent more children from ever entering institutions by
              stabilizing families.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://allgodschildren.org/wp-content/uploads/2020/07/icon-provide.png" />
            <p>
              We provide family-like care by collaborating with institutions and
              training caregivers in our holistic model.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://allgodschildren.org/wp-content/uploads/2020/07/icon-place.png" />
            <p>
              We place orphans into loving foster and adoptive families in the
              US and abroad.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://allgodschildren.org/wp-content/uploads/2020/07/icon-prepare.png" />
            <p>
              We prepare aging out orphans to thrive outside of an institution
              through education and mentorship
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://allgodschildren.org/wp-content/uploads/2020/07/icon-policy.png" />
            <p>
              We create policy to change broken systems for orphans and create
              clear paths to family and independence.
            </p>
          </div>
        </div>
      </div>
      <div className="this-work">
        <h1>THIS WORK CHANGES LIVES</h1>
      </div>

      <div className="berh">
        <img
          src="https://allgodschildren.org/wp-content/uploads/2017/01/Home-Prevent-Berhe.jpg"
          className="berhe"
          alt="berhe"
        />
        <div className="berh-sub">
          <h1>PREVENT</h1>
          <p>
            17-year-old Berhe has hope for a bright future thanks to the support
            he’s received through AGCI’s Education Sponsorship program in
            Ethiopia! Tragically, Berhe’s mother passed away and his father
            disappeared when he was very young. Berhe and his four siblings live
            with their older sister and her family—remarkably, 10 people live in
            their small, one-room home. For the past 8 years, Berhe’s education
            has been fully sponsored—this support has allowed Berhe to attend
            school, remain with his siblings and follow his dream of attending
            university to become a doctor!
          </p>
          <button id="spons-bt" className="btn btn-danger">
            <Link to="/sponsor">SPONSOR A CHILD'S EDUCATION</Link>
          </button>
        </div>
      </div>

      <div className="news-around">
        <h1>NEWS AROUND THE WORLD</h1>
        <div className="news-flex">
          <div className="news-sub-flex">
            <img src="https://allgodschildren.org/wp-content/uploads/2023/06/Home1-300x300.png" />
            <div className="news-sub-sub">
              <h5>HOUSE OF HOPE COLOMBIA</h5>
              <p>
                We are preparing to launch the AGCI & the Tim Tebow Foundation
                House of Hope Colombia later this year! This house will be part
                of our Independence Program serving young women aging out of the
                child welfare system.
              </p>
            </div>
          </div>

          <div className="news-sub-flex">
            <img src="https://allgodschildren.org/wp-content/uploads/2023/06/Home2-300x298.png" />
            <div className="news-sub-sub">
              <h5>NEW ADOPTION PROGRAM</h5>
              <p>
                We are thrilled to announce the opening of our Dominican
                Republic adoption program, and we are excited to pursue
                accreditation in other countries around the world!
              </p>
            </div>
          </div>

          <div className="news-sub-flex">
            <img src="https://allgodschildren.org/wp-content/uploads/2023/06/Home3-300x300.png" />
            <div className="news-sub-sub">
              <h5>FOREVER FAMILIES</h5>
              <p>
                Since the beginning of this year, AGCI has helped nearly two
                dozen children be united with their forever families through the
                miracle of adoption!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="adoption-res">
        <h1>ADOPTION RESOURCES</h1>
        <div className="adoption-sub">
          <div className="adoption-sub-sub">
           <Link to="/five">
            <img
              src="https://allgodschildren.org/wp-content/uploads/2018/10/top-5-adoption-myths.png"
              alt="cop"
            />
            <h5>TOP 5 REASONS TO CHOOSE AGCI</h5>
            </Link>
          </div>

          <div className="adoption-sub-sub">
          <Link to="/god-provides">
            <img
              src="https://allgodschildren.org/wp-content/uploads/2018/10/god-provides.png"
              alt="cop"
            />
            <h5>GOD PROVIDES</h5>
            </Link>
          </div>

          <div className="adoption-sub-sub">
            <Link to="/debunked">
            <img
              src="https://allgodschildren.org/wp-content/uploads/2018/10/debunking-7-most-common-adoption-myths.png"
              alt="cop"
            />
            <h5>DEBUNKING THE 7 MOST COMMON ADOPTION MYTHS</h5>
            </Link>
          </div>

          <div className="adoption-sub-sub">
            <Link to="/ten">
            <img
              src="https://allgodschildren.org/wp-content/uploads/2018/10/top-10-adoption-questions-answered.png"
              alt="cop"
            />
            <h5>TOP 10 ADOPTION QUESTIONS ANSWERED</h5>
            </Link>
          </div>

          <div className="adoption-sub-sub">
            <Link to="/myths">
            <img
              src="https://allgodschildren.org/wp-content/uploads/2018/10/top-5-adoption-myths.png"
              alt="cop"
            />
            <h5>TOP 5 MYTHS ABOUT ADOPTION</h5>
            </Link>
          </div>
        </div>
      </div>

      <div className="submit-pre-app">
        <h1>
          <span>
            <img
              src="data:image/png;base64,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"
              alt="clipboard"
              className="clipboard"
            />
          </span>
          <Link to="/preapp">SUBMIT A FREE PRE-APP</Link>
        </h1>
      </div>
<Footer/>
    </div>
  );
};

export default Home;
