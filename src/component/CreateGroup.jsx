import { useContext,useState } from "react";
import { v4 } from "uuid";
import GroupList from "./GroupList";
import styles from "./CreateGroup.module.css";
import { GroupListContext } from "../context/GroupListProvider";



function CreateGroup() {

  const { nameGroups, setNameGroups} = useContext(GroupListContext)

  const [isEdit, setIsEdit] = useState(false);
  
  const [alert, setAlert] = useState("");
  const [nameGroup, setNameGroup] = useState({
    id: "",
    name: "",
  });

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

  const deleteHandler = (id) => {
    const newGroups = nameGroups.filter((nameGroup) => nameGroup.id !== id);
    console.log(newGroups);
    setNameGroups(newGroups);
  };

  const editHandler = (id) => {
    const editGroup = nameGroups.find((nameGroup) => nameGroup.id === id);
    setNameGroup(editGroup);
    setIsEdit(true);
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
    setIsEdit(false);
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
        {isEdit ? (
          <button className="button edit" onClick={applyEditHandler}>Edit Group</button>
        ) : (
          <button className="button" onClick={addGroupHandler}>Add Group</button>
        )}
      </div>

      <div>{alert && <p>{alert}</p>}</div>

      <GroupList
        nameGroups={nameGroups}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default CreateGroup;
