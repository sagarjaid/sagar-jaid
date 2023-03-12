import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>About Sagar Jaid — Building CAREERDEKHO AI!</title>
        <meta name="title" content="Sagar Jaid — Building CAREERDEKHO!" />
        <meta
          name="description"
          content="Sagar Jaid, Official Website. Hustler Hacker and Hipster."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sagarjaid.com/" />
        <meta
          property="og:title"
          content="Sagar Jaid — Building CAREERDEKHO!"
        />
        <meta
          property="og:description"
          content="Sagar Jaid, Official Website. Hustler Hacker and Hipster."
        />
        <meta property="og:image" content="./sagar-cover-v1.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sagarjaid.com/" />
        <meta
          property="twitter:title"
          content="Sagar Jaid — Building CAREERDEKHO!"
        />
        <meta
          property="twitter:description"
          content="Sagar Jaid, Official Website. Hustler Hacker and Hipster."
        />
        <meta property="twitter:image" content="./sagar-cover-v1.png" />
      </Head>
      <div>
        <nav className="text-white bg-black ">
          <div className="max-w-6xl m-auto flex justify-between items-center p-4">
            <div className="flex justify-start gap-4 items-center">
              <a href="/">
                <img className="w-[120px]" src="./sagarjaid-logo-v1.png" />
              </a>
              <ul className=" hidden text-sm sm:flex gap-4 justify-around">
                <li>
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/about">about</a>
                </li>
                <li>
                  <a href="/work">work</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-around items-center gap-4">
              <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
                <img className="w-4 -mt-1" src="./linkedin-svg.svg" />
              </a>
              <a href="https://twitter.com/Jaid_Sagar" target="_blank">
                <img className="w-4" src="./twitter-svg.svg" />
              </a>
            </div>
          </div>
        </nav>
        <div>
          <ul className="text-sm flex gap-4 justify-around p-1 sm:hidden">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/work">work</a>
            </li>
          </ul>
        </div>

        {/* Hero */}
        <div>
          <div className="flex justify-center items-center h-screen">
            <h3>coming soon</h3>
          </div>
          <div>
            <svg
              className="w-10 p-2 rounded-md fixed bottom-4 right-4 bg-blue-500"
              fill="none"
              stroke="white"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
