import React, { useState } from "react";
import Header from "./Header";
import supabase from "@/config/supabaseClient";
import Head from "next/head";
import { useRouter } from "next/router";
import { DiGithubBadge, DiChrome } from "react-icons/di";
import { useDispatch } from "react-redux";
import { userLogin } from "@/slices/profileSlice";
const Login = ({ handleAuthentication }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()
  const router = useRouter();
  
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    data.user ? router.push("/Dashboard") : alert(error);
    dispatch(userLogin())
  };
  
  const authProvider = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <div className="container max-w-full h-[800px] flex justify-center items-center ">
        <div className="flex flex-col sm:w-[400px] w-[250px] h-[250px] p-5 sm:h-[400px] justify-around border-[1px] border-black rounded-md  ">
          <div className="flex justify-center sm:text-[25px] sm:font-[600] ">
            Stockify
          </div>
          <label htmlFor="username or phone "></label>
          <input
            className="border-black border-[1px] sm:p-2 p-1 rounded-md"
            placeholder="Username or Phone ..."
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            className="border-black border-[1px] sm:p-2 p-1 rounded-md"
            placeholder="Password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="submit"></label>

          <button
            onClick={() => {
              login();
            }}
            className="sm:px-4 sm:py-2 px-2 py-1 rounded-md bg-black text-white"
          >
            Login
          </button>

          <p className="text-blue-500 text-[15px] font-[200]">
            New User ?{" "}
            <button
              onClick={() => {
                handleAuthentication();
              }}
            >
              Sign up
            </button>{" "}
          </p>

          <button
            onClick={() => {
              authProvider();
            }}
            className="sm:px-4 border-black border-[.5px] sm:py-2 px-2 py-1 rounded-md bg-white text-black flex justify-start items-center font-[100] text-[15px]"
          >
            <span className="text-[20px]">
              <DiGithubBadge />
            </span>{" "}
            login with Github
          </button>
          <button
            onClick={() => {
              authProvider();
            }}
            className="sm:px-4 border-black border-[.5px] sm:py-2 px-2 py-1 rounded-md bg-white text-black flex justify-start items-center font-[100] text-[15px]"
          >
            <span className="text-[20px]">
              <DiChrome />
            </span>
            {"  "} login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
