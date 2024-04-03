import { useFilter } from "../lib/FilterContext";

interface Props {
  name: string;
}

export default function FilterButton({ name }: Props) {

  const filterContext = useFilter();

  return (
    <div
      className="px-3 py-1.5 bg-cyan-filter font-medium text-primary rounded-md cursor-pointer hover:bg-primary hover:text-cyan-light"
      onClick={(e) =>
        filterContext?.setFilterElements((prev: string[]) => {
          let targetText = (e.target as HTMLDivElement).innerText;
          return !prev.includes(targetText) ? [...prev, targetText] : prev
          }
        )
      }
    >
      {name}
    </div>
  );
}
