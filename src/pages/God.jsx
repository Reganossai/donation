import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const God = () => {
  return (
    <div>
      <Navbar />
      <div className="about-sub-div">
        <h1>God Provides</h1>

        <h6>
          “Trust in the Lord with all your heart and lean not on your own
          understanding.” Proverbs 3:5{" "}
        </h6>

        <h5>
          We’re often asked how families can make adoption a more affordable
          option. And while there are many ways—tax credits, grants,
          fundraising, loans, the list goes on—the biggest factor for so many
          AGCI families has always been trusting God and trusting the process.
          If He is telling you to go, He will find a way to make the finances
          align at the right time!
        </h5>

        <h6>
          Below is a letter of gratitude from an AGCI family that trusted the
          process and trusted God’s journey to their sons.
        </h6>

        <h5>
          To Whom It May Concern, Like many things in life, adoption is scary.
          There are so many leaps of faith involved, and you have no choice but
          to hope and pray for the best. When we adopted Oliver, we were
          concerned about the finances, but God provided for us when we sold our
          house and were able to put some of the equity toward our adoption
          expenses. We knew we would face some medical expenses, but we set
          aside the money and moved forward. When we met Oliver, we immediately
          saw thatthere was more to his medical situation than what was recorded
          in his file, and we were devastated: we knew he would need more
          surgeries than anticipated. How would we finance this? Thank goodness
          we serve a big God who isn’t thrown off by details such as this! While
          we were still in the midst of paying medical bills, we decided to move
          forward and begin the process for adoption number two—yet we really
          had no idea how we were going to afford to add another member to our
          family. God has a plan, and we have been blessed to have Oliver’s
          surprise medical expenses paid for by a generous donor. How humbling
          it has been to receive such a blessing from a stranger!
        </h5>

        <h6>
          Our first adoption taught us that, while we may not know how He will
          do it, God will provide for us.
        </h6>

        <h5>
          As we anticipate meeting our second son with excitement, we know that
          we are once again entering a serious medical situation. We are still
          trying to fundraise to bring him home all the while wondering how will
          we pay for his extensive medical care on top of the adoption expenses?
        </h5>

        <h6>
          We don’t know the answer to this question, but we do know one thing:
          this is our son, and we will figure it out.
        </h6>

        <h5>
          This grant will help immensely towards funding his adoption, leaving
          room in our savings to begin the life-saving treatments needed upon
          returning home.
        </h5>

        <h5>
          We are so blessed to live in a city with wonderful medical care—and we
          are thrilled that one of the best pediatric cardiologists is only two
          hours from our home. In fact, he is the world’s utmost leader in the
          treatment and repair of our son’s specific heart defect. This is not a
          coincidence; he needs to come home. We have requested to have our
          adoption expedited due to the severity of his heart condition. This
          was unforeseen and has left us less time to fundraise than originally
          planned, as well as less time to get our home ready to welcome another
          son. We know that much of the cost of adoption happens in and around
          the travel portion and that funds are so very needed during this part
          of the process.
        </h5>
        <h6>
          We know that God has a plan to work out all of the finances. We praise
          Him that He will equip us with what we need to carry out this calling.
        </h6>
        <h5>
          We haven’t yet met our son, but we are already praying for him in so
          many ways; that God will protect his heart from the trauma he is about
          to encounter emotionally, and for the healing that must physically
          take place for him to grow strong. We pray that God provides us with
          the endurance that we need to tackle another medical marathon. And
          finally, we pray that God provides us with the finances we need to
          bring him home as soon as possible.
        </h5>
        <img src="https://allgodschildren.org/wp-content/uploads/2018/10/Fall-2015-1024x762-1-300x223.jpeg" className="ggg" alt="opp"/>
        <h5>
          We are so grateful for this agency and its role in building our
          family. We are also grateful to the many donors that make it possible
          for families like ours to finally realize the dream of a family.
        </h5>
        <h5>Sincerely,</h5>
        <h5>Nathanael & Lindsey Williams</h5>
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

export default God;
