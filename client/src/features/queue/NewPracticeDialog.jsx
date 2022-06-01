import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const NewPracticeDialog = ({ open, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    onSubmit(data);
    onClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New SE Practice</DialogTitle>
      <form onSubmit={handleSubmit(submit)}>
        <DialogContent sx={{ pt: 0 }}>
          <TextInput
            label='Name'
            placeholder='Practice Name'
            required
            error={errors?.name}
            helperText={errors?.name?.message}
            {...register('name', {
              required: { value: true, message: 'Name is required' },
            })}
          />
        </DialogContent>
        <DialogActions sx={{ p: '1.5em', pt: 0 }}>
          <Button type='submit' variant='contained'>
            Submit Practice
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default NewPracticeDialog;
