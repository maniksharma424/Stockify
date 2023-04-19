import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { sortBookmarks } from "@/slices/boookmarksSlice";
import {
  PriceHighToLow,
  PriceLowToHigh,
  ChangeHighToLow,
  ChangeLowToHigh,
} from "@/sort";

const Sort = ({ handelModal, bookmarks }) => {
  const background = useSelector((store) => store.dashboardSlice.modalBg);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ y: "40%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className={`w-full sm:w-[520px]  sm:left-[450px]  ${background} absolute z-40  bottom-0 p-3 border-[1px] rounded-md `}
    >
      <div className="w-full p-2 flex h-[200px] items-baseline justify-between flex-col ">
        <button
          onClick={() => {
            ChangeHighToLow(bookmarks, dispatch);
            handelModal()
          }}
          initial={{ y: "40%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full text-blue-500 border-[0.3px]   rounded-sm py-1 font-[300] "
        >
          {" "}
          Change ⤵{" "}
        </button>
        <button
          onClick={() => {
            PriceHighToLow(bookmarks, dispatch);
            handelModal()
          }}
          initial={{ y: "40%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full text-blue-500 border-[0.3px]   rounded-sm py-1 font-[300] "
        >
          {" "}
          Price ⤵{" "}
        </button>
        <button
          onClick={() => {
            PriceLowToHigh(bookmarks, dispatch);
            handelModal()
          }}
          initial={{ y: "40%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full text-blue-500 border-[0.3px]   rounded-sm py-1 font-[300] "
        >
          {" "}
          Price ⤴{" "}
        </button>
        <button
          onClick={() => {
            ChangeLowToHigh(bookmarks, dispatch);
            handelModal()
          }}
          initial={{ y: "40%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full text-blue-500 border-[0.3px]   rounded-sm py-1 font-[300] "
        >
          {" "}
          Change ⤴{" "}
        </button>
        <button
          onClick={() => handelModal()}
          initial={{ y: "40%", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-full text-red-500 border-[0.3px]   rounded-sm py-1 font-[300] "
        >
          {" "}
          Cancel{" "}
        </button>
      </div>
    </motion.div>
  );
};

export default Sort;
