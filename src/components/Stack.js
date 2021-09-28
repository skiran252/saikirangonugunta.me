import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
export default function Stack() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold">Stack I use</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              key={index}
              className={`w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-5 fw-bolder">
        I also have working experience in: NLP (Natural Language Processing),
        Machine Learning, Data Science,
      </p>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-5 fw-bolder">
        I am also familiar with the following languages: C, Java, JavaScript,
        Python, SQL, HTML, CSS,
      </p>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-5 fw-bolder">
        Databases: MySQL,PostgreSQL, MongoDB, Redis, ElasticSearch.
      </p>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-5 fw-bolder">
        Cloud: AWS , GCP (Google Cloud Platform),
      </p>
    </div>
  );
}
