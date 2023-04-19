
 import { sortBookmarks } from "./slices/boookmarksSlice";
 const sortByPriceAscending = (arr) => {
    arr.sort((a, b) => {
      return parseFloat(a["05. price"]) - parseFloat(b["05. price"]);
    });
    return arr;
  };
   const sortByPriceDescending = (arr) => {
    return arr.sort(
      (a, b) => parseFloat(b["05. price"]) - parseFloat(a["05. price"])
    );
  };
   const sortByChangePercentAscending = (arr)=> {
    return arr.sort(
      (a, b) =>
        parseFloat(a["10. change percent"]) -
        parseFloat(b["10. change percent"])
    );
  }
   const sortByChangePercentDescending = (arr)=> {
    return arr.sort(
      (a, b) =>
        parseFloat(b["10. change percent"]) -
        parseFloat(a["10. change percent"])
    );
  }

 export  const PriceHighToLow = (bookmarks,dispatch) => {
    const readOnlyArray = bookmarks;
    const mutableArray = readOnlyArray.slice();

    const newBookmarks = sortByPriceDescending(mutableArray);
    dispatch(sortBookmarks(newBookmarks));
  };
  export const PriceLowToHigh = (bookmarks,dispatch) => {
    const readOnlyArray = bookmarks;
    const mutableArray = readOnlyArray.slice();

    const newBookmarks = sortByPriceAscending(mutableArray);
    dispatch(sortBookmarks(newBookmarks));
  };
 export  const ChangeHighToLow = (bookmarks,dispatch) => {
    const readOnlyArray = bookmarks;
    const mutableArray = readOnlyArray.slice();

    const newBookmarks = sortByChangePercentDescending(mutableArray);
    dispatch(sortBookmarks(newBookmarks));
  };
 export  const ChangeLowToHigh = (bookmarks,dispatch) => {
    const readOnlyArray = bookmarks;
    const mutableArray = readOnlyArray.slice();

    const newBookmarks = sortByChangePercentAscending(mutableArray);
    dispatch(sortBookmarks(newBookmarks));
  };