import { MAIN_CONTAINER } from "@/constants";
import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={MAIN_CONTAINER}>
        <Header />
        <div className="container sm:flex-row flex-col flex-wrap flex max-w-full max-h-fit text-white ">
          <div className="box1 sm:w-1/2 w-full h-[765px] flex flex-col justify-start items-center">
            <motion.div
              animate={{ y: -50 }}
              initial={{ y: 300 }}
              className="w-3/4    px-3 sm:text-[35px] text-[15px] py-20"
            >
              Stockify
            </motion.div>
            <motion.div
              animate={{ y: -50 }}
              initial={{ y: 300 }}
              className="w-3/4 h-1/5  px-3 sm:text-[58px] text-[30px]  sm:font-[800] font-[600]"
            >
              <p>Investing</p>
              <p>For Everyone.</p>
            </motion.div>
            <motion.div
              animate={{ y: -50 }}
              initial={{ y: 300 }}
              className="w-3/4   px-3 sm:text-[20px] text-[13px]  sm:font-[200] font-[100] py-2"
            >
              Commission-free investing, plus the tools you need to put your
              money in motion. Sign up to be notified when we launch and get
              your first stock for free.
            </motion.div>
            <motion.div
              animate={{ y: -50 }}
              initial={{ y: 300 }}
              className="w-3/4 h-1/5  flex flex-col justify-evenly items-stretch px-3 "
            >
              <input
                type="number"
                placeholder="Phone number"
                className="px-3 py-2  rounded-md w-full text-black"
              />
              <button className="px-3 py-3 rounded-md bg-black text-white w-full">
                Get Notify
              </button>
            </motion.div>
          </div>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 300 }}
            className="box2 sm:w-1/2 w-full h-[765px]  bg-center bg-cover bg-no-repeat bg-[url('../assets/box-2.png')] sm:p-0 p"
          >
            <Image src />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
