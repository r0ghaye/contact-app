import styles from "./GroupList.module.css"

function GroupList({nameGroups, deleteGroupHandler, editGroupHandler}) {
  return (
    <div>
        <h3>Group list</h3>
      {nameGroups.length ? (
      <ul>
        {nameGroups.map(nameGroup => (
          <li key={nameGroup.id} >
            <p>{nameGroup.name}</p>
            <button onClick={() => deleteGroupHandler(nameGroup.id)}>🗑️</button>
            <button onClick={() => editGroupHandler(nameGroup.id)}>✏️</button>
            </li>
        ))}
        </ul>): (<p>No Group yet !</p>)}
    </div>
  )
}

export default GroupList