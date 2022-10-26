import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsThunk.js';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactForm } from '../AddContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchContactFilter from '../Filter/Filter';
import { Container, Title } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <>
        <Title>Contacts</Title>
        <SearchContactFilter />

        <ContactList />
      </>
    </Container>
  );
};
