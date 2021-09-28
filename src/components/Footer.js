import React from "react";
import content from "../content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className=" border-red-500 border-t-4  w-full min-h-40 p-5 text-2xl lg:pl-40 lg:pr-40 bg-gray-100 text-black font-dosis">
      <div className="flex flex-col lg:flex-row  lg:justify-between">
        <div className="text-center lg:text-2xl">
          {content.footer.copyright}
        </div>

        <div className="flex flex-col sm:flex-row">
          <div>Reach me on </div>
          <div className="flex sm:flex-row mx-auto">
            {content.social.map((s, index) => (
              <a key={index} href={s.link} className="text-2xl pl-3 pr-3 hover:bg-gray-4s00">
                <FontAwesomeIcon icon={s.icon} style={{ color: s.color }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
