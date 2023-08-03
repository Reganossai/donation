import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Debunked = () => {
  return (
    <div>
      <Navbar />
      <div className="about-sub-div">
        <h1>TOP MYTHS ABOUT ADOPTING A CHILD: DEBUNKED!</h1>

        <h5>
          Adoption can be confusing. With so much information available from so
          many different sources, it’s hard to know what’s what. We’re here to
          help! We’ve addressed the seven most common myths about adoption
          below.
        </h5>

        <h6>1. I can’t afford to adopt.</h6>

        <h5>
          Adoption costs can feel really overwhelming. The good news is that
          there are so many adoption grants and financing options that can help
          make adoption possible for your family. In the last two years alone,
          AGCI families have received over 1 million in adoption grants! The
          Brittany’s Hope Grant and the AGCI Adoption Grant Fund are adoption
          grants available through AGCI to help families with adoption costs.
          There are also dozens of other organizations that provide adoption
          grants and aid to adopting families, as well as tax credits and
          military subsidies. To learn more about available adoption assistance,
          please begin your journey with us by completing a pre-app.
        </h5>

        <h6>2. International adoption isn’t ethical.</h6>

        <h5>
          Sadly, not all agencies provide ethical adoptions. However, adoption
          through All God’s Children is always ethical. We are a Hague
          accredited agency and are dedicated to ensuring that all of our
          adoption programs are completely ethical and held to the highest
          standards. As an orphan care ministry, we are passionate about finding
          families for children, not children for families. The wellbeing of the
          child is always our first priority and we always seek to reunite or
          preserve families whenever possible before we consider adoption for a
          child.
        </h5>

        <h6>3. Adoption takes too long.</h6>

        <h5>
          Adoption—like most things—does not happen overnight! However, there
          are some ways for the process to go a little faster. Wait time
          significantly decreases based on a family’s openness to special needs,
          older children, and sibling groups. AGCI will also provide paperwork
          calls to help families reach their goals and finish the paperwork
          process as quickly as possible! For more information on the country
          programs that currently have the shortest wait times, please reach out
          to us at inquiry@allgodschildren.org for more information.
        </h5>

        <h6> 4. Relatives may find my child and take them back.</h6>

        <h5>
          Legally, this isn’t possible. Once final, adoption is permanent and
          irrevocable. Before a child can be placed with a family, they must
          first be legally relinquished by their birth parents or go through the
          abandonment process. To go through the abandonment process, the
          central authority needs to show that they have tried to contact all
          biological family members before the child can be placed for domestic
          or international adoption. If the family is responsive to contact,
          they must then decide that they are unable to care for the child or
          the government may reach this conclusion as well.
        </h5>
        <h6>
          5. The only children eligible for adoption have very severe special
          needs or are older..
        </h6>
        <h5>
          The term “special needs” can seem scary or overwhelming at first. It’s
          important to keep in mind that certain special needs labels can look
          very different for every child. For example, cerebral palsy does not
          progress with age and there is a very wide range of what this can look
          like; many children are still able to walk, etc. It’s also important
          to remember that all of the children eligible for adoption have
          experienced trauma by the sheer fact that they are not being raised in
          their biological family. AGCI’s adoption training platform, Families
          Are Forever, takes all of these factors into account and prepares
          families to parent children from all backgrounds.
        </h5>

        <h6> 6. Single parents can’t adopt.</h6>

        <h5>
          There are so many adoption opportunities for single women! We have
          adoption programs for single women in Bulgaria, China, Colombia,
          Ecuador, Haiti, South Africa and the Philippines! For more information
          on program eligibility, please fill out a free pre-app!
        </h5>

        <h6> 7. My health disqualifies me from adopting.</h6>
        <h5>
          Health conditions are considered on a case-by-case basis and many
          countries have different rules regarding physical and mental health
          conditions. Many countries are moving toward accepting these diagnoses
          if the condition is “mild” or well controlled. In most cases, if a
          doctor endorses the adoptive parent as being stable and able to adopt,
          there are not any issues.
        </h5>

        <h5>
        Do you have more questions about adoption? fill out a pre-app now to  begin your journey!
        </h5>
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

export default Debunked;
