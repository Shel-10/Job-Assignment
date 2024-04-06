import FilterBadge from "./FilterBadge";
import { useFilter } from "../lib/FilterContext";

export default function Filter() {
  
  const filterContext = useFilter();

  return (
    <div className="filter-bar">
      <div className="ml-4 flex flex-wrap items-center justify-start grow gap-3">
        {
          filterContext.filterElements?.length > 0 &&
          filterContext.filterElements.map((badge, index) => {
            return <FilterBadge key={index} content={badge} />;
          })}
      </div>
      <div
        className="mx-6 cursor-pointer flex items-center"
        onClick={() => filterContext?.setFilterElements([])}
      >
        <span className="text-cyan-dark hover:text-cyan-medium hover:underline">
          Clear
        </span>
      </div>
    </div>
  );
}
