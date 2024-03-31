function GroupList({nameGroups, deleteHandler, editHandler}) {
  return (
    <div>
        <h1>Group list</h1>
      {nameGroups.length ? (
      <ul>
        {nameGroups.map(nameGroup => (
          <li key={nameGroup.id} >
            <p>{nameGroup.name}</p>
            <button onClick={() => deleteHandler(nameGroup.id)}>🗑️</button>
            <button onClick={() => editHandler(nameGroup.id)}>✏️</button>
            </li>
        ))}
        </ul>): <p></p>}
    </div>
  )
}

export default GroupList