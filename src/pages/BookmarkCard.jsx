import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import StockModal from "./StockModal";

const BookmarkCard = ({ bookmark }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => {
          setShowModal(true);
        }}
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className="flex justify-start w-full font-[200] text-[14px] mt-1 "
      >
        <li className="w-full p-1 flex justify-between border-[1px]">
          <p className="w-1/2">{bookmark?.["01. symbol"]}</p>
          <div
            className={
              parseFloat(bookmark?.["10. change percent"]) > 0
                ? "text-green-500 w-1/2 flex"
                : "text-red-600 w-1/2 flex"
            }
          >
            <p className="w-1/2">
              {parseFloat(bookmark?.["10. change percent"]).toFixed(2) + "%"}
            </p>
            <p className="w-1/2 flex justify-end">
              {parseFloat(bookmark?.["08. previous close"]).toFixed(2)}
            </p>
          </div>
        </li>
      </motion.button>
      {showModal
        ? 
        createPortal(
            <StockModal
              handleModal={() => {
                setShowModal(false);
              }}
              item={bookmark}
            />,
            document.body
          )

        : null}
    </>
  );
};

export default BookmarkCard;
