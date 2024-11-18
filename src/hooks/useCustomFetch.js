import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";
//pagination을 위한 useCustomFetch 수정
const useCustomFetch = (url, page) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [hasMore, setHasMore] = useState(true); // 다음 페이지 유무

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(`${url}&page=${page}`);
                if (response.data.results.length === 0) {
                    setHasMore(false); // 데이터가 없을 때 hasMore를 false로 설정
                } else {
                    setData(response.data.results);
                    setHasMore(true);
                }
                setIsError(false);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, page]);

    return { data, isLoading, isError, hasMore };
};

export default useCustomFetch;
