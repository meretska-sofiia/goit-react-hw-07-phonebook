import { useSelector } from 'react-redux';
import { contactSelector } from 'redux/selectors';
import { ContactForm } from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import SearchContactFilter from '../Filter/Filter';
import { Container, Title } from './App.styled';

export const App = () => {
  const { contacts } = useSelector(contactSelector);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {!!contacts.length && (
        <>
          <Title>Contacts</Title>
          <SearchContactFilter />

          <ContactList />
        </>
      )}
    </Container>
  );
};
