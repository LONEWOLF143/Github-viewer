import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { User } from "./interfaces/User"; // Adjust the import path as needed

type UserContextType = {
  searchUser: User | null;
  setSearchUser: Dispatch<SetStateAction<User | null>>;
};

export const UserContext = createContext({} as UserContextType);

type GitContextProps = {
  children: ReactNode;
};

export default function GitContext({ children }: GitContextProps) {
  const [searchUser, setSearchUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ searchUser, setSearchUser }}>
      {children}
    </UserContext.Provider>
  );
}
