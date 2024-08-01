import React from 'react';
import ProjectDetail from './Projectdetail';
import { projectData } from '../components/utills/data';  

const ProjectDetailsList = () => {
  return (
    <div>
      {projectData.map((project, index) => (
        <ProjectDetail
          key={index}
          textPosition={project.textPosition}
          title={project.title}
          subHeading={project.subHeading}
          description={project.description}
          listItems={project.listItems}
          imageSrc={project.imageSrc}
        />
      ))}
        <hr className=" mt-12 pt-12 md:pt-20 border-t border-gray-800" />
        </div>
  );
};

export default ProjectDetailsList;
