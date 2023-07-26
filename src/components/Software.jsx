import React, {useState} from 'react'
import Card from './Card'
import Card1 from './Card1';

function Software() {
  const [activeParagraph, setActiveParagraph] = useState("Front");

  const handleClick = (paragraphId) => {
    setActiveParagraph(paragraphId);
  };
  const frontClasses = activeParagraph ==='Front'? 'buttonisActive':'button' 
  const backClasses = activeParagraph ==='Back'? 'buttonisActive': 'button' 
  return (
    <Card1 className= 'w-[620px]'>
    <h1 className='text-[30px] text-center font-medium text-purple-600 mt-7 mb-5'>SOFTWARE DEVELOPEMENT</h1 >
      <div className='flex gap-10 justify-center'>
      <button className= {frontClasses} onClick={() => handleClick("Front")}  >Front-End</button>
      <button className={backClasses} onClick={() => handleClick("Back")}>Back-End</button>
      </div>

      <div className="text-purple-900 font-[500] font-serif text-[20px] text-left m-10 leading-10 tracking-wide">
        {activeParagraph === "Front" && (
          <ul>
            <li>
            HTML, CSS, JavaScript and TypeScript.
            </li>
            <li>
            Modern front-end frameworks (React, Redux, Router, Next.js).
            </li>
            {/* <li>
            Collaborated closely with designers to create visually appealing and user-friendly interfaces.
            </li> */}
            <li>
            Accessibility and performance optimization.
            </li>
            <li>Responsive design & cross-browser compatibility.</li>
          </ul>
        )}
        {activeParagraph === "Back" && (
          <ol>
            <li>
            Node.js and Express for back-end development.
            </li>
            <li>
            <li>
            Implementation of MWC architecture.
            </li>
           Databases: Mongoose & MongoDb, Firebase, AWS buckets, Google Cloud Platform
            </li>
            <li>
         APIs: Rest APIs, GraphQl
            </li>
            
          </ol>
        )}
      </div>
      
    </Card1>
  )
}

export default Software