import FilterBadge from "./FilterBadge";
import { useFilter } from "../lib/FilterContext";

export default function Filter() {
  
  const filterContext = useFilter();

  return (
    <div className="relative bottom-5 flex flex-row rounded-md bg-white h-12 shadow-2xl">
      <div className="ml-4 flex items-center justify-start grow gap-3">
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
