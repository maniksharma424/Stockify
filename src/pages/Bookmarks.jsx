import React, { useState } from "react";
import { motion } from "framer-motion";
import BookmarkCard from "./BookmarkCard";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { changeOpacity, defaultOpacity } from "@/slices/dashboardSlice";
import Sort from "./Sort";
import { Breathing } from "react-shimmer";
const Bookmarks = () => {
  const [sorted, setSorted] = useState(false);
  const addedBookmarks = useSelector((store) => store?.bookmarks?.bookmarks);
  const dispatch = useDispatch();
  const handleModal = () => {
    setSorted(false);
    dispatch(defaultOpacity());
  };
  return (
    <>
      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className="bookmarks w-11/12 h-3/5 border-[1px]  p-2 rounded-lg overflow-scroll shadow-lg bg-inherit"
      >
        <div className="w-full flex justify-between  sticky z-70 top-0  " >
          My Bookmarks{" "}
          <motion.button
            onClick={() => {
              setSorted((n) => !n);
              dispatch(changeOpacity());
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.5 }}
            className="px-1 rounded-md bg-gray-100 font-[100]"
          >
            ⚙️ Sort
          </motion.button>
        </div>
        <ul className="flex flex-col py-2 items-start">
          {addedBookmarks?.length > 0 ? (
            <li className="w-full flex  text-[13px] font-[100] sticky z-80 top-7">
              <p className="w-1/2  px-1 font-[600]">Symbol</p>

              <p className=" w-1/4 font-[600]">Change %</p>
              <p className="w-1/4 font-[600] flex justify-end">Price</p>
            </li>
          ) : null}

          {addedBookmarks?.length <= 0 ? (
            <div className="text-[16px] w-full h-[250px] flex flex-col justify-around items-center text-gray-600 relative font-[100] ">
              <Breathing width={330} height={20} />
              <Breathing width={330} height={20} />
              <Breathing width={330} height={20} />
              <Breathing width={330} height={20} />
              <Breathing width={330} height={20} />
              <Breathing width={330} height={20} />
              <Breathing width={330} height={20} />
            </div>
          ) : (
            addedBookmarks?.map((bookmark, index) => {
              return <BookmarkCard key={index} bookmark={bookmark}   />;
            })
          )}
        </ul>
      </motion.div>
      {sorted
        ? createPortal(
            <Sort bookmarks={addedBookmarks} handelModal={handleModal} />,
            document.body
          )
        : null}
    </>
  );
};

export default Bookmarks;
