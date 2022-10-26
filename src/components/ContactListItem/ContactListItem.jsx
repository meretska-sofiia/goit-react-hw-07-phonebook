import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsThunk.js';
import {
  ListItem,
  Name,
  Number,
  Button,
  Contact,
} from './ContactListItem.styled';

const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {contacts.length &&
        contacts.map(contact => (
          <ListItem key={contact.id}>
            <Contact>
              <Name>{contact.name}:</Name>
              <Number>{contact.number}</Number>
            </Contact>
            <Button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactListItem;
