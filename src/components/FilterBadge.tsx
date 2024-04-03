import { MouseEvent } from "react";
import { useFilter } from "../lib/FilterContext";

interface Props {
  content: string;
}

export default function FilterBadge({ content }: Props) {

  const filterContext = useFilter()
  
  return (
    <div className="flex gap-1 bg-cyan-filter rounded-md text-primary font-medium">
      <div className="mx-3 py-1">{content}</div>
      <span
        className="px-2.5 py-1 bg-primary text-[16px] font-bold text-cyan-light rounded-r-md cursor-pointer hover:bg-cyan-darker"
        onClick={(event:MouseEvent<HTMLSpanElement>)=>{
          const target = (event.target as HTMLSpanElement).previousSibling;
          filterContext?.setFilterElements(( prev:string[] )=> prev.filter((val)=> (target as HTMLSpanElement).innerText !== val))
        }}
      >
        &times;
      </span>
    </div>
  );
}
