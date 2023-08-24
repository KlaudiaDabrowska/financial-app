import { apiClient } from "../config/apiConfig";
import { IIncomeObject } from "@/lib/types/Incomes";

export const getIncomes = async () => {
  const response = await apiClient.get<IIncomeObject[]>("/incomes");
  return response.data;
};
