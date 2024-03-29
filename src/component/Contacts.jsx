import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 } from "uuid";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css"

function Contacts() {
  const [isEdit, setIsEdit] = useState(false)
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
   
    setContact((contact) => ({ ...contact, [name]: value }));
  }

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data !");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  const editHandler = (id) => {
    const editContact = contacts.find(contact => contact.id === id)
    setContact(editContact)
    setIsEdit(true)
  }

  const applyEditHandler = () => {
    const updateContact = contacts.map((item)=>{
      if(item.id === contact.id){
        item.name = contact.name;
        item.lastName = contact.lastName;
        item.phone = contact.phone;
        item.email = contact.email;
      }
      return item
    })
    setContacts(updateContact)
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setIsEdit(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

{
  isEdit ? <button onClick={applyEditHandler} >Edit Contact</button> :  <button onClick={addHandler}>Add Contact</button>
}
              
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler}  editHandler={editHandler}/>
    </div>
  );
}

export default Contacts;
