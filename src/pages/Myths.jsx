import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Myths = () => {
  return (
    <div>
      <Navbar />
      <div className="about-sub-div">
        <h1>COMMON CHRISTIAN ADOPTION MYTHS</h1>

        <h5>
          Adopting a child is both an exciting and at times overwhelming
          journey. However, miscommunication and asking the wrong questions can
          make this life changing decision even more stressful than it needs to
          be! We’re busting the top 5 myths about adoption to help make the
          process a little easier!
        </h5>

        <h6>
          1. The children shown in photo listing are the only children that an
          agency places.
        </h6>

        <h5>
          This is one of the top mistakes that families make when deciding to
          begin their adoption journey. Often, families feel discouraged because
          the children they see on these pages do not feel like a good fit for
          their family. The reality is, most children on waiting kids sites are
          there because when they became eligible for adoption, the agency did
          not yet have a family identified to match them with. These children
          are a very small percentage of the children that an agency places—many
          children with minor special needs never even appear in photo listings.
          Most of the children adoption agencies place are not considered
          waiting children. Many younger children, or children who have what is
          considered a minor special need, are often matched with families
          already in the adoption process.
        </h5>

        <h6>2. Adoption is only for wealthy families.</h6>

        <h5>
          Adoption costs can feel overwhelming. However, it’s important to
          remember that the fees are not all due at once. There are milestones
          throughout the process which helps fees to be more spaced out. At
          AGCI, we also believe that children need love and commitment to thrive
          and families who can meet their needs–this does not necessarily
          correlate to wealth. Contrary to popular belief, families in all
          income brackets are able to adopt! Over our 27+ years of experience
          uniting families, we have seen families be creative in countless ways
          in regards to fundraising and securing resources. We have also
          witnessed countless stories of God providing to meet families’ needs.
          Don’t let the cost deter you–if you feel called to adopt, God will
          help you find a way!
        </h5>

        <h6>
          3. If many families are enrolled in an adoption program, it must be
          fast moving.
        </h6>

        <h5>
          We wish this were true! The number of families enrolled in a program
          can impact wait time. Always ask an agency what the most recent
          timelines in a particular country program have been. While these can
          often change due to unforeseen factors, they are the best estimate of
          what your family’s wait time will be. As always, your family’s
          openness to special needs, older children, and sibling groups can
          greatly expedite the adoption process.
        </h5>
        <h5>
          At AGCI, our smaller program sizes allow for close, personal
          relationships with each team member and for us to get to better know
          our families and make better matches. Case workers quickly become your
          advocate and “family”! 86% of our placements in our China program were
          made in less than 2 years and almost half were made in less than 1
          year. Many families adopting through this program have completed their
          adoptions within one year and some have even brought their children
          home in less than 6 months! Additionally, our team is committed to a
          well-supported referral process to ensure our families are very
          prepared and have as much information as possible when it comes time
          to make referral decisions.
        </h5>

        <h6>
          {" "}
          4. Adoption support isn’t necessary. I’d rather handle everything
          myself.
        </h6>

        <h5>
          While a can-do attitude is essential to becoming an adoptive parent,
          there’s no substitute for an agency and caseworker that are
          experienced and truly understand what you’re going through. Your
          adoption isn’t over once your child is home; it’s a lifelong journey
          with it’s own set of joys and challenges. Working with an agency that
          will support you through the ups and downs of the waiting process,
          in-country travel and the questioning teenage years on the horizon is
          not just helpful; it’s essential. Long past the “gotcha day”, your
          adoption agency can put you in touch with counselors, educational
          tools, and other families that have adopted from your child’s birth
          country to help make your child’s transition home smoother and
          happier.
        </h5>

        <h5>
          At AGCI, we’ve been uniting children with their loving forever
          families for over 25 years! We are committed to providing the absolute
          best in adoption and post adoption support. Our team calls in process
          families every other week during the paperwork process to ensure their
          needs are met and all questions are addressed. Additionally, our
          in-country teams are phenomenal! During the often overwhelming travel
          stage of the adoption process, our in-country staff will arrange for
          guides, drivers, and translators. We are dedicated to ensuring our
          families are never alone and are very well supported with an
          experienced team no matter which phase of the process they happen to
          be in.
        </h5>
        <h6>
          5. There aren’t really any grants or financial resources available to
          adoptive families.
        </h6>
        <h5>
          This is simply not true! At AGCI, we are committed to minimizing fees
          whenever possible and also work to be truly transparent about fees. We
          also structure all fees to be flexible so that families are able to
          pay over time. Additionally, there are so many adoption grants and
          financing options that can help make adoption possible for your
          family. In the last two years alone, $760,608 in adoption grants were
          awarded to AGCI families. The AGCI Adoption Grant Fund and the
          Brittany’s Hope Grant are adoption grants available through AGCI to
          help families with adoption costs. There are also dozens of other
          organizations that provide adoption grants and aid to adopting
          families, as well as tax credits and military subsidies. To learn more
          about available adoption assistance, please begin your journey with us
          by completing a pre-app.
        </h5>

        <h6> 6. Single parents can’t adopt.</h6>

        <h5>
          There are so many adoption opportunities for single women! We have
          adoption programs for single women in Bulgaria, China, Colombia,
          Ecuador, Haiti, South Africa and the Philippines! For more information
          on program eligibility, please fill out a free pre-app!
        </h5>

      </div>

      <div className="submit-pre-app">
        <h1>
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACmCAMAAACIlG97AAAAbFBMVEX///8jHyAAAAAdGBoaFRZEQUKBgIDg3+AfGxz6+vqQjo87ODgRCgyLioobFxjs7Oza2tmcm5t2dnY/PT1dXV2+vb319PTV1NQMAASVlJRtbGyop6cuKyzm5uazsrIIAABmZGXIx8hLSkpTUVEbL+OrAAAHLUlEQVR4nO2c65aqOBBGTRExNBEUkftV3/8dBxKwg4ANmKAzw/fjrF7t6axtLpVKVSW73aZNmzZt2rRp06ZNm/7nMvzsfC7TT2P8JVtPoNLt/GmQ17KTnGiUEgzHT6O8khEBgktUWBjl2adhXuiKEUSp510vGO+9T9OM6wewa9c/lAiB/2maRob3LDuiAV9Axk2DuP8fjPUp7aPbV0LymHPeNW1f9D4vrqtjQoD7QohGbFr6CUGk/zmFtUEjiobFBv5QjHxMo3Uxvbs1wkmCIjzux74FdlecotX6SEc5K5acaqOfufY6y6nevvWoKJJRzNdKiqKIjvFVrQNgxG6CIaDVzriQk1R/S3NAe6dURmn/AOClgE/SKJilmvGPLyCHsREFR8HoGzrFUjErwe0kG/Nw++1MCy+fn6j629+5g2XbffuWN01rAObdLcyloPfCrfb+1r5aIHU5eS60lOjnYNueES2cBJB5tp2WRUuKLxKH3nAaTHprxsm+jZryPzh/mgZ0xL8pvdvSOK8NJhzbNstk4bjTe+s+XxtQCKVxIrZJEogfv4mDZZiVnX9034mDEpDVoSHvTvyLaehLOZGwwn0+KIEjB9Pes7kY6Ibwq8W2FPTflmPWAeRykMKZsb7TkLDLHZbvTHgvNH1hX5dKOZp6DjMhIDZmJ+Nu3V/9KXrKJfu+zRngTaVmzYRNcbYbIWBrkfLOMZTPH8uUsZJ89p2frUe2vyyRWXRPy3yJgowJmvGxUXMAu/I5JaNxtihJosat5fsFyIia6TWnZkr3wJh85s9I2ZI4516OjXvWiXP+SGhq49xtnLL1X+GcsaF+krM0p7soH+P0d6ckp5P3l09xhqCbGGl46p76Ic4j4KD2z/FUz+IznEdwE350pvk0r+8TnIYOkXcwa1CMJs7QD3BWmI5df0iRdpm6kD7A6QD3oE5A6eQtYHVOFn3hoIc9nmyY1ubkQSLCQKuf46nB3LU5m1gWi744Mzz9QU4vBJBxmu1xetEjNABnB2ac7Ic4jSMQAgUHta+z1DnAPHM+IoMMdA7mIGeK6uYJn+I+ItP1dBZ65owETE2Iuy3k5HGbphTA1wYynaN6xemJmDiZd1oe4rQrD6E6K/OYgX8xZyjprIwOp+HkYm/OPIkPrqO4ssBtCYhhz1Jn9XU4u4M+N/YwbJd8XZcRZRM47ULEnB/XWMt+RsEbg75bi9N4b9B363CGXmfQp7pyHa3Amf90V/qi8N0KnCgRwv1asCzKuAanIA0tDIauy7lw0Hcrc2rL49Zrck4/rfc1wun7MqomupzLB303wpm61CISQuG+yKlp7+QThjiZWcYmL+9Iz7Mk2vAmh8ZF3supjPufzWQqA5gj8Sz09mY5ibPJS/p0jgQ/2RMPGRp50/8aHPd7UDvcfIKenDmKHjiGLmCSt3Ndg+uorKu625Y9Y4Z+i+v0zqC/7c0O2yXjmr2XPO32pva+063IzouYaKHr0W9QOuePiJnrf//Bn1LC2cH83rxM2K3b+FbOM5B/A+dTb34r57lX7PiVnLEw6ISlXr6S8yyad3S8KM7DpnG8qGIkFgqcCWSp4nyxv89ztGCvy0ATMM+q89p2feFAWxBXFAe9dgsVc3b9T2t6lFbAZNFixZypWHvl0zyYoO5lCsIzGYo5K0+cEGgqdtNwmu4CKAl47F113UWq53CfZ6oy8WjZ5oWU14cYaTovfZSBUIr5OCR9XR1LJmyW7eW03fdx+pbVH/Td93G6+cCg776Os7K3ZKA3v47Tucd4oDe/jfOEytadg7AT5vsuzjCp/omJ1q+c/SpOj3tWWWL1bpur5zSmh2ljVnfuxSTpFVGo5jRK3cmmkiIa7w5nuJ37O5hqzoxCDkcOOp4v5ltrBoQ6yCyH4lGq/eQ6MUWa9J6fWCPFC8zF9ApKLXckmr+Knxw0fjIZuzPFOK+Q6KNHKdV+MmalhE3cezzGfa6fbNBf5BsUcxohUNwWBnn+qOx69r5qXPl6j133qKJ+ablG7Kct5VbbV+1HL7RxytXGKVcbp1xtnHIlkfPIOGVepxfky+MM+b1INa8p+fLuRfJL1VjN/c0rC+dIuWfK7ypL+cp9neXd2+U109RV8dyX59Z1LFoi470Tjz+1pOS5rybOX0jpg5jF2jr362XJZTW0+az681E1NVvzqtkniU99abZEZx1KkOyRT2/82QNZb3HZPNQ2/YrNNKV3HrwFaVtI+zDH0hLSQR2at2hA3tNmtsvL4DRcyHqTxMiaa3ptlZ4UHS5NvV4Aenl414oY3im7tAlZS+pk8uERt6a3SD++JadIfpuTbEVK9KiAxLPq/ob0yMFrEh/haXRqn2CSKIrk2+SdrcPYK3/LRECVs3jHdPF7Mc/CNAmVvWR61U2A5W+YtbICwG6o8klA43A93umsOt8BJVHsy3ttaxz2baln3LRp06ZNmzbV+gdbyqDWn1IXsgAAAABJRU5ErkJggg=="
              alt="clipboard"
              className="clipboard"
            />
          </span>
          <Link to="/preapp">SUBMIT A FREE PRE-APP</Link>
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default Myths;
