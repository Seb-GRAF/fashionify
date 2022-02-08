import React, { useEffect } from "react";
import "../../styles/Home.scss";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import products from "../products/products";
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
        <motion.h1 variants={fadeInLeft}>
          Fashion straight to your doorstep
        </motion.h1>
        <motion.h3 variants={fadeInLeft}>
          Get yourself fashionified without leaving your home
        </motion.h3>
        <Link to="/shop">
          <motion.div className="shop-button" variants={fadeInUp}>
            Shop Now
          </motion.div>
        </Link>
      </motion.div>
      <img src={require("../../assets/home-main2.jpg")} alt="home-main" />
    </div>
  );
};
const Section2 = () => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="section2"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
            easing,
          },
        },
      }}
    >
      <motion.h1 variants={fadeInUp}>Featured items</motion.h1>
      <div className="cards">
        <motion.div
          className="card"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <img src={products[31].image} alt="" />
          <p>{products[31].name}</p>
          <button className="add-to-cart">Add to cart</button>
        </motion.div>
        <motion.div
          className="card"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <img src={products[50].image} alt="" />
          <p>{products[50].name}</p>
          <button className="add-to-cart">Add to cart</button>
        </motion.div>
        <motion.div
          className="card"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <img src={products[55].image} alt="" />
          <p>{products[55].name}</p>
          <button className="add-to-cart">Add to cart</button>
        </motion.div>
        <motion.div
          className="card"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { type: "easeInOut", duration: 0.1 },
          }}
        >
          <img src={products[62].image} alt="" />
          <p>{products[62].name}</p>
          <button className="add-to-cart">Add to cart</button>
        </motion.div>
      </div>
    </motion.div>
  );
};
const Section3 = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div ref={ref}>
      <motion.div
        className="section3"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.7,
              delayChildren: 0.3,
              easing,
            },
          },
        }}
      >
        <motion.div className="top" variants={fadeInRight}>
          <div className="left">
            <img
              src={require("../../assets/man-leather-jacket.jpg")}
              alt="man-leather-jacket"
            />
          </div>
          <div className="right">
            <h3>Even more than you expect</h3>
            <p>
              Fashion, Beauty, Designer and more. Where would you like to start?
              The best things are free, like our delivery!
            </p>
          </div>
        </motion.div>
        <motion.div className="bottom" variants={fadeInLeft}>
          <div className="left" variants={fadeInRight}>
            <p>
              Explore our collection of fashion and order with free delivery
            </p>
          </div>
          <div className="right" variants={fadeInLeft}>
            <img
              src={require("../../assets/woman-coat.jpg")}
              alt="man-leather-jacket"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
const Section4 = () => {
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
    <motion.div
      className="section4"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
            delayChildren: 0.5,
            easing,
          },
        },
      }}
    >
      <motion.h1 variants={fadeInUp}>Why you'll love shoping with us</motion.h1>
      <div className="bottom">
        <motion.div variants={fadeInUp} className="quote">
          <div className="img img1"></div>
          <h3>Sustainable</h3>
          <p>
            Fashionify has set many goals relating to sustainability, including
            reaching net-zero emissions by 2040, 100% more sustainable
            procurement of cellulose fibres, cotton, linen, and other materials,
            and becoming free of single-use plastics
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="quote">
          <div className="img img2"></div>
          <h3>Ethical</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            eveniet ipsam autem, excepturi, quia dicta, possimus at alias eos
            debitis ea. Aut aliquam sequi iste delectus quas, provident quis
            temporibus.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="quote">
          <div className="img img3"></div>
          <h3>Fashionable</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
            minima odio tenetur. Atque eveniet dicta quia error cumque impedit
            ea sint amet ex officia.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
const Home = () => {
  return (
    <div className="home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};
export default Home;
