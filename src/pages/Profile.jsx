import React from "react";
import { useState, useEffect } from "react";
import Auth from "./auth";
import supabase from "@/config/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "@/slices/profileSlice";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  const dispatch = useDispatch();
  const [accountDetails, setAccountDetails] = useState(null);
  useEffect(() => {
    setAccountDetails(
      JSON.parse(localStorage.getItem("sb-tqjnbdxfwtkvzmnwvpdu-auth-token"))
    );
  }, []);

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    dispatch(userLogout());
  };

  if (accountDetails) return <ProfileDetails/>;
  else return <Auth/>
};

export default Profile;
