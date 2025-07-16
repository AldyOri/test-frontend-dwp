import { FilterContext } from "@/contexts/FilterContext";
import { type ReactNode, useMemo, useState } from "react";

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedActivePeriods, setSelectedActivePeriods] = useState<string[]>(
    [],
  );

  const clearFilters = () => {
    setSelectedProvider(null);
    setSelectedActivePeriods([]);
  };

  const activeFilters = useMemo(() => {
    const filters: string[] = [];
    if (selectedProvider) filters.push(selectedProvider);
    filters.push(...selectedActivePeriods);
    return filters;
  }, [selectedProvider, selectedActivePeriods]);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        selectedProvider,
        selectedActivePeriods,
        setSearchQuery,
        setSelectedProvider,
        setSelectedActivePeriods,
        clearFilters,
        activeFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
