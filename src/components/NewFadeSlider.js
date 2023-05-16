import React from "react";
import img from "../images/img.jpg";
import img2 from "../images/img2.jpg";
import img4 from "../images/img4.jpg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewFadeSlider = () => {
  const [Trans, setTrans] = React.useState(0);

  const prevSlide = () => {
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");
    if (Trans === 1) {
      setTrans(3);
    } else {
      setTrans(Trans - 1);
    }

    if (Trans === 1) {
      slide1.style.opacity = 1;
      slide2.style.opacity = 0;
      slide3.style.opacity = 0;
    } else if (Trans === 2) {
      slide1.style.opacity = 0;
      slide2.style.opacity = 1;
      slide3.style.opacity = 0;
    } else {
      slide1.style.opacity = 0;
      slide2.style.opacity = 0;
      slide3.style.opacity = 1;
    }
  };

  const nextSlide = () => {
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");
    if (Trans === 3) {
      setTrans(1);
    } else {
      setTrans(Trans + 1);
    }
    if (Trans == 1) {
      slide1.style.opacity = 1;
      slide2.style.opacity = 0;
      slide3.style.opacity = 0;
    } else if (Trans == 2) {
      slide1.style.opacity = 0;
      slide2.style.opacity = 1;
      slide3.style.opacity = 0;
    } else {
      slide1.style.opacity = 0;
      slide2.style.opacity = 0;
      slide3.style.opacity = 1;
    }
  };
  return (
    <div className=" w-full h-[100vh] relative bg-black">
      <div
        className=" opacity-1 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]  h-screen mx-auto py-16 lg:px-10  transition-all duration-700 delay-200 rounded-lg"
        id="slide1"
      >
        <div className=" w-[270px] sm:w-[388px] h-[400px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
          <div className=" w-[100%] h-[100%] p-5">
            <iframe
              src="https://giphy.com/embed/THShpYySQRDeqanpoH"
              width="100%"
              height="100%"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" w-[100%] h-[100%]">
            <h1 className=" text-white text-center text-3xl">
              A keyboard <br /> first experience
            </h1>
            <br />
            <p className=" text-center text-white pb-4 mx-2 px-5 opacity-50">
              Powerful shortcuts and a keyboard-first workflow means you will
              get to your finish line in no time!
            </p>
          </div>
        </div>
      </div>
      <div
        className=" opacity-0 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] h-screen py-16 lg:px-10 transition-all duration-700 delay-200 rounded-lg"
        id="slide2"
      >
        <div className=" w-[270px] md:w-[388px]  h-[400px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
          <div className=" w-[100%] h-[100%] p-5">
            <iframe
              src="https://giphy.com/embed/t5zwdavzs0iWzlE6wO"
              width="100%"
              height="100%"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" w-[100%] h-[100%]">
            <h1 className=" text-white text-center text-3xl">
              A keyboard <br /> first experience
            </h1>
            <br />
            <p className=" text-center text-white pb-4 mx-2 px-5 opacity-50">
              Powerful shortcuts and a keyboard-first workflow means you will
              get to your finish line in no time!
            </p>
          </div>
        </div>
      </div>
      <div
        className=" opacity-0 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] h-screen py-16 lg:px-10 transition-all duration-700 delay-200 rounded-lg"
        id="slide3"
      >
        <div className=" w-[270px] md:w-[388px] h-[400px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
          <div className="w-[100%] h-[100%] my-5">
            <iframe
              src="https://giphy.com/embed/IcZhFmufozDCij3p22"
              width="100%"
              height="100%"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" w-[100%] h-[100%] flex items-center flex-col">
            <h1 className=" text-white text-center text-3xl">
              A powerful assistant <br /> just a click away
            </h1>
            <br />
            <p className=" text-center text-white pb-4 mx-2 px-5 opacity-50">
              Insert blocks, perform powerful actions and leverage the limitless
              power of AI - all without leaving your keyboard
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute top-[80%] -translate-y-[80%] left-[50%] -translate-x-[50%] mt-5 flex flex-row gap-5">
        <div
          className=" text-white w-[100px] sm:w-[250px] rounded-full h-6 bg-[#101010] flex justify-center items-center cursor-pointer ease-in duration-75 "
          onClick={prevSlide}
        >
          <ArrowBackIcon className=" opacity-50" />
        </div>
        <div
          className=" w-[100px] sm:w-[250px] rounded-full h-6 bg-white flex justify-center items-center cursor-pointer ease-in duration-75"
          onClick={nextSlide}
        >
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default NewFadeSlider;
