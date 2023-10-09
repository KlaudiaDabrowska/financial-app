import { apiClient } from "../config/apiConfig";
import { ISavingResponse } from "@/lib/types/Savings";

export const getSavings = async () => {
  const response = await apiClient.get<ISavingResponse>("/savings");
  return response.data;
};
