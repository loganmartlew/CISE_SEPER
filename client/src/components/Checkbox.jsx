import { Controller } from 'react-hook-form';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

const Checkbox = ({ name, label, control: formControl }) => {
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={formControl}
          render={({ field }) => (
            <MuiCheckbox
              {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
