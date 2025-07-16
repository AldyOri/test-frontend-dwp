import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router";
function ShopPagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Pagination>
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationLink
            href={""}
            className={cn(
              "text-primary border-primary rounded-full border-2",
              "hover:text-primary",
            )}
          >
            <ArrowLeft />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={""} className="rounded-full border-1">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={""} className="rounded-full border-1">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={""} className="rounded-full border-1">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={""}
            className={cn(
              "text-primary border-primary rounded-full border-2",
              "hover:text-primary",
            )}
          >
            <ArrowRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default ShopPagination;
