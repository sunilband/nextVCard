"use client";
import { createContext, useContext, useState } from "react";

interface UserProps {
  name: string | null;
  email: string | null;
  token: string | null;
  data: Object | null;
}

interface User {
  user: UserProps;
  setUser: (user: UserProps) => void;
}

const UserContext = createContext<User>({
  user: { name: null, email: null, token: null, data: null },
  setUser: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserProps>({
    name: null,
    email: null,
    token: null,
    data: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
