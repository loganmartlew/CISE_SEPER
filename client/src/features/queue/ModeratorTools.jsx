import { useForm } from 'react-hook-form';
import { Stack, Typography } from '@mui/material';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Checkbox from '../../components/Checkbox';

const ModeratorTools = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { notDuplicate: false, relevant: false, reviewed: false },
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Card>
      <Stack spacing={2}>
        <Typography
          variant='h5'
          component='h3'
          fontWeight={700}
          fontSize='2rem'
        >
          Moderation Tools
        </Typography>
        <Stack component='form' onSubmit={handleSubmit(submit)} spacing={2}>
          <Stack>
            <Typography variant='h6'>Article is:</Typography>
            <Checkbox
              name='notDuplicate'
              label='Not a Duplicate'
              control={control}
            />
            <Checkbox name='relevant' label='Relevant' control={control} />
            <Checkbox name='reviewed' label='Peer Reviewed' control={control} />
          </Stack>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: 'max-content' }}
          >
            Submit Article
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ModeratorTools;
