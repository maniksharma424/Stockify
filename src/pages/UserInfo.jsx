import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";
import { setDay, setModalDefault, setModalNight, setNight, setTextDefault, setTextNight } from "@/slices/dashboardSlice";
const UserInfo = () => {
  const [isDay, setIsDay] = useState(true);
  const date = new Date();
  const dispatch = useDispatch();

console.log('user info');
  return (
    <div className="user-info w-11/12 h-1/6 border-[1px] shadow-lg  rounded-md bg-inherit ">
      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className=" other-info w-full h-1/2  rounded-md p-2 flex justify-between items-center font-[300] "
      >
        <p className="text-[19px] font-[500]">Manik Sharma</p>
        <span className="text-[#320439] font-[500] text-[11px] sm:text-[20px]">
          {date.getDate()}{' '}{date.toLocaleString('default', { month: 'long' })}
        </span>
      </motion.div>
      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className="w-full h-1/2 rounded-md p-2 flex  justify-between items-center font-[300]  "
      >
      <Link href='/auth'>  <motion.button whileTap={{ scale: 0.9 }} whileHover={{scale:1.5}} className="py-1 px-2 border-[1px] shadow-lg rounded-md">
          👤
        </motion.button></Link>
        <motion.button
        whileTap={{ scale: 0.9 }} whileHover={{scale:1.5}}
          onClick={() => {
            isDay ? dispatch(setNight())&  setIsDay((n) => !n) & dispatch(setTextNight()) & dispatch(setModalNight()) : dispatch(setDay()) & setIsDay((n) => !n) & dispatch(setTextDefault()) & dispatch(setModalDefault())
            
          }}
          className="py-1 px-2 border-[1px] shadow-lg rounded-md"
        >
          {isDay ? "🌘" : "🌞"}
        </motion.button>

      <Link href="/Homepage">  <motion.button whileTap={{ scale: 0.9 }} whileHover={{scale:1.5}} className="py-1 px-2 border-[1px] shadow-lg rounded-md">
          🏠
        </motion.button></Link>
     <Link href='/Settings'>  <motion.button whileTap={{ scale: 0.9 }} whileHover={{scale:1.5}} className="py-1 px-2 border-[1px] shadow-lg rounded-md">
          ⚙️
        </motion.button></Link> 
      </motion.div>
    </div>
  );
};

export default UserInfo;
