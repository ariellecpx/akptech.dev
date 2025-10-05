export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextUrl?: string;
  prevUrl?: string;
}

export function generatePaginationLinks(
  basePath: string,
  currentPage: number,
  totalPages: number
): { prev?: string; next?: string } {
  const links: { prev?: string; next?: string } = {};

  if (currentPage > 1) {
    const prevPage = currentPage - 1;
    links.prev = prevPage === 1 ? basePath : `${basePath}?page=${prevPage}`;
  }

  if (currentPage < totalPages) {
    links.next = `${basePath}?page=${currentPage + 1}`;
  }

  return links;
}