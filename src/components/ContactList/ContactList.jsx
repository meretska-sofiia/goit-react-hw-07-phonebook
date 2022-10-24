import { useFilterArray } from 'components/hooks/useFilterArray';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { contactSelector, filterSelector } from 'redux/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { contacts } = useSelector(contactSelector);
  const { filter } = useSelector(filterSelector);

  const contactsList = useFilterArray(contacts, filter);
  return (
    <List>
      <ContactListItem contacts={contactsList} />
    </List>
  );
};

export default ContactList;
