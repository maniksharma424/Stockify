import React from "react";
import Head from "next/head";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Bookmarks from "./Bookmarks";
import AddBookmark from "./AddBookmark";
import { CONTAINER } from "@/constants";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const opacity = useSelector((store) => store.dashboardSlice.opacity);
  const background = useSelector((store) => store.dashboardSlice.background);
  const text = useSelector((store) => store.dashboardSlice.text);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="max-w-full flex justify-center items-center 
      bg-cover bg-no-repeat">
        <div
          className={`container max-w-full sm:w-2/5 h-[800px]  flex flex-col justify-around items-center border-[1px] ${opacity}
           ${background} ${text} 
           `}
        >
          <UserInfo />
          <AddBookmark />
          <Bookmarks />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
