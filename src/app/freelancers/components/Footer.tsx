"use client";
import React from "react";
import { footerElements } from "../utility/footerElements";
import { socialMedia } from "../utility/SocialMedia";
import { useState } from "react";

/**
 * Footer component, renders the footer elements and social media links.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer = () => {
  const [Language, setLanguage] = useState("");
  const currentYear: number = new Date().getFullYear();
  const FooterElements: Record<string, [string, string][]> = footerElements;

  const renderFooterElements = Object.keys(FooterElements).map((key) => (
    <div className="flex flex-col " key={key}>
      <h1 className="font-bold text-xl mb-2">{key}</h1>
      <ul>
        {FooterElements[key].map((item) => (
          <a
            key={item[0]}
            href={item[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="mb-3 cursor-pointer">{item[0]}</li>
          </a>
        ))}
      </ul>
    </div>
  ));
  const renderSocialMedia = Object.keys(socialMedia).map((key) => (
    <a
      key={key}
      className=" w-20 h-20"
      href={socialMedia[key].href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="w-20 h-20" src={socialMedia[key].src} alt={key} />
    </a>
  ));

  return (
    <>
      <footer className="mt-12  py-10 px-6 text-sm text-gray-700">
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 mb-6 relative">
          {renderFooterElements}
          <div className=" md:absolute bottom-0 right-0 flex flex-col items-start">
            <h2 className="sm:display-none ml-3 font-bold text-xl mb-2">
              Social Media
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-1.5">
              {renderSocialMedia}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center border-t pt-4">
            <p>&copy; UpPhoto International Ltd. {currentYear}</p>
          </div>
          <div className="">
            <span
              onClick={() => {
                setLanguage("English");
              }}
              className={`mx-2 font-bold cursor-pointer ${
                Language === "English"
                  ? "text-green-600 border-b border-green-600"
                  : ""
              } `}
            >
              English
            </span>
            <span
              onClick={() => {
                setLanguage("Arabic");
              }}
              className={`mx-2 font-bold cursor-pointer ${
                Language === "Arabic"
                  ? "text-green-600 border-b border-green-600"
                  : ""
              }  `}
            >
              Arabic
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
