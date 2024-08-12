import React, { useState, useEffect } from "react";
import logo from "./images/logo.jpg";
import Hero from "../components/Hero";
import FeaturesList from "./FeaturesList";
import Newsletter from "./Newsletter";
import News from "./News";
import ProjectDetailsList from "./ProjectsetailList";
import MainComponent from "./MainComponent";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Switch from "../components/Switch";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const slideInFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`px-4 md:px-6 ${isDarkMode ? "theme-dark" : "theme-light"}`}>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5 }}
        className="p-4 flex justify-between items-center"
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 rounded-lg mr-2" />
        </div>
        <div className="flex items-center">
          <Switch isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
          <button
            onClick={() => navigate("/Signin")}
            className="hover:text-gray-200 text-lg text-blue-600 font-bold py-2 px-4 rounded mr-2"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/Signout")}
            className="bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold py-2 px-6 rounded"
          >
            Sign up
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeaturesList />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <News />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProjectDetailsList />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <MainComponent />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Newsletter />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Navbar;
