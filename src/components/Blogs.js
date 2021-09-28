import React from "react";
import content from "../content";
export default function Projects() {
  return (
    <div className="min-h-screen pt-6 pb-12 bg-gray-300 font-dosis">
      <div id="card" className="">
        <h1 className="text-center text-5xl font-bold">
          Recent Articles
        </h1>
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
          {content.blogs.map((blog, index) => {
            return (
              <div key={index} className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src={blog.image}
                    alt="blogs"
                  />
                </div>
                -{" "}
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-tight truncate">
                    {blog.title}
                  </h3>
                  <p className="mt-2">{blog.excerpt}</p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    {blog.author} &bull; {blog.date}
                  </p>
                  <a
                    href={blog.link}
                    className="w-40 bg-yellow-500 hover:bg-gray-700 hover:text-white text-gray-700 font-bold py-2 px-4 border border-gray-700 rounded"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
