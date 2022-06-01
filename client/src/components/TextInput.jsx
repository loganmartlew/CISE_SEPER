import { forwardRef } from 'react';
import { FormControl, InputBase, FormHelperText, styled } from '@mui/material';

export const StyledInput = styled(InputBase)(({ theme, error }) => ({
  padding: '0.3em 1em',
  border: `thin solid ${
    error ? theme.palette.error.main : theme.palette.mono.dark
  }`,
  backgroundColor: theme.palette.mono.light,
  borderRadius: '10px',
  fontSize: '1rem',
  color: error ? theme.palette.error.main : 'inherit',
  '&:focus': {
    borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
  },
}));

export const StyledLabel = styled('label')(({ theme, error }) => ({
  color: error ? theme.palette.error.main : 'inherit',
}));

const TextInput = forwardRef(
  ({ id, label, required, name, helperText, error, onChange, onBlur }, ref) => {
    return (
      <FormControl variant='standard'>
        <StyledLabel htmlFor={id || name || label}>
          {label && `${label}${required ? ' *' : ''}`}
        </StyledLabel>
        <StyledInput
          id={id || name || label}
          type='text'
          error={!!error}
          inputRef={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default TextInput;
