import PropTypes from "prop-types";
import s from './Contacts.module.css'

const Contacts = ({ contacts, onDelete }) => {
return (

    <ul className={s.list}>
        {contacts.map(({ name, id, number }) => (
            <li key={id}>{name}: {number}
                <button className={s.button_delete} type="button" onClick={() => onDelete(id)}>delete</button>
            </li>
        ))}

    </ul>
    );
};

Contacts.propTypes = {
onDelete: PropTypes.func.isRequired,
contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired,
};

export default Contacts;