
import React, { useState } from "react";
import Card from "./Card";
import "./Stack.css";

function Stack() {
  const [icons, setIcons] = useState("Front");

  const displayIcons = (icon) => {
    setIcons(icon);
  };
  const techClasses = icons ==='Front'? 'buttonisActive': 'button' 
  const pmClasses = icons ==='Back'? 'buttonisActive': 'button' 
  return (
    <div className="flex justify-center mb-20">
      <Card className="background">
        <div className="p-7 flex justify-center flex-wrap gap-40">
          <div className="flex items-center gap-7">
            <button className={techClasses} onClick={() => displayIcons("Front")}>
              Tech Stack
            </button>
            <button className={pmClasses} onClick={() => displayIcons("Back")}>
              P.M Stack
            </button>
          </div>
          <div className="hovering">
            {icons === "Front" && (
              <div className="grid grid-cols-3 gap-3">
                <img
                  src=".\Icons\icons8-html5-144.png"
                  alt="html5"
                  className="image animation-delay-0 "
                />
            
                <img
                  src=".\Icons\icons8-css3-200.png"
                  alt="css3"
                  className="image animation-delay-100 w-[144px]"
                />
                <img
                  src=".\Icons\icons8-javascript-144.png"
                  alt="javascript"
                  className="image animation-delay-200"
                />
                <img
                  src=".\Icons\icons8-react-160.png"
                  alt="react"
                  className="image animation-delay-300 w-[144px]"
                />
                <img
                  src=".\Icons\icons8-vs-code-144.png"
                  alt="vs-code"
                  className="image animation-delay-400"
                />
                <img
                  src=".\Icons\icons8-bootstrap-144.png"
                  alt="bootstrap "
                  className="image animation-delay-500"
                />
                <img
                  src=".\Icons\pngaaa.com-6447779.png"
                  alt="tailwind"
                  className="w-[144px] image animation-delay-600"
                />
                <img
                  src=".\Icons\icons8-firebase-144.png"
                  alt="firebase"
                  className="w-[144px] image animation-delay-700"
                />
                <img
                  src=".\Icons\icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
                  alt="MongoDb"
                  className="w-[144px] image animation-delay-800"
                />
              </div>
            )}
            {icons === "Back" && (
              <div className="grid grid-cols-4 gap-3">
                <img
                  src=".\Icons\icons8-jira-144.png"
                  alt="jira"
                  className="image animation-delay-0 w-[144px]"
                />
               
                <img
                  src=".\Icons\icons8-microsoft-project-144.png"
                  alt="msproject"
                  className="image animation-delay-100 w-[144px]"
                />
                <img
                  src=".\Icons\icons8-trello-144.png"
                  alt="trello"
                  className="image animation-delay-200 w-[144px]"
                />
                <img
                  src=".\Icons\icons8-git-144.png"
                  alt="git"
                  className="image animation-delay-300 w-[144px]"
                />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Stack;
