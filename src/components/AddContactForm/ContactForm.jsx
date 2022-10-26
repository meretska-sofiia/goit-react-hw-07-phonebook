import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsThunk.js';
import { selectContacts } from 'redux/selectors';
import { Form, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form = e.target;
    const { name, number } = Object.fromEntries(formData);

    if (contacts?.some(item => item.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addContacts({ name, number }));
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          type="tel"
          name="number"
          placeholder="Enter contact number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
