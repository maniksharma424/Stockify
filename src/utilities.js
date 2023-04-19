import { useDispatch, useSelector } from "react-redux";
import supabase from "./config/supabaseClient";
import { ALPHA_VANTAGE_KEY } from "./constants";
import { addBookmarks } from "./slices/boookmarksSlice";

const debounce = (callback, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};



/////////////////////////////////////////

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
export const getStockPrice = async (dispatch, symbol) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=` +
      ALPHA_VANTAGE_KEY
  ).then((res) => res.json());

  const stockData = await response["Global Quote"];

 stockData ?  dispatch(addBookmarks(stockData)):null
 stockData ?  addToBackend(stockData):null


};






export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  return `${day} ${month.substring(0, 3)}`;
};

export const addToBackend = async (stockData) => {
  const authInfo = await JSON.parse(
    localStorage.getItem("sb-tqjnbdxfwtkvzmnwvpdu-auth-token")
  );

  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("phone", authInfo?.user?.user_metadata?.phoneNumber);

  const Bookmarks = data[0]?.stocks;

  if (Bookmarks) {
    const addedBookmark = [stockData];

    const newBookmarks = Bookmarks.concat(addedBookmark);

    const { data, error } = await supabase
      .from("users")
      .update({ stocks: newBookmarks })
      .eq("phone", authInfo?.user?.user_metadata?.phoneNumber)
      .select();
  } else {
    const { Data, error } = await supabase
      .from("users")
      .update({ stocks: [stockData] })
      .eq("phone", authInfo?.user?.user_metadata?.phoneNumber)
      .select();


  }
  return true
};
export const deleteFromBackend = async (stockData) => {
  const authInfo = await JSON.parse(
    localStorage.getItem("sb-tqjnbdxfwtkvzmnwvpdu-auth-token")
  );

  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("phone", authInfo?.user?.user_metadata?.phoneNumber);

  const Bookmarks = data[0]?.stocks;

  if (Bookmarks) {

    const newBookmarks = Bookmarks.filter(item=>item["01. symbol"] !== stockData["01. symbol"])


    const { data, error } = await supabase
      .from("users")
      .update({ stocks: newBookmarks })
      .eq("phone", authInfo?.user?.user_metadata?.phoneNumber)
      .select();
  }
  return true

};

