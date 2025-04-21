"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Weather Prediction",
    description: "Project 1 description",
    image: "/images/weather_and_prediction.png",
    tag: ["All","ML"],
    gitUrl: "https://github.com/harktank/Weather-Prediction",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sealevel Prediction",
    description: "Project 2 description",
    image: "/images/Sealevel.jpeg",
    tag: ["All","ML"],
    gitUrl: "https://github.com/harktank/sealevel-Prediction",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Detective Game",
    description: "Project 3 description",
    image: "/images/detective.jpeg",
    tag: ["All","ML"],
    gitUrl: "https://github.com/harktank/Detective-Game-in-ml",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Disease Prediction",
    description: "Project 4 description",
    image: "/images/heart.png",
    tag: ["All","ML"],
    gitUrl: "https://github.com/harktank/Disease-Prediction",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Medical Website",
    description: "Authentication and CRUD operations",
    image: "/images/doctor.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harktank/Medical-Website",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "E-learning Website",
    description: "Project 5 description",
    image: "/images/elearning.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harktank/e-learning-clone",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Smart India Hackathon",
    description: "Project 5 description",
    image: "/images/SIH.jpg",
    tag: ["All", "Certificate"],
    gitUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },
  {
    id: 8,
    title: "MIT Hackathon",
    description: "Project 5 description",
    image: "/images/MIT.jpg",
    tag: ["All", "Certificate"],
    gitUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },
  {
    id: 9,
    title: "Bootcamp",
    description: "Project 5 description",
    image: "/images/BOOTCAMP.jpg",
    tag: ["All", "Certificate"],
    gitUrl: "https://github.com/harktank/e-learning-clone",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },
  {
    id: 10,
    title: "Bootcamp",
    description: "Project 5 description",
    image: "/images/BOOTCAMP.jpg",
    tag: ["All", "Certificate"],
    gitUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },
  {
    id: 11,
    title: "Digital Marketing",
    description: "Project 5 description",
    image: "/images/WOOBBLR.JPG",
    tag: ["All", "Certificate"],
    gitUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },
  {
    id: 12,
    title: "Hack To Crack Hackathon",
    description: "Project 5 description",
    image: "/images/H2C.jpg",
    tag: ["All", "Certificate"],
    gitUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },
  {
    id: 13,
    title: "Web Developent Internship",
    description: "Project 5 description",
    image: "/images/H2C.jpg",
    tag: ["All", "Certificate"],
    gitUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
    previewUrl: "https://www.linkedin.com/in/himanshu-ghode-80a857261/recent-activity/all/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Certificate"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
