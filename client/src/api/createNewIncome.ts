import { IIncomeObject, INewIncome } from "@/lib/types/Incomes";
import { apiClient } from "../config/apiConfig";

export const createNewIncome = async (newIncome: INewIncome) => {
  const response = await apiClient.post<IIncomeObject>("/incomes", newIncome);
  return response.data;
};
