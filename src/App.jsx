import React, { useState } from "react";
import data from "./constants/data.json";
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
      <header className="bg-primary bg-header-mobile bg-cover md:bg-header-desktop h-32" />
      <section className="sm:px-40 px-6 bg-cyan-light">
        <Filter />

        <div className="flex flex-col gap-8">
          {filteredJobs.map((post, index) => {
            return <Card key={index} data={post} />;
          })}
        </div>
      </section>
    </div>
  );
}
