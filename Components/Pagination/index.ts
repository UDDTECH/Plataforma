import { Content } from "next/font/google";
import { PaginationRoot } from "./PaginationRoot";
import { PaginationContent } from "./PaginationContent";
import { PaginationItem } from "./PaginationItem";
import { PaginationLink } from "./PaginationLink";
import { PaginationNext } from "./PaginationNext";
import { PaginationPrevious } from "./PaginationPrevious";
import { PaginationEllipsis } from "./PaginationEllipsis";

export const Pagination = {
  Root: PaginationRoot,
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Next: PaginationNext,
  Previous: PaginationPrevious,
  Ellipsis: PaginationEllipsis,
};
