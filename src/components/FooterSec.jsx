import React from "react";

function FooterSec() {
  return (
    <footer className=" bg-white flex flex-wrap font-mono font-bold  gap-40 justify-center py-6 text-[20px] text-red-700">
      <div>
      <span className="text-center  underline">Contact Info</span>
        <div className="flex mt-1 ">
          <img
            className="w-[40px]"
            src="./footericons/icons8-male-user-48.png"
            alt=""
          />
          <span className="mt-1" >Anthony Atta-Konadu</span>
        </div>
        <div className="flex">
          <img
            className="w-[40px]"
            src="./footericons/icons8-phone-48.png"
            alt=""
          />

          <span className="mt-1" >+233-576-367-799 </span>
        </div>
        <div className="flex">
          <img
            className="w-[40px]"
            src="./footericons/icons8-google-144.png"
            alt=""
          />
          <span className="mt-[5px]" >95attakayny@gmail.com</span>
        </div>

        <div className="flex">
          <img
            className="w-[40px]"
            src="./footericons/icons8-outlook-144.png"
            alt=""
          />
          <span className="mt-1" >anthony.atta-konadu@gfza.gov.gh</span>
        </div>
      </div>
      <div className="socials-none    ">
        <span className="underline">Socials</span>
        <div className="flex mt-1">
          <img
            className="w-[40px]"
            src="./footericons/icons8-github-150.png"
            alt=""
          />

          <a className="mt-1 hover:underline" target="_blank" href="https://github.com/95wordsmith">Github</a>
        </div>
        <div className="flex">
          <img
            className="w-[40px]"
            src="./footericons/icons8-twitter-144.png"
            alt=""
          />

          <a className="mt-1 hover:underline"  target="_blank" href="https://twitter.com/_Mike_Anthonyy">Twitter</a>
        </div>
        <div className="flex">
          <img
            className="w-[40px]"
            src="./footericons/icons8-linkedin-144.png"
            alt=""
          />

          <a className="mt-1 hover:underline"  target="_blank" href="https://www.linkedin.com/in/anthony-nana-yaw-atta-konadu-msc-pmp-%C2%AE-b7b252179/">Linkedin</a>
        </div>
        
        <div className="flex ">
          <img
            className="w-[40px]"
            src="./footericons/icons8-instagram-144.png"
            alt=""
          />

          <a className="mt-1 hover:underline"  target="_blank" href="https://www.instagram.com/neezy_anyak/">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSec;
