import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/api/getExpenses";

export const useGetExpenses = () => {
  const {
    data: expenses,
    isLoading,
    isError,
  } = useQuery(["expenses"], getExpenses);

  const totalAmount = expenses?.totalAmount;
  const allExpenses = expenses?.expenses;

  return {
    allExpenses,
    totalAmount,
    isLoading,
    isError,
  };
};
