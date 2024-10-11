import {
  PaginationContainer,
  PaginationNextButton,
  PaginationNumberedButton,
  PaginationPrevButton,
} from "@/components/Pagination";

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationPrevButton />
      <PaginationNumberedButton />
      <PaginationNextButton />
    </PaginationContainer>
  );
};

export default Pagination;
