import { createContext } from "react";

interface FilterContextType {
  searchQuery: string | null;
  selectedProvider: string | null;
  selectedActivePeriods: string[];
  setSearchQuery: (search: string | null) => void;
  setSelectedProvider: (provider: string | null) => void;
  setSelectedActivePeriods: (periods: string[]) => void;
  activeFilters: string[];
  clearFilters: () => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);
