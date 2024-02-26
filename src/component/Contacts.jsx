import { useState } from "react";

import inputs from "../constants/inputs";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
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

    setContacts((contacts) => [...contacts, contact]);
    console.log(contacts);
  };

  return (
    <div>
      <div>
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

        <button onClick={addHandler}>Add Contact</button>
      </div>
      {alert && <p>{alert}</p>}
    </div>
  );
}

export default Contacts;
