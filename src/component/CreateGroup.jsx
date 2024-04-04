import { useContext,useState } from "react";
import { v4 } from "uuid";
import GroupList from "./GroupList";
import styles from "./CreateGroup.module.css";
import { GroupListContext } from "../context/GroupListProvider";



function CreateGroup() {

  const { nameGroups, setNameGroups, nameGroup, setNameGroup,isGroupEdit, setIsGroupEdit} = useContext(GroupListContext)

  
  
  const [alert, setAlert] = useState("");
 

  const changeHandler = (event) => {
    setNameGroup((nameGroup) => ({
      ...nameGroup,
      [event.target.name]: event.target.value,
    }));
  };

  const addGroupHandler = () => {
    if (!nameGroup.name) {
      setAlert("Please enter the name of the group ! ");
      return;
    }
    setAlert("");
    const newGroup = { ...nameGroup, id: v4() };
    setNameGroups((nameGroups) => [...nameGroups, newGroup]);
    setNameGroup({
      id: "",
      name: "",
    });
  };

  

  const applyEditHandler = () => {
    const updateGroup = nameGroups.map((item) => {
      if (item.id === nameGroup.id) {
        item.name = nameGroup.name;
      }
      return item;
    });
    setNameGroups(updateGroup);
    setNameGroup({
      name: "",
    });
    setIsGroupEdit(false);
  };

  return (
    <div className={styles.container}>
        <h3>Create A Group</h3>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="The name of the group"
          name="name"
          value={nameGroup.name}
          onChange={changeHandler}
        />
        {isGroupEdit ? (
          <button className="button edit" onClick={applyEditHandler}>Edit Group</button>
        ) : (
          <button className="button" onClick={addGroupHandler}>Add Group</button>
        )}
      </div>

      <div className="alert">{alert && <p>{alert}</p>}</div>

     
    </div>
  );
}

export default CreateGroup;
