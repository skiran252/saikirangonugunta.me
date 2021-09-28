import React from "react";
import content from "../content";
import {Link} from "react-router-dom";
export default function Projects() {
  return (
    <div
      className="min-h-screen flex flex-col items-center font-dosis"
      id="projects"
    >
      <h1 className="mt-10 text-5xl font-bold">Projects</h1>
      <div className="w-full p-10">
        <div className="lg:w-1/2 lg:flex flex flex-col-reverse mx-auto max-w-screen-lg">
          {content.projects.map((project, index) => {
            return (
              <div key={index} className="mt-10 shadow-2xl bg-gray-200 flex flex-col justify-between border-r border-t border-b border-l border-gray-400 rounded-b p-4 leading-normal">
                <div className="mb-5 lg:w-3/4">
                  <div className="text-green-900 font-bold text-3xl mb-2">
                    {project.title}
                  </div>
                  <p className="text-blue-700 text-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                    <Link to={{pathname: project.source}} target="_blank" className="mr-5 rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white duration-300">
                    <span> Source Code</span>
                    </Link>
                    <Link to={{pathname:project.preview}} target="_blank" className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white duration-300">
                      Preview
                    </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}