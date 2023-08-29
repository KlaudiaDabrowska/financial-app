import { apiClient } from "../config/apiConfig";
import { IExpense, INewExpense } from "@/lib/types/Expenses";

export const createNewExpense = async (newExpense: INewExpense) => {
  const response = await apiClient.post<IExpense>("/expenses", newExpense);
  return response.data;
};
