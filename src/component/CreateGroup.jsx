import { useState } from "react";
import { v4 } from "uuid";
import GroupList from "./GroupList";

function CreateGroup() {
  const [isEdit, setIsEdit] = useState(false)
  const [nameGroups, setNameGroups] = useState([]);
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
    if (!nameGroup) {
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
  const newGroups = nameGroups.filter(nameGroup => nameGroup.id !== id)
  console.log(newGroups)
  setNameGroups(newGroups)
 } 

 const editHandler = (id) => {
  const editGroup = nameGroups.find(nameGroup => nameGroup.id === id)
  setNameGroup(editGroup)
  setIsEdit(true)
 }
    
    const applyEditHandler = () => {
      const updateGroup = nameGroups.map(item => {
        if(item.id === nameGroup.id){
          item.name = nameGroup.name
        }
        return item
      })
      setNameGroups(updateGroup)
      setNameGroup({
        name: ""
      })
      setIsEdit(false)
    }

  return (
    <div>
      <div>
        <h2>Create a group</h2>
        <input
          type="text"
          placeholder="The name of the group"
          name="name"
          value={nameGroup.name}
          onChange={changeHandler}
        />
        {
          isEdit ? <button onClick={applyEditHandler}>Edit Group</button> : <button onClick={addGroupHandler}>Add Group</button>
        }
        {/* <button onClick={addGroupHandler}>Add Group</button> */}
      </div>

      <div>{alert && <p>{alert}</p>}</div>

      <GroupList nameGroups={nameGroups} deleteHandler={deleteHandler} editHandler={editHandler} />
    </div>
  );
}

export default CreateGroup;
