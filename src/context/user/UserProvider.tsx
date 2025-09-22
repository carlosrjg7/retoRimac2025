import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { User } from "@/types";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (data: User) => setUserState(data);
  const clearUser = () => setUserState(null);

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
