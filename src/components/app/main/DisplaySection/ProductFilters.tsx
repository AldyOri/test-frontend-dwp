import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import FeaturedProductBanner from "./FeaturedProductBanner";
import { useEffect, useState } from "react";
import { getAllActivePeriods, getAllProviders } from "@/api/product";
import type { ActivePeriod, Provider } from "@/api/response";
import { useFilters } from "@/hooks/useFilter";

interface ProductFiltersProps {
  className?: string;
}

function ProductFilters({ className }: ProductFiltersProps) {
  const {
    selectedProvider,
    setSelectedProvider,
    selectedActivePeriods,
    setSelectedActivePeriods,
  } = useFilters();

  const [providers, setProviders] = useState<Provider[]>([]);
  const [activePeriods, setActivePeriods] = useState<ActivePeriod[]>([]);

  useEffect(() => {
    fetchProviders();
    fetchActivePeriods();
  }, []);

  const fetchProviders = async () => {
    const res = await getAllProviders();
    setProviders(res);
  };

  const fetchActivePeriods = async () => {
    const res = await getAllActivePeriods();
    setActivePeriods(res);
  };

  const handleProviderChange = (value: string) => {
    setSelectedProvider(value);
  };

  const handleActivePeriodsChange = (values: string[]) => {
    setSelectedActivePeriods(values);
  };

  return (
    <div className={cn("max-w-80", className)}>
      <div className="my-7 flex flex-col gap-y-2">
        <p className="text-lg font-medium">PROVIDER</p>
        <RadioGroup
          value={selectedProvider}
          onValueChange={handleProviderChange}
        >
          {providers.map((provider) => (
            <div key={provider.id} className="flex gap-x-2">
              <RadioGroupItem id={provider.name} value={provider.name} />
              <Label
                htmlFor={provider.name}
                className={"text-gray-500 hover:cursor-pointer"}
              >
                {provider.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator orientation="horizontal" />

      <div className="container py-8">
        <p className="mb-4 text-lg font-medium">MASA AKTIF</p>
        <ToggleGroup
          type="multiple"
          className="flex flex-wrap gap-3 rounded-xs"
          value={selectedActivePeriods}
          onValueChange={handleActivePeriodsChange}
        >
          {activePeriods.map((activePeriod) => (
            <ToggleGroupItem
              key={activePeriod.id}
              value={activePeriod.label}
              className={cn(
                "max-w-fit min-w-fit !rounded-xs border text-sm font-medium transition-colors",
                "data-[state=on]:border-primary data-[state=on]:text-primary",
                "data-[state=off]:border-gray-200 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-50",
              )}
            >
              {activePeriod.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <FeaturedProductBanner />
    </div>
  );
}

export default ProductFilters;
