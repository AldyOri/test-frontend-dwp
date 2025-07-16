import { Badge } from "@/components/ui/badge";
import { useFilters } from "@/hooks/useFilter";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";

interface ActiveFiltersProps {
  resultsCount?: number;
  className?: string;
}

function ActiveFilters({ className, resultsCount = 0 }: ActiveFiltersProps) {
  const { activeFilters, clearFilters } = useFilters();

  const handleResetFilters = () => {
    clearFilters();
  };

  return (
    <div
      className={cn(
        "mt-2 flex items-center justify-between rounded-sm bg-slate-50 px-1 py-2",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground ml-5 flex-none text-sm">
          Active Filters:
        </span>
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="flex items-center gap-1 px-2 py-1"
            >
              {filter}
            </Badge>
          ))}

          {activeFilters.length > 0 && (
            <button
              className="flex items-center justify-center gap-1 text-red-500"
              onClick={handleResetFilters}
            >
              <CircleX className="size-4" />
              Reset
            </button>
          )}
        </div>
      </div>

      <p className="flex-none text-sm font-medium">
        {resultsCount.toLocaleString()}
        <span className="text-gray-500"> Results found.</span>
      </p>
    </div>
  );
}

export default ActiveFilters;
