import React from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, onChangePage}) => {
  return (
    <ReactPaginate
      className="paginate"
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1) }
      pageRangeDisplayed={6}
      pageCount={5}
      forcePage={currentPage -1}
    />
  );
};

export default Pagination;
