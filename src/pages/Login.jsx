import React, { useState } from "react";
import Header from "./Header";
import Link from "next/link";
import Head from "next/head";

const Login = ({handleAuthentication}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Head>
        <title>Login</title>
    </Head>
    <Header/>
      <div className="container max-w-full h-[800px] flex justify-center items-center ">
        <form
          className="flex flex-col sm:w-[400px] w-[250px] h-[250px] p-5 sm:h-[300px] justify-around border-[1px] border-black rounded-md "
          action=""
        >
            <div className="flex justify-center sm:text-[25px] sm:font-[600] ">Stockify</div>
          <label htmlFor="username"></label>
          <input
            className="border-black border-[1px] sm:p-2 p-1 rounded-md"
            placeholder="Username..."
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
          <button className="sm:px-4 sm:py-2 px-2 py-1 rounded-md bg-black text-white">Login</button>
          <p className="text-blue-500 text-[15px]">New User ? <button onClick={()=>{handleAuthentication()}}>Sign up</button> </p>
        </form>
      </div>
    </>
  );
};

export default Login;
