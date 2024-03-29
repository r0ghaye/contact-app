import React from 'react'
import { useState } from 'react'

function CreateGroup() {
    const [nameGroup, setNameGroup] = useState("")

    const changeHandler = (event) => {
        setNameGroup(event.target.value)
    
    }

  return (
    <div>
        <h2>Create a group</h2>
        <input type='text' placeholder='The name of the group' value={nameGroup} onChange={changeHandler}/>
        <button >Add Group</button>
    </div>
  )
}

export default CreateGroup