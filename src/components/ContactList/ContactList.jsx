import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact
          contact={contact}
          key={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
