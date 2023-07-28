import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuZGFuYSUyMHBjJTIwZnVsbCUyMHNjcmVlbiUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        className="home-pic"
        alt="home"
      />
      <div className="picture-text">
        <h1>JOIN JEP ROBERTSON AND CHANGE A CHILD'S LIFE!</h1>
        <h3>WILL YOU JOIN JEP AND GIVE A CHILD HOPE THROUGH SPONSORSHIP?</h3>
        <button id="sponsor-bt" className="btn btn-danger">
          SPONSOR A CHILD
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
          <button className="btn btn-danger">SPONSOR A CHILD'S EDUCATION</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
