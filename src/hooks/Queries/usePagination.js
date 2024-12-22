import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGetMovies } from './useGetMovies'; // useGetMovies 훅 임포트

function usePagination(category) {
  const [page, setPage] = useState(1);

  // useQuery를 통해 데이터 가져오기
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['movies', category, page], // 쿼리 키에 카테고리와 페이지 추가
    queryFn: () => useGetMovies({ category, pageParam: page }), // useGetMovies 훅 사용
    keepPreviousData: true, // 이전 데이터를 유지
  });

  // 페이지 변경 핸들러
  const handlePageChange = useCallback((newPage) => {
    setPage(newPage); // 페이지 업데이트
  }, []);

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
    page,
    handlePageChange, // 페이지 변경 함수 반환
  };
}

export { usePagination };
