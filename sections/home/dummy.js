"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

const Dummy = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <div className="">
      <motion.div
        className="relative top-0 flex flex-col h-[60rem]  w-[106rem] bg-red-200   text-[2rem] uppercase items-center"
        style={{ rotate }}
      >
       
        <div id="text1" className="absolute rotate-[90deg] top-[10rem]">
          Kenya and caramel
        </div>
        <di
          id="text2"
          className="absolute right-[34.95rem] top-[10.95rem] -rotate-[67.5deg]"
        >
          Kenya and caramel
        </di>
        <div
          id="text3"
          className="absolute right-[29.5rem] top-[15rem] -rotate-[45deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text4"
          className="absolute right-[25.5rem] top-[21rem] -rotate-[22.5deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text5"
          className="absolute right-[24rem] top-[27rem] rotate-[0deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text6"
          className="absolute left-[34.95rem] top-[10.95rem] -rotate-[112.5deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text7"
          className="absolute -rotate-[135deg] left-[29.5rem] top-[15rem]"
        >
          Kenya and caramel
        </div>
        <div
          id="text8"
          className="absolute -rotate-[157.5deg] left-[25.5rem] top-[20.5rem]"
        >
          Kenya and caramel
        </div>
        <div
          id="text9"
          className="absolute rotate-[180deg] left-[25.5rem] max-w-[346.5px] top-[27rem]"
        >
          Kenya and caramel
        </div>
        <div
          id="text10"
          className="absolute rotate-[135deg] left-[29.95rem] bottom-[17rem]"
        >
          Kenya and caramel
        </div>
        <div
          id="text11"
          className="absolute left-[26rem] bottom-[23rem] -rotate-[22.5deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text12"
          className="absolute right-[24.95rem] bottom-[22.95rem] rotate-[22.5deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text13"
          className="absolute rotate-[45deg] right-[28rem] bottom-[17rem]"
        >
          Kenya and caramel
        </div>
        <div
          id="text14"
          className="absolute left-[35.5rem] bottom-[14rem] -rotate-[67.5deg]"
        >
          Kenya and caramel
        </div>
        <div
          id="text15"
          className="absolute right-[34.5rem] bottom-[14rem] rotate-[67.5deg]"
        >
          Kenya and caramel
        </div>
        <div id="text16" className="absolute -rotate-[90deg] bottom-[13rem]">
          Kenya and caramel
        </div>
      </motion.div>
    </div>
  );
};

export default Dummy;
