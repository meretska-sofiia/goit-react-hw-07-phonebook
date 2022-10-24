import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
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
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact>
            <Name>{contact.name}:</Name> <Number>{contact.number}</Number>
          </Contact>
          <Button type="button" onClick={() => handleDeleteContact(contact.id)}>
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
