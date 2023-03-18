import { addBookmark } from "@/slices/boookmarksSlice";
import { getStockPrice, getSuggestions } from "@/utilities";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

const AddBookmark = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className=" w-11/12  flex justify-center ">
        <input
          value={text}
          placeholder="Search and add..."
          onChange={(e) => {
            setText(e.target.value);
            getSuggestions(e.target.value, setSuggestions);
          }}
          ref={inputRef}
          type="text"
          className="w-full border-[1px]  h-10 rounded-md mt-3 px-2 shadow-xl"
        />
        {text === "" ? (
          <p className="text-[20px] w-0 relative top-4 right-7">🔍</p>
        ) : (
          <button
            onClick={() => {
              setText("");
            }}
            className="  text-[25px] w-0 h-4 font-[100]  rounded-md relative right-5 top-2 "
          >
            x
          </button>
        )}
      </div>

      {text === "" ? null : (
        <ul className="w-11/12 border-[1px]  max-h-fit min-h-min absolute top-[300px] sm:top-[308px]   flex flex-col  z-20 shadow-2xl rounded-lg">
          {suggestion.map((item, index) => {
            return (
              <button
                className=" w-full  mx-2 py-1 flex justify-start bg-white font-[300]"
                onClick={() => {
                  getStockPrice(dispatch, item["1. symbol"]);
                  setText('')
                }}
                key={index}
              >
                <span> {item["2. name"]}</span>
              </button>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default AddBookmark;
