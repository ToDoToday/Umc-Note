import { axiosInstance } from "../../apis/axios-instance";

const useGetMovieDetails = async ({ movieid }) => {
  const movieData = await axiosInstance.get(`/movie/${movieid}?language=ko-KR`);
  const creditsData = await axiosInstance.get(`/movie/${movieid}/credits?language=ko-KR`);
  
  return { movie: movieData.data, credits: creditsData.data };
};

export { useGetMovieDetails };
