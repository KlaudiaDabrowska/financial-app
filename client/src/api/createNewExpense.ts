import { apiClient } from "../config/apiConfig";
import { IExpenseObject, INewExpense } from "@/lib/types/Expenses";

export const createNewExpense = async (newExpense: INewExpense) => {
  const response = await apiClient.post<IExpenseObject>(
    "/expenses",
    newExpense
  );
  return response.data;
};
