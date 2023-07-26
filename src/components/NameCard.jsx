import React from "react";
import Card2 from "./Card2";
import classses from "./NameCard.module.css";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import '../App.css'
function NameCard() {
  
  function fileDownloadHandler() {
    const storageRef = getStorage();
    const resumeRef = ref(storageRef, 'Resume/FrontEndCV.pdf');
  
    getDownloadURL(resumeRef)
      .then((url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'FrontEndCV.pdf');
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      })
      .catch((error) => {
        console.error('Error downloading the resume:', error);
      });
  }
  

  return (
    <div className={classses.container}>
    
      <Card2 >
        <div className={classses.grid}>
          <div className={classses.imagecontain}>
            <img src="./anthony.jpg" alt="my image" />
          </div>
          <div className={classses.contentinfo}>
            <p>My name is Anthony Nana Yaw Atta-Konadu</p>
            <p>I am a Project Manager & Software Engineer</p>
              <div className={classses.buttonCenter}>

            <button onClick={fileDownloadHandler} className={classses.button}>
              <div className={classses.flex}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
               <span>Resume</span>
              </div>
            </button>
              </div>
          </div>
        </div>
      </Card2>
    </div>
  );
}

export default NameCard;
