import { createContext, useContext, useState } from "react";

interface filterContextType {
  filterElements: string[];
  setFilterElements: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<filterContextType>({} as filterContextType);

export function useFilter() {
  return useContext(FilterContext);
}

export default function FilterProvider({children}:{children: React.ReactNode}) {
  const [filterElements, setFilterElements] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ filterElements, setFilterElements }}>
      {children}
    </FilterContext.Provider>
  );
}
