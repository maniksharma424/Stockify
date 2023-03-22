import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockPrice } from "@/utilities";
import {  motion } from "framer-motion";
import { createPortal } from "react-dom";
import StockModal from "./StockModal";
import { changeOpacity } from "@/slices/dashboardSlice";

const SuggestionCard = ({ item,handleSuggestions }) => {
  const [showModal, setShowModal] = useState(false);
  const [added, setAdded] = useState({
    value: "+",
    color: "green-500",
    bg: "white",
  });
  const dispatch = useDispatch();
  const background = useSelector(store=>store?.dashboardSlice.background)
  return (
    <>
      <li
        onClick={() => {
          setShowModal(true);
          dispatch(changeOpacity());
        }}
        className = {` w-full  px-2 py-2 flex  justify-between items-center ${background} relative z-20    font-[500] text-[14px] border-b text-inherit`}
      >
        <p className="w-5/6">
          {item["2. name"]}{' '}
          <span className="text-[7px] p-0.5 rounded-sm  bg-blue-400 text-white">{item["8. currency"]}</span>
        </p>

        <motion.button
          whileTap={{ scale: 0.5 }}
          onClick={(e) => {
            e.stopPropagation();
            getStockPrice(dispatch, item["1. symbol"]);
            setAdded({ value: "✓", color: "white", bg: "red-500" });
          }}
          className={`rounded-md w-1/6  border-[1px] text-${added.color} bg-${added.bg}`}
        >
          {added.value}
        </motion.button>
      </li>
      {showModal
        ? createPortal(
            <StockModal
            handleSuggestions={()=>{handleSuggestions()}}
              handleModal={() => {
                setShowModal(false);
                
              }}
              item={item}
            />,
            document.body
          )
        : null}
    </>
  );
};

export default SuggestionCard;
