import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filterContacts } from 'redux/slices/filterSlice';

const SearchContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input type="text" id="search" onChange={handleFilterChange} />
    </>
  );
};

SearchContactFilter.propTypes = {
  changeFilter: PropTypes.func,
};

export default SearchContactFilter;
