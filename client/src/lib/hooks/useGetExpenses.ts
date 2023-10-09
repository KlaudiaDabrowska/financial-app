import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/api/getExpenses";

export const useGetExpenses = () => {
  const { data, isLoading, isError } = useQuery(["expenses"], getExpenses);

  const totalAmount = data?.totalAmount;
  const allExpenses = data?.expenses;

  return {
    allExpenses,
    totalAmount,
    isLoading,
    isError,
  };
};
