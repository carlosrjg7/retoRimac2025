import { createContext } from "react";
import type { User } from "@/types";

export interface UserContextProps {
  user: User | null;
  setUser: (data: User) => void;
  clearUser: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);
