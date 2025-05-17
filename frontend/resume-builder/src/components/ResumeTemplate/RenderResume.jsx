import React from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';

const RenderResume = ({
    templateId,
    resumeData,
    colorPalette,
    conatinerWidth,
}) => {
  switch (templateId) {
    case "01":
        return (
            <TemplateOne
              resumeData={resumeData}
              colorPalette={colorPalette}
              conatinerWidth={conatinerWidth}
            />
        );
    case "02":
        return (
            <TemplateTwo
              resumeData={resumeData}
              colorPalette={colorPalette}
              conatinerWidth={conatinerWidth}
            />
        );
    case "03":
        return (
            <TemplateThree 
              resumeData={resumeData}
              colorPalette={colorPalette}
              conatinerWidth={conatinerWidth}
            />
        );
    default:
        return (
            <TemplateOne
              resumeData={resumeData}
              colorPalette={colorPalette}
              conatinerWidth={conatinerWidth}
            />
        )
  }
}

export default RenderResume;