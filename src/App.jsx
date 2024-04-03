import Contacts from "./component/Contacts"
import CreateGroup from "./component/CreateGroup"
import Header from "./component/Header"

import GroupListProvider from "./context/GroupListProvider"


function App() {
  

  return (
    <>
     <Header />
<GroupListProvider>
     <CreateGroup />

     <Contacts />
</GroupListProvider>
    </>
  )
}

export default App
