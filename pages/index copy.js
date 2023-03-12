import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [displayDate, setDisplayDate] = useState("");
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {
    const getFormattedDate = (date) => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const dayName = days[date.getDay()];
      const monthName = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();

      return `${dayName}, ${monthName} ${day}, ${year}`;
    };
    const date = new Date();
    const formattedDate = getFormattedDate(date);
    console.log(formattedDate);
    setDisplayDate(formattedDate);
  }, []);

  return (
    <div>
      <nav className="text-white bg-black ">
        <div className="max-w-6xl m-auto flex justify-between items-center p-6">
          <div className="flex justify-start gap-4 items-center">
            <img className="w-[120px]" src="./sagarjaid-logo-v1.png" />
            <ul className="text-sm flex gap-4 justify-around">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex justify-around items-center gap-4">
            <div className="text-sm">{displayDate}</div>
            <img className="w-5 -mt-1" src="./linkedin-svg.svg" />
            <img className="w-5" src="./twitter-svg.svg" />
          </div>
        </div>
      </nav>
      {/* Hero */}
      <div>
        <div className="flex justify-between gap-6 items-center">
          <div className="w-[50%] flex justify-center">
            <img
              className="w-full object-cover h-screen"
              src="./sagar-cover-v1.png"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 w-[50%]">
            <h2 className="text-4xl font-bold">Sagar Jaid</h2>
            <p className="text-sm">
              building{" "}
              <img
                className="w-[120px] inline border p-0.5 rounded-sm"
                src="./careerdekho-logo.svg"
              />{" "}
              — Ai career discovery & pathfinder
            </p>
            <p className="text-sm">
              A Software Engineer, I talk about Startups, Digital Marketing &
              Life.
            </p>
            <p className="text-sm">I like coffee over tea in meetings…</p>
            <button className="bg-black w-fit text-sm text-white py-2 gap-2 px-3 rounded-md flex justify-between items-center">
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
            </button>
          </div>
        </div>
        <div>
          <svg
            className="w-10 p-2 rounded-md fixed bottom-4 right-4 bg-blue-600"
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

      {/* numbers
      <div className="max-w-6xl m-auto px-4">
        <div className="flex justify-around items-center py-8 text-white bg-black rounded-md">
          <div className="flex flex-col gap-2 justify-between">
            <span className="text-5xl">20+</span>
            <span>Web and App Dev Projects Done</span>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <span className="text-5xl">2m+</span>
            <span>Blog Post Views</span>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <span className="text-5xl">12+</span>
            <span>WordPress & Shopify Website Done</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
