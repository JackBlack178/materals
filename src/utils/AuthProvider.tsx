import { createContext, useState } from "react";

export const UserContext = createContext("1");

const AuthProvider = () => {
  const [userId] = useState("1");

  return <UserContext.Provider value={userId}></UserContext.Provider>;
};

export { AuthProvider };
