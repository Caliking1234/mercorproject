import React, { useState, useEffect, useRef } from "react";

const TextAnimation = () => {
  const [scrollCor, setScrollCor] = useState({ x: 0, y: 0 });
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [position4, setPosition4] = useState(0);
  const [position5, setPosition5] = useState(0);
  const [position6, setPosition6] = useState(0);
  const [position7, setPosition7] = useState(0);
  const [position8, setPosition8] = useState(0);
  const [position9, setPosition9] = useState(0);
  const [position10, setPosition10] = useState(0);
  const [position11, setPosition11] = useState(0);
  const [position12, setPosition12] = useState(0);
  const [position13, setPosition13] = useState(0);
  const [position14, setPosition14] = useState(0);
  const [position15, setPosition15] = useState(0);
  const [position16, setPosition16] = useState(0);
  const [position17, setPosition17] = useState(0);
  const [position18, setPosition18] = useState(0);
  const [position19, setPosition19] = useState(0);
  const [position20, setPosition20] = useState(0);
  const [position21, setPosition21] = useState(0);
  const [position22, setPosition22] = useState(0);
  const [position23, setPosition23] = useState(0);
  const [position24, setPosition24] = useState(0);
  const [position25, setPosition25] = useState(0);
  const [position26, setPosition26] = useState(0);
  const [position27, setPosition27] = useState(0);
  const [position28, setPosition28] = useState(0);
  const [position29, setPosition29] = useState(0);
  const [position30, setPosition30] = useState(0);
  const [position31, setPosition31] = useState(0);
  const [position32, setPosition32] = useState(0);
  const [position33, setPosition33] = useState(0);
  const [position34, setPosition34] = useState(0);
  const [position35, setPosition35] = useState(0);
  const [position36, setPosition36] = useState(0);
  const [position37, setPosition37] = useState(0);
  const [position38, setPosition38] = useState(0);
  const [position39, setPosition39] = useState(0);
  const [position40, setPosition40] = useState(0);

  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const elementRef4 = useRef(null);
  const elementRef5 = useRef(null);
  const elementRef6 = useRef(null);
  const elementRef7 = useRef(null);
  const elementRef8 = useRef(null);
  const elementRef9 = useRef(null);
  const elementRef10 = useRef(null);
  const elementRef11 = useRef(null);
  const elementRef12 = useRef(null);
  const elementRef13 = useRef(null);
  const elementRef14 = useRef(null);
  const elementRef15 = useRef(null);
  const elementRef16 = useRef(null);
  const elementRef17 = useRef(null);
  const elementRef18 = useRef(null);
  const elementRef19 = useRef(null);
  const elementRef20 = useRef(null);
  const elementRef21 = useRef(null);
  const elementRef22 = useRef(null);
  const elementRef23 = useRef(null);
  const elementRef24 = useRef(null);
  const elementRef25 = useRef(null);
  const elementRef26 = useRef(null);
  const elementRef27 = useRef(null);
  const elementRef28 = useRef(null);
  const elementRef29 = useRef(null);
  const elementRef30 = useRef(null);
  const elementRef31 = useRef(null);
  const elementRef32 = useRef(null);
  const elementRef33 = useRef(null);
  const elementRef34 = useRef(null);
  const elementRef35 = useRef(null);
  const elementRef36 = useRef(null);
  const elementRef37 = useRef(null);
  const elementRef38 = useRef(null);
  const elementRef39 = useRef(null);
  const elementRef40 = useRef(null);

  const scrollHandler = (e) => {
    let y = window.scrollY;
    let x = window.scrollX;
    setScrollCor({ x, y });
    console.warn(scrollCor);
  };

  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para1").getBoundingClientRect();
      setPosition1(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef1]);

  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para2").getBoundingClientRect();
      setPosition2(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef2]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para3").getBoundingClientRect();
      setPosition3(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef3]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para4").getBoundingClientRect();
      setPosition4(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef4]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para5").getBoundingClientRect();
      setPosition5(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef5]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para6").getBoundingClientRect();
      setPosition6(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef6]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para7").getBoundingClientRect();
      setPosition7(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef7]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para8").getBoundingClientRect();
      setPosition8(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef8]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para9").getBoundingClientRect();
      setPosition9(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef9]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para10").getBoundingClientRect();
      setPosition10(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef10]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para11").getBoundingClientRect();
      setPosition11(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef11]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para12").getBoundingClientRect();
      setPosition12(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef12]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para13").getBoundingClientRect();
      setPosition13(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef13]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para14").getBoundingClientRect();
      setPosition14(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef14]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para15").getBoundingClientRect();
      setPosition15(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef15]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para16").getBoundingClientRect();
      setPosition16(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef16]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para17").getBoundingClientRect();
      setPosition17(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef17]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para18").getBoundingClientRect();
      setPosition18(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef18]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para19").getBoundingClientRect();
      setPosition19(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef19]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para20").getBoundingClientRect();
      setPosition20(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef20]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para21").getBoundingClientRect();
      setPosition21(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef21]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para22").getBoundingClientRect();
      setPosition22(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef22]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para23").getBoundingClientRect();
      setPosition23(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef23]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para24").getBoundingClientRect();
      setPosition24(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef24]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para25").getBoundingClientRect();
      setPosition25(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef25]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para26").getBoundingClientRect();
      setPosition26(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef26]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para27").getBoundingClientRect();
      setPosition27(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef27]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para28").getBoundingClientRect();
      setPosition28(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef28]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para29").getBoundingClientRect();
      setPosition29(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef29]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para30").getBoundingClientRect();
      setPosition30(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef30]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para31").getBoundingClientRect();
      setPosition31(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef31]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para32").getBoundingClientRect();
      setPosition32(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef32]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para33").getBoundingClientRect();
      setPosition33(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef33]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para34").getBoundingClientRect();
      setPosition34(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef34]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para35").getBoundingClientRect();
      setPosition35(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef35]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para36").getBoundingClientRect();
      setPosition36(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef36]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para37").getBoundingClientRect();
      setPosition37(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef37]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para38").getBoundingClientRect();
      setPosition38(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef38]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para39").getBoundingClientRect();
      setPosition39(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef39]);
  useEffect(() => {
    function handleResize() {
      const pos = document.getElementById("para40").getBoundingClientRect();
      setPosition40(pos.top);
    }

    handleResize();
    window.addEventListener("scroll", handleResize);
  }, [elementRef40]);

  const checkval1 = () => {
    if (scrollCor.y >= position1) {
      let para = document.getElementById("para1");
      para.style.opacity = 1;
      para.style.transitionDelay = "00ms";
    } else {
      let para = document.getElementById("para1");
      para.style.opacity = 0;
      para.style.transitionDelay = "3900ms";
    }
    if (scrollCor.y >= position2) {
      let para = document.getElementById("para2");
      para.style.opacity = 1;
      para.style.transitionDelay = "100ms";
    } else {
      let para = document.getElementById("para2");
      para.style.opacity = 0;
      para.style.transitionDelay = "3800ms";
    }
    if (scrollCor.y >= position3) {
      let para = document.getElementById("para3");
      para.style.opacity = 1;
      para.style.transitionDelay = "200ms";
    } else {
      let para = document.getElementById("para3");
      para.style.opacity = 0;
      para.style.transitionDelay = "3700ms";
    }
    if (scrollCor.y >= position4) {
      let para = document.getElementById("para4");
      para.style.opacity = 1;
      para.style.transitionDelay = "300ms";
    } else {
      let para = document.getElementById("para4");
      para.style.opacity = 0;
      para.style.transitionDelay = "3600ms";
    }
    if (scrollCor.y >= position5) {
      let para = document.getElementById("para5");
      para.style.opacity = 1;
      para.style.transitionDelay = "400ms";
    } else {
      let para = document.getElementById("para5");
      para.style.opacity = 0;
      para.style.transitionDelay = "3500ms";
    }
    if (scrollCor.y >= position6) {
      let para = document.getElementById("para6");
      para.style.opacity = 1;
      para.style.transitionDelay = "500ms";
    } else {
      let para = document.getElementById("para6");
      para.style.opacity = 0;
      para.style.transitionDelay = "3400ms";
    }
    if (scrollCor.y >= position7) {
      let para = document.getElementById("para7");
      para.style.opacity = 1;
      para.style.transitionDelay = "600ms";
    } else {
      let para = document.getElementById("para7");
      para.style.opacity = 0;
      para.style.transitionDelay = "3300ms";
    }
    if (scrollCor.y >= position8) {
      let para = document.getElementById("para8");
      para.style.opacity = 1;
      para.style.transitionDelay = "700ms";
    } else {
      let para = document.getElementById("para8");
      para.style.opacity = 0;
      para.style.transitionDelay = "3200ms";
    }
    if (scrollCor.y >= position9) {
      let para = document.getElementById("para9");
      para.style.opacity = 1;
      para.style.transitionDelay = "800ms";
    } else {
      let para = document.getElementById("para9");
      para.style.opacity = 0;
      para.style.transitionDelay = "3100ms";
    }
    if (scrollCor.y >= position10) {
      let para = document.getElementById("para10");
      para.style.opacity = 1;
      para.style.transitionDelay = "900ms";
    } else {
      let para = document.getElementById("para10");
      para.style.opacity = 0;
      para.style.transitionDelay = "3000ms";
    }
    if (scrollCor.y >= position11) {
      let para = document.getElementById("para11");
      para.style.opacity = 1;
      para.style.transitionDelay = "1000ms";
    } else {
      let para = document.getElementById("para11");
      para.style.opacity = 0;
      para.style.transitionDelay = "2900ms";
    }
    if (scrollCor.y >= position12) {
      let para = document.getElementById("para12");
      para.style.opacity = 1;
      para.style.transitionDelay = "1100ms";
    } else {
      let para = document.getElementById("para12");
      para.style.opacity = 0;
      para.style.transitionDelay = "2800ms";
    }
    if (scrollCor.y >= position13) {
      let para = document.getElementById("para13");
      para.style.opacity = 1;
      para.style.transitionDelay = "1200ms";
    } else {
      let para = document.getElementById("para13");
      para.style.opacity = 0;
      para.style.transitionDelay = "2700ms";
    }
    if (scrollCor.y >= position14) {
      let para = document.getElementById("para14");
      para.style.opacity = 1;
      para.style.transitionDelay = "1300ms";
    } else {
      let para = document.getElementById("para14");
      para.style.opacity = 0;
      para.style.transitionDelay = "2600ms";
    }
    if (scrollCor.y >= position15) {
      let para = document.getElementById("para15");
      para.style.opacity = 1;
      para.style.transitionDelay = "1400ms";
    } else {
      let para = document.getElementById("para15");
      para.style.opacity = 0;
      para.style.transitionDelay = "2500ms";
    }
    if (scrollCor.y >= position16) {
      let para = document.getElementById("para16");
      para.style.opacity = 1;
      para.style.transitionDelay = "1500ms";
    } else {
      let para = document.getElementById("para16");
      para.style.opacity = 0;
      para.style.transitionDelay = "2400ms";
    }
    if (scrollCor.y >= position17) {
      let para = document.getElementById("para17");
      para.style.opacity = 1;
      para.style.transitionDelay = "1600ms";
    } else {
      let para = document.getElementById("para17");
      para.style.opacity = 0;
      para.style.transitionDelay = "2300ms";
    }
    if (scrollCor.y >= position18) {
      let para = document.getElementById("para18");
      para.style.opacity = 1;
      para.style.transitionDelay = "1700ms";
    } else {
      let para = document.getElementById("para18");
      para.style.opacity = 0;
      para.style.transitionDelay = "2200ms";
    }
    if (scrollCor.y >= position19) {
      let para = document.getElementById("para19");
      para.style.opacity = 1;
      para.style.transitionDelay = "1800ms";
    } else {
      let para = document.getElementById("para19");
      para.style.opacity = 0;
      para.style.transitionDelay = "2100ms";
    }
    if (scrollCor.y >= position20) {
      let para = document.getElementById("para20");
      para.style.opacity = 1;
      para.style.transitionDelay = "1900ms";
    } else {
      let para = document.getElementById("para20");
      para.style.opacity = 0;
      para.style.transitionDelay = "2000ms";
    }
    if (scrollCor.y >= position21) {
      let para = document.getElementById("para21");
      para.style.opacity = 1;
      para.style.transitionDelay = "2000ms";
    } else {
      let para = document.getElementById("para21");
      para.style.opacity = 0;
      para.style.transitionDelay = "1900ms";
    }
    if (scrollCor.y >= position22) {
      let para = document.getElementById("para22");
      para.style.opacity = 1;
      para.style.transitionDelay = "2100ms";
    } else {
      let para = document.getElementById("para22");
      para.style.opacity = 0;
      para.style.transitionDelay = "1800ms";
    }
    if (scrollCor.y >= position23) {
      let para = document.getElementById("para23");
      para.style.opacity = 1;
      para.style.transitionDelay = "2200ms";
    } else {
      let para = document.getElementById("para23");
      para.style.opacity = 0;
      para.style.transitionDelay = "1700ms";
    }
    if (scrollCor.y >= position24) {
      let para = document.getElementById("para24");
      para.style.opacity = 1;
      para.style.transitionDelay = "2300ms";
    } else {
      let para = document.getElementById("para24");
      para.style.opacity = 0;
      para.style.transitionDelay = "1600ms";
    }
    if (scrollCor.y >= position25) {
      let para = document.getElementById("para25");
      para.style.opacity = 1;
      para.style.transitionDelay = "2400ms";
    } else {
      let para = document.getElementById("para25");
      para.style.opacity = 0;
      para.style.transitionDelay = "1500ms";
    }
    if (scrollCor.y >= position26) {
      let para = document.getElementById("para26");
      para.style.opacity = 1;
      para.style.transitionDelay = "2500ms";
    } else {
      let para = document.getElementById("para26");
      para.style.opacity = 0;
      para.style.transitionDelay = "1400ms";
    }
    if (scrollCor.y >= position27) {
      let para = document.getElementById("para27");
      para.style.opacity = 1;
      para.style.transitionDelay = "2600ms";
    } else {
      let para = document.getElementById("para27");
      para.style.opacity = 0;
      para.style.transitionDelay = "1300ms";
    }
    if (scrollCor.y >= position28) {
      let para = document.getElementById("para28");
      para.style.opacity = 1;
      para.style.transitionDelay = "2700ms";
    } else {
      let para = document.getElementById("para28");
      para.style.opacity = 0;
      para.style.transitionDelay = "1200ms";
    }
    if (scrollCor.y >= position29) {
      let para = document.getElementById("para29");
      para.style.opacity = 1;
      para.style.transitionDelay = "2800ms";
    } else {
      let para = document.getElementById("para29");
      para.style.opacity = 0;
      para.style.transitionDelay = "1100ms";
    }
    if (scrollCor.y >= position30) {
      let para = document.getElementById("para30");
      para.style.opacity = 1;
      para.style.transitionDelay = "2900ms";
    } else {
      let para = document.getElementById("para30");
      para.style.opacity = 0;
      para.style.transitionDelay = "1000ms";
    }
    if (scrollCor.y >= position31) {
      let para = document.getElementById("para31");
      para.style.opacity = 1;
      para.style.transitionDelay = "3000ms";
    } else {
      let para = document.getElementById("para31");
      para.style.opacity = 0;
      para.style.transitionDelay = "900ms";
    }
    if (scrollCor.y >= position32) {
      let para = document.getElementById("para32");
      para.style.opacity = 1;
      para.style.transitionDelay = "3100ms";
    } else {
      let para = document.getElementById("para32");
      para.style.opacity = 0;
      para.style.transitionDelay = "800ms";
    }
    if (scrollCor.y >= position33) {
      let para = document.getElementById("para33");
      para.style.opacity = 1;
      para.style.transitionDelay = "3200ms";
    } else {
      let para = document.getElementById("para33");
      para.style.opacity = 0;
      para.style.transitionDelay = "700ms";
    }
    if (scrollCor.y >= position34) {
      let para = document.getElementById("para34");
      para.style.opacity = 1;
      para.style.transitionDelay = "3300ms";
    } else {
      let para = document.getElementById("para34");
      para.style.opacity = 0;
      para.style.transitionDelay = "600ms";
    }
    if (scrollCor.y >= position35) {
      let para = document.getElementById("para35");
      para.style.opacity = 1;
      para.style.transitionDelay = "3400ms";
    } else {
      let para = document.getElementById("para35");
      para.style.opacity = 0;
      para.style.transitionDelay = "500ms";
    }
    if (scrollCor.y >= position36) {
      let para = document.getElementById("para36");
      para.style.opacity = 1;
      para.style.transitionDelay = "3500ms";
    } else {
      let para = document.getElementById("para36");
      para.style.opacity = 0;
      para.style.transitionDelay = "400ms";
    }
    if (scrollCor.y >= position37) {
      let para = document.getElementById("para37");
      para.style.opacity = 1;
      para.style.transitionDelay = "3600ms";
    } else {
      let para = document.getElementById("para37");
      para.style.opacity = 0;
      para.style.transitionDelay = "300ms";
    }
    if (scrollCor.y >= position38) {
      let para = document.getElementById("para38");
      para.style.opacity = 1;
      para.style.transitionDelay = "3700ms";
    } else {
      let para = document.getElementById("para38");
      para.style.opacity = 0;
      para.style.transitionDelay = "200ms";
    }
    if (scrollCor.y >= position39) {
      let para = document.getElementById("para39");
      para.style.opacity = 1;
      para.style.transitionDelay = "3800ms";
    } else {
      let para = document.getElementById("para39");
      para.style.opacity = 0;
      para.style.transitionDelay = "100ms";
    }
    if (scrollCor.y >= position40) {
      let para = document.getElementById("para40");
      para.style.opacity = 1;
      para.style.transitionDelay = "3900ms";
    } else {
      let para = document.getElementById("para40");
      para.style.opacity = 0;
      para.style.transitionDelay = "00ms";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    console.warn(scrollCor);
    checkval1();
  });

  return (
    <section className=" bg-black font-customised1">
      <div className=" w-[100%] mx-auto flex items-center justify-center">
        <div className=" relative h-[200vh]">
          <div className=" sticky top-0 left-0 py-20 flex items-center h-[50%]">
            <div className=" max-w-5xl">
              <div className=" relative">
                <p className=" text-white text-2xl sm:text-4xl font-semibold leading-none absolute flex flex-wrap px-5 gap-2">
                  <span
                    ref={elementRef1}
                    id="para1"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    In{" "}
                  </span>
                  <span
                    ref={elementRef2}
                    id="para2"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    Chronicle{" "}
                  </span>
                  <span
                    ref={elementRef3}
                    id="para3"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    everything{" "}
                  </span>
                  <span
                    ref={elementRef4}
                    id="para4"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    is{" "}
                  </span>
                  <span
                    ref={elementRef5}
                    id="para5"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    made{" "}
                  </span>
                  <span
                    ref={elementRef6}
                    id="para6"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    with{" "}
                  </span>
                  <span
                    ref={elementRef7}
                    id="para7"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    Blocks{" "}
                  </span>
                  <span
                    ref={elementRef8}
                    id="para8"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    that{" "}
                  </span>
                  <span
                    ref={elementRef9}
                    id="para9"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    come{" "}
                  </span>
                  <span
                    ref={elementRef10}
                    id="para10"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    with{" "}
                  </span>
                  <span
                    ref={elementRef11}
                    id="para11"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    pixel{" "}
                  </span>
                  <span
                    ref={elementRef12}
                    id="para12"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    perfect{" "}
                  </span>
                  <span
                    ref={elementRef13}
                    id="para13"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    design,{" "}
                  </span>
                  <span
                    ref={elementRef14}
                    id="para14"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    interactivity{" "}
                  </span>
                  <span
                    ref={elementRef15}
                    id="para15"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    and{" "}
                  </span>
                  <span
                    ref={elementRef16}
                    id="para16"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    motion{" "}
                  </span>
                  <span
                    ref={elementRef17}
                    id="para17"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    out{" "}
                  </span>
                  <span
                    ref={elementRef18}
                    id="para18"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    of{" "}
                  </span>
                  <span
                    ref={elementRef19}
                    id="para19"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    the{" "}
                  </span>
                  <span
                    ref={elementRef20}
                    id="para20"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    box.{" "}
                  </span>
                  <span
                    ref={elementRef21}
                    id="para21"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    Instead{" "}
                  </span>
                  <span
                    ref={elementRef22}
                    id="para22"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    of{" "}
                  </span>
                  <span
                    ref={elementRef23}
                    id="para23"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    designing{" "}
                  </span>
                  <span
                    ref={elementRef24}
                    id="para24"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    from{" "}
                  </span>
                  <span
                    ref={elementRef25}
                    id="para25"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    scratch,{" "}
                  </span>
                  <span
                    ref={elementRef26}
                    id="para26"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    simply{" "}
                  </span>
                  <span
                    ref={elementRef27}
                    id="para27"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    choose{" "}
                  </span>
                  <span
                    ref={elementRef28}
                    id="para28"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    the{" "}
                  </span>
                  <span
                    ref={elementRef29}
                    id="para29"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    right{" "}
                  </span>
                  <span
                    ref={elementRef30}
                    id="para30"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    one{" "}
                  </span>
                  <span
                    ref={elementRef31}
                    id="para31"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    from{" "}
                  </span>
                  <span
                    ref={elementRef32}
                    id="para32"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    our{" "}
                  </span>
                  <span
                    ref={elementRef33}
                    id="para33"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    library{" "}
                  </span>
                  <span
                    ref={elementRef34}
                    id="para34"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    of{" "}
                  </span>
                  <span
                    ref={elementRef35}
                    id="para35"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    blocks{" "}
                  </span>
                  <span
                    ref={elementRef36}
                    id="para36"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    and{" "}
                  </span>
                  <span
                    ref={elementRef37}
                    id="para37"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    see{" "}
                  </span>
                  <span
                    ref={elementRef38}
                    id="para38"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    the
                  </span>
                  <span
                    ref={elementRef39}
                    id="para39"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    magic{" "}
                  </span>
                  <span
                    ref={elementRef40}
                    id="para40"
                    className=" opacity-0 transition-opacity duration-300"
                  >
                    unfold
                  </span>
                </p>
                <p className=" text-[#202020] text-2xl sm:text-4xl font-semibold leading-none flex flex-wrap px-5 gap-2">
                  <span>In </span>
                  <span>Chronicle </span>
                  <span>everything </span>
                  <span>is </span>
                  <span>made </span>
                  <span>with </span>
                  <span>Blocks </span>
                  <span>that </span>
                  <span>come </span>
                  <span>with </span>
                  <span>pixel </span>
                  <span>perfect </span>
                  <span>design, </span>
                  <span>interactivity </span>
                  <span>and </span>
                  <span>motion </span>
                  <span>out </span>
                  <span>of </span>
                  <span>the </span>
                  <span>box. </span>
                  <span>Instead </span>
                  <span>of </span>
                  <span>designing </span>
                  <span>from </span>
                  <span>scratch, </span>
                  <span>simply </span>
                  <span>choose </span>
                  <span>the </span>
                  <span>right </span>
                  <span>one </span>
                  <span>from </span>
                  <span>our </span>
                  <span>library </span>
                  <span>of </span>
                  <span>blocks </span>
                  <span>and </span>
                  <span>see </span>
                  <span>the </span>
                  <span>magic </span>
                  <span>unfold </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute top-[33%] left-0 h-[16.666%] w-[100%]"></div>
        </div>
      </div>
    </section>
  );
};

export default TextAnimation;
