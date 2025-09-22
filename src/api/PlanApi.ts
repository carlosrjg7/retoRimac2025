import api from "@/lib/axios";
import { PlansResponseSchema } from "@/types";

import { isAxiosError } from "axios";

export async function getPlans() {
  try {
    const { data } = await api("/plans.json");
    const response = PlansResponseSchema.safeParse(data);
    if (response.success) return response.data.list;
    else throw new Error("Error al obtener los datos de los planes");
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
