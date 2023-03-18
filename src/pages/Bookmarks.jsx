import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store";
import { deleteBookmark } from "@/slices/boookmarksSlice";
import { motion } from "framer-motion";

const Bookmarks = () => {
  const [selectStocks, setSelectStocks] = useState(false);

  const addedBookmarks = useSelector((store) => store?.bookmarks?.bookmarks);

  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="bookmarks w-11/12 h-3/5 border-[1px]  p-2 rounded-lg overflow-scroll shadow-xl"
    >
      <li className="w-11/12 p-1 flex justify-between ">
        <p>My Bookmarks</p>
        <p>
          {addedBookmarks.length > 0 ? (
            <button
              onClick={() => {
                setSelectStocks((n) => !n);
              }}
              className=" px-1 border-[1px] font-[100] shadow-md"
            >
              {" "}
              {selectStocks ? <span>Done</span> : <span>Unsubscribe</span>}
            </button>
          ) : null}
        </p>
      </li>
      <ul className="flex flex-col py-2 items-start">
        {addedBookmarks.length > 0 ? (
          <li className="w-full flex  text-[13px] font-[100]">
            <div className="w-1/2  px-1">Symbol</div>
            <div className="flex justify-between px-4 w-1/2 ">
              <p className="">%change</p>
              <p className="">Price</p>
            </div>
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
                  {selectStocks ? (
                    <button
                      onClick={() => {
                        dispatch(deleteBookmark(bookmark));
                        console.log(bookmark);
                      }}
                      className="relative   px-2 rounded-md left-[10px]"
                    >
                      🗑
                    </button>
                  ) : null}
                  <p className="w-1/3">{bookmark?.["01. symbol"]}</p>
                  <p
                    className={
                      parseFloat(bookmark?.["09. change"]) > 0
                        ? "text-green-500"
                        : "text-red-600"
                    }
                  >
                    {parseFloat(bookmark?.["09. change"]).toFixed(2) + "%"}
                  </p>
                  <p
                    className={
                      parseFloat(bookmark?.["09. change"]) > 0
                        ? "text-green-500"
                        : "text-red-600"
                    }
                  >
                    {parseFloat(bookmark?.["08. previous close"]).toFixed(2)}
                  </p>
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
