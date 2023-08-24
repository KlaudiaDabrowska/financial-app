import { useQuery } from "@tanstack/react-query";
import { getIncomes } from "@/api/getIncomes";

export const useGetIncomes = () => {
  const { data: incomes, isLoading } = useQuery(["incomes"], getIncomes);

  return { incomes, isLoading };
};
