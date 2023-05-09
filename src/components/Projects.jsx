import React from "react";
import { motion, useScroll } from "framer-motion";
function Projects() {
  const { scrollYProgress } = useScroll();
  let h2Animation = { x: 0, opacity: 1 };
  return (
    <div className="projects-container" id="projects">
      {/* framer motion div */}
      <motion.div style={{ scaleX: scrollYProgress }} className="progress" />
      <div className="projects-wrapper">
        <motion.h2 initial="hidden" whileInView="visible">
          projects
        </motion.h2>

        {/* projects */}
        <section className="f-project">
          <div className="project-info">
            <motion.h2
              initial={{ x: -100, opacity: 0.5 }}
              animate={h2Animation}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              project title
            </motion.h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nemo, molestias corrupti molestiae consequuntur beatae?
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            src="/projects/school manage.png"
            alt=""
          />
        </section>
        <section className="s-project">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            src="https://1.bp.blogspot.com/-q3-yL5W0PsM/X4MfhhCraNI/AAAAAAAAAbI/t2ZfZlc8qtcQO14VKo9USVT7GSm882cmQCLcBGAsYHQ/s1280/How%2Bto%2BCreate%2Ba%2BResponsive%2B%2BPersonal%2BPortfolio%2BWebsite%2BHTML.jpg"
            alt=""
          />
          <div className="project-info">
            <h2>project title</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              nemo, molestias corrupti molestiae consequuntur beatae?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
