import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  return (
    <List>
      <ContactListItem contacts={contactsList} />
    </List>
  );
};

export default ContactList;
