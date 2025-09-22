import api from "@/lib/axios";
import { UserSchema } from "@/types";

import { isAxiosError } from "axios";

export async function getUser() {
  try {
    const { data } = await api("/user.json");
    const response = UserSchema.safeParse(data);
    if (response.success) return response.data;
    else throw new Error("Error al obtener los datos del usuario");
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
