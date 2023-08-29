import { apiClient } from "../config/apiConfig";
import { IExpenseResponse } from "@/lib/types/Expenses";

export const getExpenses = async () => {
  const response = await apiClient.get<IExpenseResponse>("/expenses");
  return response.data;
};
