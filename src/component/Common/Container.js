import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import './container.css'

const Container = (props) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={
        props.className
          ? `${props.className} "common-container"`
          : "common-container"
      }
    >
      {props.children}
    </motion.div>
  );
};

export default Container;


