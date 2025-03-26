import { createContext } from "react";

const UserContext = createContext({
  isLoggedUser: "Default User",
});

export default UserContext;
