import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bed from "../assets/bed.jpeg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pre-up">
        <img src={bed} className="preapp" alt="preapp" />
        <div className="about-sub-div">
          <h1>ABOUT AGCI</h1>

          <h6>OUR MISSION</h6>
          <h5>
            All God’s Children International is an orphan care ministry
            answering God’s call to provide the love and care that every child
            deserves.
          </h5>

          <h6>OUR VISION</h6>
          <h5>
            Our vision is to empower local leaders to intervene for the millions
            of children currently living in institutions and create more paths
            to faith, family, and independence.
          </h5>

          <h6>OUR WHY</h6>
          <h5>
            As a faith-based organization, it is our prayer that God’s calling
            to care for His children inspires the Body of Christ to come
            alongside us in this transformational work. Jesus showed us the
            perfect example of healing first by connecting with people,
            empowering us with the Holy Spirit, and always correcting in love.
            All God’s Children International is motivated by our faith to be a
            part of the bigger story of hope and restoration that God is weaving
            together.
          </h5>

          <h6>OUR STATEMENT OF FAITH</h6>
          <h5>
            All God’s Children International believes… …the Bible is the sole,
            inerrant and infallible Word of God, verbally inspired by Him, and
            is the only and final authority for the Christian faith and life
            …that there is one triune God, as revealed in the Bible, eternally
            existent in the persons of the Father, the Son, and the Holy Spirit.
            These three are one in essence, but distinct in person and function:
            …God the Father is the first person of the Trinity. As infinite
            Spirit, He is the source, support, and end of all things. He is the
            designer of creation, speaker of revelation, the author of
            redemption, and the sovereign of history. …Jesus Christ is the
            second person of the Trinity. In His incarnation, He was fully God
            and fully man. By His virgin birth, sinless life, miracles,
            vicarious and atoning death through His shed blood, and His bodily
            resurrection, He became the physical manifestation of the Godhead
            and Savior to mankind. …the Holy Spirit is the third person of the
            Trinity. He is the agent of conviction, salvation, indwelling,
            baptism, sanctification, and illumination of all who are born into
            God’s family through Jesus Christ. …that any man can receive the
            free gift of salvation and eternal life through the saving power of
            the Holy Spirit, by repentance of sin and by placing personal faith
            in the person and finished work of Jesus Christ as Lord and Savior.
            …in the resurrection of both saved and unsaved people. The saved are
            resurrected into eternal, conscious fellowship with the Lord and the
            unsaved are resurrected into eternal separation. …in the spiritual
            unity of believers through the indwelling power of the Holy Spirit
            which brings all believers into union with Jesus Christ and with His
            body, the church. …that the scriptural practices of the church,
            given by the Lord, are Baptism and Communion. …that God has ordained
            the local church for the perpetuation of His truth and work in the
            world
          </h5>

          <h1>OUR STORY</h1>

          <h6>WE PUT CHILDREN FIRST</h6>
          <h5>
            AGCI was founded in 1991 by the Beazely family. Ron and Jan Beazely
            had a calling from God that their youngest child would join their
            family through adoption. When their oldest daughter, Heather, was
            just 18 years old, she traveled alone to war-torn Romania to
            complete the adoption of her youngest sibling, Hannah, for her
            parents. As Heather and Hannah came off the plane in Portland, news
            media was present. In an interview with reporters, Heather said that
            she would help anyone who wanted to help a child. The next day, the
            Beazely family’s phone started to ring with families wanting to
            adopt. With that, All God’s Children International was born! When
            Hannah was six years old, she traveled back to Romania and walked
            through the door of the institution she would have been placed in if
            her story had been different. Seeing the deplorable conditions,
            Hannah said that no child should ever have to live in a place like
            it. Over the next 30+ years, AGCI would care for thousands of
            children and unite over 4,500 of them with their forever families.
            The organization went on to transform the lives of children and
            families in over 25 countries across five continents.
          </h5>

          <h6>GOD CALLED US TO MORE</h6>

          <h6>
            People should know the size of our God by the size of our vision.{" "}
          </h6>

          <h5>
            In 2016, AGCI President, Hollen (Beazely) Frazier walked into an
            orphanage in Haiti where she saw children in cages from the floor to
            the ceiling. Every child was despondent and sitting in urine-soaked
            clothes. Hollen instantly flashed back to the day 20 years earlier
            when she walked in her first government-run institution in Bulgaria.
            She felt devastated that nothing had really changed. AGCI had been
            serving vulnerable children and families for 25 years, and yet
            millions of children were still languishing in institutions like
            that one. Hollen left that day promising the Lord to believe and
            trust Him for more. Soon after, AGCI launched our very first Child
            Advocacy Center in Colombia with a vision to empower local leaders
            to create paths to faith, family, and independence. AGCI knew the
            solution had to be holistic and that we had to intervene at every
            step in the cycle that keeps children trapped in institutions and
            out of families. Today, we are honored to partner with countries
            around the world doing this work that God has called us to!
          </h5>
        </div>
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

export default About;
