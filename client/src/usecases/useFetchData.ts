import { useEffect, useState } from "react";
import { axiosApi } from "../services/axios-api";

export const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<unknown>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axiosApi.get("/cars");
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    carsData: data,
    fetchData,
  };
};
