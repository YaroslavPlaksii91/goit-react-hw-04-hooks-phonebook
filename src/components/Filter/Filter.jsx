import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <>
      <label htmlFor={filterId} className={s.label}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        type="text"
        name="filter"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
