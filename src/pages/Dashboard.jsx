import React from "react";
import Head from "next/head";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Bookmarks from "./Bookmarks";
import AddBookmark from "./AddBookmark";
import { CONTAINER } from "@/constants";
const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <div className={CONTAINER}>
        <UserInfo />
        <AddBookmark />
        <Bookmarks />
      </div>
    </>
  );
};

export default Dashboard;
