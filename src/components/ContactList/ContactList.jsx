import ContactListElem from '../ContactListElem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.contactsItem}>
          <ContactListElem
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
