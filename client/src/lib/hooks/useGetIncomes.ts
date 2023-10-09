import { useQuery } from "@tanstack/react-query";
import { getIncomes } from "@/api/getIncomes";

export const useGetIncomes = () => {
  const {
    data: incomes,
    isLoading,
    isError,
  } = useQuery(["incomes"], getIncomes);

  const totalAmount = incomes?.totalAmount;
  const allIncomes = incomes?.incomes;

  return { allIncomes, totalAmount, isError, isLoading };
};
