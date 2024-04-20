import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  onDeleteContact,
}) {
  return (
    <li className={css.contact}>
      <div className={css.information}>
        <p className={css.name}>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}
