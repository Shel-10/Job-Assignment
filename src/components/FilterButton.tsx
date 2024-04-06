import { useFilter } from "../lib/FilterContext";

interface Props {
  name: string;
}

export default function FilterButton({ name }: Props) {

  const filterContext = useFilter();

  return (
    <div
      className="card-filter-btn hover:bg-primary hover:text-cyan-light transition-color-300"
      onClick={(e) =>
        filterContext?.setFilterElements((prev: string[]) => {
          let targetText = (e.target as HTMLDivElement).innerText;
          return !prev.includes(targetText) ? [...prev, targetText] : prev;
        })
      }
    >
      {name}
    </div>
  );
}
