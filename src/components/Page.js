import React from "react";
import FadeSlider from "./FadeSlider";
import NewFadeSlider from "./NewFadeSlider";
import star from "../images/star.png";

const Page = () => {
  const [scrollWidth, setScrollWidth] = React.useState(
    document.body.clientWidth
  );
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScrollWidth(document.body.clientWidth);
      console.warn(scrollWidth);
    });
  });

  return (
    <div className=" flex md:flex-row flex-col bg-black">
      <div className=" bg-black w-full md:w-1/2 lg:h-[600vh] text-white">
        <div className=" w-[75%] py-5 mx-auto md:sticky md:top-[50%] md:-translate-y-[50%] md:left-0">
          <div className=" flex flex-row items-center md:mx-1 lg:mx-10">
            <img className=" w-8 h-8" src={star} />
            <h1 className=" text-lg font-bold text-[rgba(131,56,236,255)]">
              Workflow
            </h1>
          </div>
          <h1 className=" text-5xl lg:text-6xl lg:mx-10 font-extrabold">
            Create at speed of thought
          </h1>
          <br />
          <p className=" hidden md:block my-5  lg:px-11">
            focus on your getting your thoughts out and creating the best
            message while Chronicle does the heavylifting for you
          </p>
        </div>
      </div>
      {scrollWidth >= 768 ? <FadeSlider /> : <NewFadeSlider />}
    </div>
  );
};

export default Page;
