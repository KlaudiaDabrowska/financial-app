import { apiClient } from "../config/apiConfig";
import { IIncomeResponse } from "@/lib/types/Incomes";

export const getIncomes = async () => {
  const response = await apiClient.get<IIncomeResponse>("/incomes");
  return response.data;
};
