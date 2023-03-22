import { getSuggestions } from "@/utilities";
import React, { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";
import SuggestionCard from "./SuggestionCard";
const AddBookmark = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <motion.div
        className=" w-11/12  flex justify-center  "
        whileTap={{ scale: 0.9 }}
      >
        <motion.input
          value={text}
          placeholder="Start typing..."
          onChange={(e) => {
            setText(e.target.value);
            getSuggestions(e.target.value, setSuggestions);
          }}
          ref={inputRef}
          type="text"
          className="w-full border-[1px] font-[300]  h-10 rounded-md mt-3 px-2 shadow-xl bg-inherit"
        />
      </motion.div>
      {text === "" ? (
        <span className="text-[20px] w-2 absolute top-[215px] sm:right-[490px] right-9">
          🔍
        </span>
      ) : (
        <button
          onClick={() => {
            setText("");
          }}
          className="text-[23px] font-[100]  px-2 absolute sm:right-[460px] top-[215px] right-5 "
        >
          x
        </button>
      )}

      {text === "" ? null : (
        <ul className=" sm:w-[530px] w-11/12 border-[1px]  max-h-fit min-h-min absolute top-[253px] sm:top-[253px]   flex flex-col z-20 shadow-2xl rounded-lg">
          {suggestion.map((item, index) => {
            return (
              <SuggestionCard
                handleSuggestions={() => {
                  setText("");
                }}
                item={item}
                key={index}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default AddBookmark;
