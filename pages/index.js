import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Sagar Jaid — Building CAREERDEKHO AI!</title>
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
          <div className=" m-auto flex justify-between items-center p-4 sm:px-6">
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
          <div className="flex flex-col sm:flex-row justify-between gap-6 items-center">
            <div className="sm:w-[50%] flex justify-center">
              <img
                className="w-full object-cover sm:h-screen"
                src="./sagar-cover-v1.png"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:w-[50%] mb-10 sm:mb-0 px-4">
              <h2 className="text-4xl font-bold">Sagar Jaid</h2>
              <p className="text-sm">
                building{" "}
                <a href="https://careerdekho.ai/" target="_blank">
                  <img
                    className="w-[120px] inline border p-0.5 rounded-sm"
                    src="./careerdekho-logo.svg"
                  />
                </a>{" "}
                — Ai career discovery & pathfinder
              </p>
              <p className="text-sm">
                A Software Engineer, I talk about startups, digital marketing &
                life.
              </p>
              <p className="text-sm">
                <a href="/books">books I love & practice {">"} </a>
              </p>
              <a
                href="https://www.linkedin.com/in/sagarjaid/"
                target="_blank"
                className="bg-black w-fit text-sm text-white py-2 gap-2 px-3 rounded-md flex justify-between items-center"
              >
                <svg
                  className="w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  />
                </svg>
                <span>Lets Talk</span>
              </a>
            </div>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
