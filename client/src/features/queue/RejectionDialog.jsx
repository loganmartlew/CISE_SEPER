import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const RejectionDialog = ({ open, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    onSubmit(data.reason);
    onClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reject Article</DialogTitle>
      <form onSubmit={handleSubmit(submit)}>
        <DialogContent sx={{ pt: 0 }}>
          <TextInput
            label='Reason'
            placeholder='Reason for rejection'
            required
            error={errors?.reason}
            helperText={errors?.reason?.message}
            {...register('reason', {
              required: { value: true, message: 'Reason is required' },
            })}
          />
        </DialogContent>
        <DialogActions sx={{ p: '1.5em', pt: 0 }}>
          <Button onClick={onClose} variant='text' color='error'>
            Cancel
          </Button>
          <Button type='submit' variant='contained'>
            Submit Practice
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RejectionDialog;
