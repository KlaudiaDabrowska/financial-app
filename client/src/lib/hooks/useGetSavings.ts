import { useQuery } from "@tanstack/react-query";
import { getSavings } from "@/api/getSavings";

export const useGetSavings = () => {
  const { data, isLoading, isError } = useQuery(["savings"], getSavings);

  const totalAmount = data?.totalAmount;
  const allSavings = data?.savings;

  return { allSavings, totalAmount, isError, isLoading };
};
