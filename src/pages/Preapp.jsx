import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useHistory,Link} from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import bed from "../assets/bed.jpeg";

const Preapp = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    state: "",
    income: "",
    spouseFirstName: "",
    spouseLastName: "",
    spouseDob: "",
    yearsMarried: "",
    message: "",
    married: false,
    citizen: false,
    yesOrNo: "maybe",
    yessOrNoo: "maybe",
    yesssOrNooo: "maybe",
    immediately: "maybe",
  });

  const result = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dob: formData.dob,
      state: formData.state,
      income: formData.income,
      spouseFirstName: formData.spouseFirstName,
      spouseLastName: formData.spouseLastName,
      spouseDob: formData.spouseDob,
      yearsMarried: formData.yearsMarried,
      message: formData.message,
      married: formData.married,
      citizen: formData.citizen,
      yesOrNo: formData.yesOrNo,
      yessOrNoo: formData.yessOrNoo,
      yesssOrNooo: formData.yesssOrNooo,
      immediately: formData.immediately,
    };

    axios({
      method: "post",
      url: "https://formspree.io/f/xpzgqknp",
      data: body,
    })
      .then((response) => {
        if (response.data.success === true) {
          console.log(response.data);
          history.push("/");
        } else {
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Form submission failed. Please try again later.");
      })
      .finally(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dob: "",
          state: "",
          income: "",
          spouseFirstName: "",
          spouseLastName: "",
          spouseDob: "",
          yearsMarried: "",
          message: "",
          married: false,
          citizen: false,
          yesOrNo: "maybe",
          yessOrNoo: "maybe",
          yesssOrNooo: "maybe",
          immediately: "maybe",
        });

        setLoading(false);
      });
  };

  if (loading) {
    return <h1 className="login-loading">Please wait...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="pre-up">
        <img
          src={bed}
          className="preapp"
          alt="preapp"
        />
        <div className="preapp-sub-div">
          <h1>CONGRATS ON TAKING THE FIRST STEP IN YOUR ADOPTION JOURNEY!</h1>
          <h5>
            AGCI’s Preliminary Application is provided at no cost and with no
            obligation in order to help determine which adoption programs are
            the best fit for your family. Our Adoption Advisor will review your
            Preliminary Application within one business day and will reach out
            to you to answer any questions and discuss the next steps in your
            adoption journey.
          </h5>
          <h3>THANK YOU FOR THE OPPORTUNITY TO SERVE YOU!</h3>
          <p>
            Please confirm you qualify for these two conditions to continue:
          </p>
        </div>
        <form onSubmit={result} className="formal">
          <p>If married age 23 or older, if single 25 or older?</p>
          <div className="inp-1">
            <input
              id="married"
              type="checkbox"
              name="married"
              checked={formData.married}
              onChange={handleChange}
            />
            <span className="span-one">Yes</span>
          </div>

          <p>Is at least one parent a U.S. citizen?</p>
          <div className="inp-1">
            <input
              id="citizen"
              type="checkbox"
              name="citizen"
              checked={formData.citizen}
              onChange={handleChange}
            />
            <span className="span-two">Yes</span>
          </div>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>

            <div className="inp-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>

            <div className="inp-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone number"
              />
            </div>

            <div className="inp-2">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                placeholder="Alabama"
              />
            </div>

            <div className="inp-2">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="text"
                id="dob"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="income">Yearly Income</label>
              <input
                type="text"
                id="income"
                name="income"
                required
                value={formData.income}
                onChange={handleChange}
                placeholder="$40,000"
              />
            </div>
          </div>

          <p>Have you ever been arrested?*</p>
          <div className="radio-two">
            <label>
              <input
                type="radio"
                name="yesOrNo"
                value="yes"
                checked={formData.yesOrNo === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="yesOrNo"
                value="no"
                checked={formData.yesOrNo === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <p>
            Do you have a current and/or past medical or mental health
            diagnosis?*
          </p>
          <div className="radio-two">
            <label>
              <input
                type="radio"
                name="yessOrNoo"
                value="yes"
                checked={formData.yessOrNoo === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="yessOrNoo"
                value="no"
                checked={formData.yessOrNoo === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <p>Are you open to adopting a child age 6+?*</p>
          <div className="radio-three">
            <label>
              <input
                type="radio"
                name="yesssOrNooo"
                value="yes"
                checked={formData.yesssOrNooo === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="yesssOrNooo"
                value="no"
                checked={formData.yesssOrNooo === "no"}
                onChange={handleChange}
              />
              No
            </label>
            <label>
              <input
                type="radio"
                name="yesssOrNooo"
                value="let's Discuss"
                checked={formData.yesssOrNooo === "let's Discuss"}
                onChange={handleChange}
              />
              let's Discuss
            </label>
          </div>

          <p>When are you wanting to begin your adoption?*</p>
          <div className="radio-three-big">
            <label>
              <input
                type="radio"
                name="immediately"
                value="immediately"
                checked={formData.immediately === "immediately"}
                onChange={handleChange}
              />
              Immediately
            </label>
            <label>
              <input
                type="radio"
                name="immediately"
                value="6 months"
                checked={formData.immediately === "6 months"}
                onChange={handleChange}
              />
              6 months
            </label>
            <label>
              <input
                type="radio"
                name="immediately"
                value="12 months"
                checked={formData.immediately === "12 months"}
                onChange={handleChange}
              />
              12 months
            </label>
          </div>

          <h3>
            (<b>If Single</b>,leave blank)
          </h3>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="spouseFirstName">Spouse's First Name</label>
              <input
                type="text"
                id="spouseFirstName"
                name="spouseFirstName"
                value={formData.spouseFirstName}
                onChange={handleChange}
                placeholder="Spouse's First Name"
              />
            </div>

            <div className="inp-2">
              <label htmlFor="spouseLastName">Spouse's Last Name</label>
              <input
                type="text"
                id="spouseLastName"
                name="spouseLastName"
                value={formData.spouseLastName}
                onChange={handleChange}
                placeholder="Spouse's Last Name"
              />
            </div>

            <div className="inp-2">
              <label htmlFor="spouseDob">Spouse's Date Of Birth</label>
              <input
                type="text"
                id="spouseDob"
                name="spouseDob"
                value={formData.spouseDob}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>

          <div className="three-flex">
            <div className="inp-2">
              <label htmlFor="yearsMarried">
                How Many Years Have You Been Married
              </label>
              <input
                type="text"
                id="yearsMarried"
                name="yearsMarried"
                value={formData.yearsMarried}
                onChange={handleChange}
                placeholder="10"
              />
            </div>
          </div>

          <p>Are there any comments or notes you'd like us to consider?</p>
          <div className="inp-3">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" id="submit-bttt" className="btn btn-danger">
            <h5>SEND</h5>
          </button>
        </form>
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

      <Footer/>
    </div>
  );
};

export default Preapp;
