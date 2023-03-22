import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { defaultOpacity } from "@/slices/dashboardSlice";
import { ALPHA_VANTAGE_KEY } from "@/constants";
import { getStockPrice } from "@/utilities";
import { addBookmark } from "@/slices/boookmarksSlice";
import Chart from "./Chart";

const StockModal = ({ item, handleModal, handleSuggestions }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  console.log('stock modal');
  useEffect(() => {

    const getPrice = async () => {
      
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${item["1. symbol"]}&apikey=` +
          ALPHA_VANTAGE_KEY
      ).then((res) => res.json());
      const info = await response["Global Quote"];
      setData(info);
    };
    getPrice();

  }, []);
  console.log(data);
const background = useSelector(store=>store.dashboardSlice.modalBg)
 
if(data === undefined) return <p>hi</p>

else return (
    <motion.div
      initial={{ y: "40%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className={`w-full sm:w-[520px]  sm:left-[450px]  h-[400px] ${background} absolute z-40  bottom-0 p-3 border-[1px] rounded-md `}
    >
      <div className="w-full h-1/4  p-2">
        <p className="font-[300] text-[18px] tracking-wide">
          {item["2. name"]}
        </p>
        <div className="w-2/5 flex justify-between text-[12px]">
          <p className="p-1 bg-blue-100 rounded-md text-blue-700 ">
            {item["8. currency"]}
          </p>
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
        <Chart item={item} />
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
            dispatch(addBookmark(data))
            handleModal();
            handleSuggestions();
            dispatch(defaultOpacity());
          }}
        >
          Subscribe
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StockModal;
