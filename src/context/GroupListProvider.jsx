import { createContext, useState } from "react";

export const GroupListContext = createContext();

function GroupListProvider({ children }) {
  const [nameGroups, setNameGroups] = useState([]);
  const [nameGroup, setNameGroup] = useState({
    id: "",
    name: "",
  });

  const [isGroupEdit, setIsGroupEdit] = useState(false);
  return (
    <GroupListContext.Provider value={{ nameGroups, setNameGroups, nameGroup, setNameGroup,isGroupEdit, setIsGroupEdit }}>
      {children}
    </GroupListContext.Provider>
  );
}

export default GroupListProvider;
