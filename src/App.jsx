import React, { useState } from "react";
import data from "./constants/data.js";
import Card from "./components/Card.tsx";
import Filter from "./components/Filter.tsx";
import filterJobs from "./components/index.js";
import { useFilter } from "./lib/FilterContext.tsx";
import "./index.css";

export default function App() {
  const [jobs, setJobs] = useState([...data]);
  const filterContext = useFilter();

  let filteredJobs =
    filterContext?.filterElements.length > 0
      ? filterJobs(jobs, filterContext.filterElements)
      : jobs;

  return (
    <div className="w-full overflow-hidden">
      <header className="head" />
      <section className="section-box bg-cyan-light">
        <Filter />
        <div className="flex flex-col gap-12 ss:gap-8 mt-8 ss:mt-2">
          {filteredJobs.map((post, index) => {
            return <Card key={index} data={post} />;
          })}
        </div>
      </section>
    </div>
  );
}
