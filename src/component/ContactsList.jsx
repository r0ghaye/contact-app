import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, deleteHandler, editHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact yet !</p>
      )}
    </div>
  );
}

export default ContactsList;
