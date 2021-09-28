import React from "react";
import content from "../content";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex items-center justify-between w-5/6 mx-auto py-3 text-white font-dosis">
        <Link to="/">
        <h1 className="text-3xl font-bold">
          {content.nav.logo}{" "}
          <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
        </h1>
        </Link>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <Link key={index} to={link.to}>
                <span key={index} className="text-xl mr-4">
                  {link.text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
