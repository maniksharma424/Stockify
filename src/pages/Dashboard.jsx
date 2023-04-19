import React from "react";
import Head from "next/head";
import UserInfo from "./UserInfo";
import Bookmarks from "./Bookmarks";
import AddBookmark from "./AddBookmark";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header";
import supabase from "@/config/supabaseClient";
import { addBookmark, setBookmarks } from "@/slices/boookmarksSlice";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [userBookmarks, setUserBookmarks] = useState(null);
  const opacity = useSelector((store) => store.dashboardSlice.opacity);
  const background = useSelector((store) => store.dashboardSlice.background);
  const text = useSelector((store) => store.dashboardSlice.text);
  const dispatch = useDispatch();

  useEffect(() => {
    const authInfo = async () => {
      const Details = await JSON.parse(
        localStorage.getItem("sb-tqjnbdxfwtkvzmnwvpdu-auth-token")
      );
      setUserDetails(Details);

      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("phone", Details?.user?.user_metadata?.phoneNumber);

      dispatch(setBookmarks(data[0]?.stocks))

    };
    authInfo();
  }, []);

  if (userDetails)
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>

        <div
          className="max-w-full flex justify-center items-center 
      bg-cover bg-no-repeat"
        >
          <div
            className={`container max-w-full sm:w-2/5 h-[800px]  flex flex-col justify-around items-center border-[1px] shadow-2xl rounded-lg ${opacity} 
           ${background} ${text} 
           `}
          >
            <UserInfo info={userDetails} />
            <AddBookmark />
            <Bookmarks />
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <Header></Header>
        <p>
          <Link className="px-3 py-1 border-[1px] " href="/Profile">
            login
          </Link>
        </p>
      </>
    );
};

export default Dashboard;
