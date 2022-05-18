import { InputBase, ButtonBase, styled } from '@mui/material';
import { Search, ChevronRight } from '@mui/icons-material';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  border: `1px solid ${theme.palette.mono.dark}`,
  borderRadius: '10px',
  overflow: 'hidden',
}));

const Input = styled(InputBase)(({ theme }) => ({
  flexGrow: 1,
  padding: '0.5em 0.7em',
  backgroundColor: theme.palette.mono.light,
}));

const SearchButton = styled(ButtonBase)(({ theme }) => ({
  padding: '0.5em 1.2em',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  transition: '100ms',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        startAdornment={<Search />}
        placeholder='Search...'
        sx={{ gap: '0.7em' }}
      />
      <SearchButton type='submit'>
        Search
        <ChevronRight />
      </SearchButton>
    </Form>
  );
};

export default SearchBar;
