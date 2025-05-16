import React from 'react';
import TemplateOne from './TemplateOne';

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