import { useCallback, useRef } from "react";

const useInfiniteScroll = ({ loading, hasMore, onLoadMore }) => {
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore(); // Call your function to increase page or fetch more data
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, onLoadMore]
  );

  return lastElementRef;
};

export default useInfiniteScroll;
