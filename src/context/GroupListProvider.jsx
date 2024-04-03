import { createContext, useState } from "react";

export const GroupListContext = createContext();

function GroupListProvider({ children }) {
  const [nameGroups, setNameGroups] = useState([]);
  return (
    <GroupListContext.Provider value={{ nameGroups, setNameGroups }}>
      {children}
    </GroupListContext.Provider>
  );
}

export default GroupListProvider;
