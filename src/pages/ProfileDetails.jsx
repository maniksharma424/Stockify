import React from "react";
import supabase from "@/config/supabaseClient";
const ProfileDetails = () => {
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    location.reload()
  };
  return (
    <div>
      <button onClick={() => {logout()}} className="p-2 border-[1px] ">
        log out
      </button>
    </div>
  );
};

export default ProfileDetails;
