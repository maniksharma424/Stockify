import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const UserInfo = () => {

  const date = new Date();
  const addedBookmarks = useSelector((store) => store?.bookmarks?.bookmarks);

  return (
    <div className="user-info w-11/12 h-1/6 flex justify-between rounded-md ">
      <motion.div 
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="w-1/2 border-[1px] rounded-md p-2 flex flex-col justify-around items-start font-[300] shadow-xl ">
        <button>View Profile</button>
        <button>Settings</button>
        <button>Log Out</button>
        
      </motion.div>
      <motion.div
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className=" other-info w-1/2 mx-2 border-[1px] rounded-md p-2 flex flex-col justify-around items-start font-[300] shadow-xl">
        <p className="text-[17px] font-[100]">Manik Sharma</p>
        <p> Bookmarks : <span className="text-blue-500">{addedBookmarks?.length} </span></p>
      <span className="text-blue-500 text-[10px]">
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </span>
       
      </motion.div>
    </div>
  );
};

export default UserInfo;
