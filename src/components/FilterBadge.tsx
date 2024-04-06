import { MouseEvent } from "react";
import { useFilter } from "../lib/FilterContext";

interface Props {
  content: string;
}

export default function FilterBadge({ content }: Props) {

  const filterContext = useFilter()
  
  return (
    <div className="filter-item">
      <div className="mx-3 py-1">{content}</div>
      <span
        className="btn-remove hover:bg-cyan-darker transition-color-300"
        onClick={(event: MouseEvent<HTMLSpanElement>) => {
          const target = (event.target as HTMLSpanElement).previousSibling;
          filterContext?.setFilterElements((prev: string[]) =>
            prev.filter((val) => (target as HTMLSpanElement).innerText !== val)
          );
        }}
      >
        &times;
      </span>
    </div>
  );
}
