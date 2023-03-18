import { useDispatch } from "react-redux";
import { ALPHA_VANTAGE_KEY } from "./constants";
import { addBookmark } from "./slices/boookmarksSlice";


const debounce = (callback, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const getSuggestionResults = async (text, setSuggestions) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=${ALPHA_VANTAGE_KEY}`
  );

  const json = await response.json().catch((err) => {
    throw new Error();
  });
  if (json.bestMatches) return setSuggestions(json?.bestMatches);
  else return null;
};
export const getSuggestions = debounce(getSuggestionResults, 400);

/////////////////////////////////////////////////////////////////////////////
export const getStockPrice = async (dispatch,symbol) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=` +
      ALPHA_VANTAGE_KEY
  ).then(res=>res.json())

  const data = await response["Global Quote"]
// console.log(data["Global Quote"]);
console.log(data);

  dispatch(addBookmark(data));
};

