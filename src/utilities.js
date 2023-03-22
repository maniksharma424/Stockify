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

  dispatch(addBookmark(data));
};

export const formatDate = (dateStr) =>{
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  return `${day} ${month.substring(0,3)}`;
}