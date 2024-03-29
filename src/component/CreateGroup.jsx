import React from 'react'
import { useState } from 'react'
import GroupList from './GroupList'

function CreateGroup() {
    const [nameGroup, setNameGroup] = useState("")
    const [nameGroups, setNameGroups] = useState([])

    const changeHandler = (event) => {
        setNameGroup(event.target.value)
    
    }

  return (
    <div>
        <div>
        <h2>Create a group</h2>
        <input type='text' placeholder='The name of the group' value={nameGroup} onChange={changeHandler}/>
        <button >Add Group</button>
        </div>

        <GroupList groups={nameGroups}/>
    </div>
  )
}

export default CreateGroup