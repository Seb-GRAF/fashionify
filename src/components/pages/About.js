import "../../styles/About.scss";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  easing,
  fadeInUp,
  fadeInDown,
  fadeInRight,
  fadeInLeft,
} from "../animations/Variants";

const Section1 = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="section1" ref={ref}>
      <motion.div
        className="cta"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
              easing,
            },
          },
        }}
      >
        <motion.h1 variants={fadeInRight}>Who are we? </motion.h1>
        <motion.h3 variants={fadeInRight}>
          Fashionify focuses on fashionable and sustainable clothing with an
          affordable price tag. We are currently working with 2 different
          suppliers from Europe to provide incredible quality.
        </motion.h3>
      </motion.div>
      <img src={require("../../assets/about-main.jpg")} alt="about-main" />
    </div>
  );
};
const Section2 = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="section2" ref={ref}>
      <motion.div
        className="grid"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.5,
              easing,
            },
          },
        }}
      >
        <motion.p
          className="text1"
          variants={fadeInRight}
          whileHover={{
            scale: 1.05,
          }}
        >
          It’s about that upcoming party, the catch up with friends and all the
          excitement that comes with it. We put our customers at the heart of
          everything we do; this helps us to understand how they feel when
          searching for products and ultimately, making sure they feel great
          when wearing them, whatever the occasion.
        </motion.p>
        <motion.p
          className="text2"
          variants={fadeInLeft}
          whileHover={{
            scale: 1.05,
          }}
        >
          By reacting quickly to the latest trends and interpreting them in a
          way that’s wearable for our customers, we can help them find a look
          that fits their personal style. So whether they’re looking for the
          latest trends, or simply that perfect party dress, we’ve got it
          covered.
        </motion.p>
        <motion.p
          className="text3"
          variants={fadeInRight}
          whileHover={{
            scale: 1.05,
          }}
        >
          We love all things new and get as much of a buzz out of constantly
          updating our products as our customers do buying them. And with 50 new
          products uploaded online every month, we make sure that each time our
          customers visit Fashionify there’s something new to excite them.
        </motion.p>
        <motion.p
          className="text4"
          variants={fadeInLeft}
          whileHover={{
            scale: 1.05,
          }}
        >
          We’re passionate about what we do and most importantly, we have fun
          doing it. Sharing this positivity with our customers is important to
          us. By weaving our brand through everything we do, from our people and
          store environments, to marketing and social media, we make sure our
          customers not only look good but feel great too.
        </motion.p>
      </motion.div>
    </div>
  );
};
const About = ({ ScrollToTop }) => {
  return (
    <div className="about">
      <ScrollToTop />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default About;
