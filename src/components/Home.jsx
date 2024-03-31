import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home1">
        <main>
          <h1>TechStart</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to icreace the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            We are a cutting-edge tech company dedicated to pushing the
            boundaries of innovation and driving digital transformation. With a
            team of passionate engineers, developers, and tech enthusiasts, we
            specialize in delivering bespoke solutions tailored to meet the
            unique needs of our clients across various industries. Our expertise
            spans a wide range of technologies, including AI, machine learning,
            blockchain, cloud computing, and more. Committed to excellence and
            client satisfaction, we leverage the latest advancements in
            technology to create impactful solutions that drive growth,
            efficiency, and success. At our core, we are driven by a relentless
            pursuit of excellence and a passion for pushing the frontiers of
            technology.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s"
                }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s"
                }}>
                <AiFillYoutube/>
                <p>Youtube</p>
                </div><div style={{
                    animationDelay: "1s"
                }}>
                <AiFillInstagram/>
                <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
