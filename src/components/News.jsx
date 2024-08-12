import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2 className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
          Reach goals that matter
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-4xl text-heading font-extrabold mb-6">
          One product, unlimited solutions
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-xl text-paragraph">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit laborum — semper quis lectus nulla.
        </p>
      </motion.div>
    </div>
  );
};

export default News;
