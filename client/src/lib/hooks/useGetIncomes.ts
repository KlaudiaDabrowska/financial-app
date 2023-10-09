import { useQuery } from "@tanstack/react-query";
import { getIncomes } from "@/api/getIncomes";

export const useGetIncomes = () => {
  const { data, isLoading, isError } = useQuery(["incomes"], getIncomes);

  const totalAmount = data?.totalAmount;
  const allIncomes = data?.incomes;

  return { allIncomes, totalAmount, isError, isLoading };
};
