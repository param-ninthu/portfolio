import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";
import { Tlist } from "../elements/ProjectElements";

import "./../elements/body.css";

const Item = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 5 }}>
      {!isOpen && (
        <motion.div className="title" layout>
          {" "}
          {props.data.ProjectTitle}{" "}
        </motion.div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0, tabSize: 4 }}
          >
            <div className="row"> {props.data.ProjectTitle}</div>
            <div className="row"> {props.data.Description}</div>
            <div className="row"> {props.data.GithubLink}</div>
            <div className="row">
              {" "}
              <Tlist $mode="frontEnd">{props.data.FrontEnd}</Tlist>
              <Tlist $mode="backEndEngine">{props.data.BackEndEngine}</Tlist>
              <Tlist $mode="backEnd">{props.data.BackEnd}</Tlist>
              <Tlist $mode="database">{props.data.Database}</Tlist>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const MContent = (props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row"> props.ProjectTitle</div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 5 }}>
          {projectDetails.map((details) => (
            <Item data={details} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </>
  );
};

export default Projects;
