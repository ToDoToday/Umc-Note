import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./Queries/useGetMovies";

function useGetInfiniteMovies(category) {
    return useInfiniteQuery({
        queryFn:({pageParam})=> useGetMovies({category,pageParam}),
        queryKey:['movies',category],
        initialPageParam:1,
        getNextPageParam:(lastPage,allPage)=>{
            console.log(lastPage,allPage);
        }
    })
}

export {useGetInfiniteMovies}