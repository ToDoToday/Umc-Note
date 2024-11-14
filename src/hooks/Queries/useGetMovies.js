import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async({catagory,pageParam})=>{
    const data = await axiosInstance.get(`/movie/${catagory}?language=ko-KR&page=${pageParam}`)

    return(data
)

}

export {useGetMovies}