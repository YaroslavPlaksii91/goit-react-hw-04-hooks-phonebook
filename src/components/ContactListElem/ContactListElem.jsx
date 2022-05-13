import PropTypes from 'prop-types';
import s from './ContactListElem.module.css';

const ContactListElem = ({ name, number, onDelete }) => {
  return (
    <div className={s.listItem}>
      <p className={s.name}>{name}:</p>
      <span className={s.number}>{number}</span>
      <button type="button" className={s.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListElem;
