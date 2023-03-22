import React, { useState } from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const Bookmarks = () => {
  const addedBookmarks = useSelector((store) => store?.bookmarks?.bookmarks);

  return (
    <motion.div
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="bookmarks w-11/12 h-3/5 border-[1px]  p-2 rounded-lg overflow-scroll shadow-xl bg-inherit"
    >
      <p>My Bookmarks</p>
      <ul className="flex flex-col py-2 items-start">
        {addedBookmarks.length > 0 ? (
          <li className="w-full flex  text-[13px] font-[100]">
            <p className="w-1/2  px-1 font-[600]">Symbol</p>

            <p className=" w-1/4 font-[600]">Change %</p>
            <p className="w-1/4 font-[600] flex justify-end">Price</p>
          </li>
        ) : null}

        {addedBookmarks.length <= 0 ? (
          <p className="text-[16px] text-gray-600 relative top-28 left-14 font-[100] ">
            Add bookmarks to get notified..
          </p>
        ) : (
          addedBookmarks?.map((bookmark, index) => {
            return (
              <motion.div
                initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                className="flex justify-start w-full font-[200] text-[14px] mt-1"
              >
                <li
                  key={index}
                  className="w-full p-1 flex justify-between border-[1px]"
                >
                  <p className="w-1/2">{bookmark?.["01. symbol"]}</p>
                  <div
                    className={
                      parseFloat(bookmark?.["10. change percent"]) > 0
                        ? "text-green-500 w-1/2 flex"
                        : "text-red-600 w-1/2 flex"
                    }
                  >
                    <p className="w-1/2">
                      {parseFloat(bookmark?.["10. change percent"]).toFixed(2) +
                        "%"}
                    </p>
                    <p className="w-1/2 flex justify-end">
                      {parseFloat(bookmark?.["08. previous close"]).toFixed(2)}
                    </p>
                  </div>
                </li>
              </motion.div>
            );
          })
        )}
      </ul>
    </motion.div>
  );
};

export default Bookmarks;
