import React, { useState } from "react";
import Card from "./Card";
import Card1 from "./Card1";
function Project() {
  const [activeParagraph, setActiveParagraph] = useState("Agile");

  const handleClick = (paragraphId) => {
    setActiveParagraph(paragraphId);
  };
  const agileClasses = activeParagraph ==='Agile'? 'buttonisActive':'button' 
  const waterfallClasses = activeParagraph ==='Waterfall'? 'buttonisActive': 'button' 
  const hybridClasses = activeParagraph ==='Hybrid'? 'buttonisActive': 'button' 
  

  return (
    <Card1 className="w-[620px] ">
      <h1 className="text-[30px] text-center font-medium text-purple-700 mt-7 mb-5">
        PROJECT MANAGEMENT
      </h1>
      <div className="flex gap-10 justify-center">
        <button className={agileClasses} onClick={() => handleClick("Agile")}>
          Agile
        </button>
        <button className={waterfallClasses} onClick={() => handleClick("Waterfall")}>
          Waterfall
        </button>
        <button className={hybridClasses} onClick={() => handleClick("Hybrid")}>
          Hybrid
        </button>
      </div>
      <div className="text-purple-900 font-[500] font-serif text-[20px] text-left m-10 leading-10 tracking-wide">
        {activeParagraph === "Agile" && (
          <ul>
            <li>
            Agile methodologies (Scrum and Kanban).
            </li>
            <li>
              Product backlog preparation & facilitating Agile
              ceremonies (stand-ups, retrospectives). 
            </li>
            <li>
              Adapting to changing requirements, prioritizing
              deliverables, and ensuring incremental value for stakeholders.
            </li>
            <li>
              Continuous improvement and customer-centric development.
            </li>
          </ul>
        )}
        {activeParagraph === "Waterfall" && (
          <ol>
            <li>
              Projects with well-defined requirements and strict timelines.
        
            </li>
            <li>
              Comprehensive planning, milestone definition, and
              budget estimation.
            </li>
            <li>
             Managing project scope, ensuring thorough documentation,
              and continous stakeholder engagement.
            </li>
            <li>
              Monitoring project progress with EVM analysis.
            </li>
          </ol>
        )}
        {activeParagraph === "Hybrid" && (
          <ol>
            <li>
              Integrating Agile and Waterfall approaches to fit your project requirements.
            </li>
            <li>
            Agile practices for iterative development, continuous
              feedback, and adaptability.
            </li>
            <li>
              Maintaining a structured framework for planning, risk management, and
              stakeholder communication.
            </li>
            <li>
              Skillful management of dependencies, alignment of Agile cycles
              with project milestones, and balancing flexibility with control.
            </li>
          </ol>
        )}
      </div>
    </Card1>
  );
}

export default Project;
