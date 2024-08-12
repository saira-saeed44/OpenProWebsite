import React from 'react';
import ProjectDetail from './Projectdetail';
import { projectData } from '../components/utills/data';  

const ProjectDetailsList = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {projectData.map((project, index) => (
        <ProjectDetail
          key={index}
          textPosition={project.textPosition}
          title={project.title}
          subHeading={project.subHeading}
          description={project.description}
          listItems={project.listItems}
          imageSrc={project.imageSrc}
          className="mb-8"  
        />
      ))}
      <hr className="mt-8 md:mt-12 border-t border-gray-800" />
    </div>
  );
};

export default ProjectDetailsList;
