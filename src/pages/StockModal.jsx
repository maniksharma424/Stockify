import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { defaultOpacity } from "@/slices/dashboardSlice";
import { ALPHA_VANTAGE_KEY } from "@/constants";
import { addToBackend, getStockPrice } from "@/utilities";
import { addBookmarks, deleteBookmark } from "@/slices/boookmarksSlice";
import { deleteFromBackend } from "@/utilities";
import Chart from "./Chart";

const StockModal = ({ item, handleModal, handleSuggestions }) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

 useEffect(() => {
    const getPrice = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
          item["1. symbol"] ? item["1. symbol"] : item["01. symbol"]
        }&apikey=` + ALPHA_VANTAGE_KEY
      )
        .then((res) => res.json())
        .catch((err) => new Error(err));
      const info = await response["Global Quote"];
      setData(info);
    };
   item["1. symbol"] ?  getPrice():setData(item)
  }, []);

  const background = useSelector((store) => store.dashboardSlice.modalBg);

  if (data)
    return (
      <motion.div
        initial={{ y: "40%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className={`w-full sm:w-[520px]  sm:left-[450px]  h-[400px] ${background} absolute z-40  bottom-0 p-3 border-[1px] rounded-md `}
      >
        <div className="w-full h-1/4  p-2">
          <p className="font-[300] text-[18px] tracking-wide">
            {data["01. symbol"]}
          </p>
          <div className="w-2/5 flex justify-between text-[12px]">
            {data["8. currency"] && (
              <p className="p-1 bg-blue-100 rounded-md text-blue-700 ">
                {data["8. currency"]}
              </p>
            )}
            <p
              className={
                parseFloat(data?.["05. price"]) > 0
                  ? "text-green-500 p-1"
                  : "text-red-600 p-1"
              }
            >
              {parseFloat(data["05. price"])?.toFixed(2)}
            </p>
            <p
              className={
                parseFloat(data?.["10. change percent"]) > 0
                  ? "text-green-500 p-1"
                  : "text-red-600 p-1"
              }
            >
              {parseFloat(data["10. change percent"])?.toFixed(2) + "%"}
            </p>
          </div>
        </div>
        <div className=" chart max-w-full h-2/4 border-[1px]  shadow-lg">
          <Chart item={data} />
        </div>
        <div className="w-full h-1/4  flex justify-around items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border-[1px] px-7 py-2 text-[16px] bg-red-500 text-white rounded-md shadow-lg"
            onClick={() => {
              handleModal();
              dispatch(defaultOpacity());
            }}
          >
            Cancel
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border-[1px] px-7 py-2 text-[16px] bg-blue-500 text-white rounded-md shadow-lg"
            onClick={() => {
              handleModal();
              {
                handleSuggestions && handleSuggestions();
              }
              dispatch(defaultOpacity());
              item["1. symbol"]
                ? addToBackend(data) && dispatch(addBookmarks(data))
                : deleteFromBackend(data) && dispatch(deleteBookmark(data));
            }}
          >
            {item["1. symbol"] ? "Subscribe" : "Unsubscribe"}
          </motion.button>
        </div>
      </motion.div>
    );
  else
    return (
      <div
        className={`w-full sm:w-[520px]  sm:left-[450px]  h-[400px] ${background} absolute z-40  flex flex-col justify-between items-center bottom-0 p-3 border-[1px] rounded-md `}
      >
        <img
        className="w-[300px]"
          src={
            "https://static.tradingview.com/static/bundles/404-error.39a1bc10be7d350b2682.svg"
          }
          alt="IMG"
        />
        <p className=" tracking-widest text-[21px] font-[300]">API Request Limit Reached</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border-[1px] px-32 py-2 text-[16px] bg-blue-500 text-white rounded-md shadow-lg"
          onClick={() => {
            handleModal();
            dispatch(defaultOpacity());
          }}
        >
          Go Back
        </motion.button>
      </div>
    );
};

export default StockModal;
