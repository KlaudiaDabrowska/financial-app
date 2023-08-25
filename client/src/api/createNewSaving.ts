import { apiClient } from "../config/apiConfig";
import { INewSaving, ISavingObject } from "@/lib/types/Savings";

export const createNewSaving = async (newSaving: INewSaving) => {
  const response = await apiClient.post<ISavingObject>("/savings", newSaving);
  return response.data;
};
