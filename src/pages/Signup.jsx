import Head from "next/head";
import React from "react";
import { useState } from "react";
import Header from "./Header";
import supabase from "@/config/supabaseClient";
import { DiGithubBadge, DiChrome } from "react-icons/di";
import { useRouter } from "next/navigation";
import { signUp } from "@/auth";

const Signup = ({ handleAuthentication }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const[name,setName] = useState('')

  const router = useRouter();

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: username,
      password: password,
      options: {
        data: {
          phoneNumber: phone,
          name:name
        },
      },
    });

    if (data) {
      router.push("/Dashboard");
    }
  };
  const submitData = async () => {
    const { data, error } = await supabase
      .from("users")
      .insert({ username: username, phone: phone, stocks: [] });
  };
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Header />
      <div className="container max-w-full h-[800px] flex justify-center items-center ">
        <div
          className="flex flex-col sm:w-[400px] w-[250px] h-[350px] p-5 sm:h-[500px] justify-around border-[1px] border-black rounded-md "
          action=""
        >
          <div className="flex justify-center sm:text-[25px] sm:font-[600] ">
            Stockify
          </div>
          <input
            type="text"
            className="border-black border-[1px] sm:p-2 p-1 rounded-md"
            placeholder="Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            className="border-black border-[1px] sm:p-2 p-1 rounded-md"
            placeholder="PhoneNumber..."
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            className="border-black border-[1px] sm:p-2 p-1 rounded-md"
            placeholder="email..."
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
            placeholder="Set password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <label htmlFor="submit"></label>
          <button
            onClick={(e) => {
              e.preventDefault();
              signUp();
              submitData();
            }}
            className="sm:px-4 sm:py-2 px-2 py-1 rounded-md bg-black text-white"
          >
            Sign up
          </button>
          <p className="text-blue-500 text-[15px] font-[200]">
            Already have an account ?{" "}
            <button
              onClick={() => {
                handleAuthentication();
              }}
            >
              log in
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
            signUp with Github
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
