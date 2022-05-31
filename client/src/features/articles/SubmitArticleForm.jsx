import { useForm } from 'react-hook-form';
import { Stack, styled } from '@mui/material';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const Form = styled('form')({});

const SubmitArticleForm = ({ tool, onSubmit, onReject, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing='1.5em'>
        <TextInput
          label='Title'
          placeholder='Article Title'
          required
          error={errors?.title}
          helperText={errors?.title?.message}
          {...register('title', {
            required: { value: true, message: 'Title is required' },
          })}
        />
        <TextInput
          label='Authors'
          placeholder='Article Authors'
          {...register('authors', {
            required: { value: true, message: 'Authors is required' },
          })}
          required
          error={errors?.authors}
          helperText={errors?.authors?.message}
        />
        <TextInput
          name='year'
          label='Year'
          placeholder='Article Publication Year'
          {...register('year', {
            required: { value: true, message: 'Year is required' },
          })}
          required
          error={errors?.year}
          helperText={errors?.year?.message}
        />
        <TextInput
          label='DOI'
          placeholder='Article DOI'
          {...register('doi', {
            required: { value: true, message: 'DOI is required' },
          })}
          required
          error={errors?.doi}
          helperText={errors?.doi?.message}
        />
        <Stack direction='row' spacing={2}>
          <Button
            type='submit'
            variant='contained'
            sx={{ width: 'max-content' }}
          >
            {tool ? 'Accept Article' : 'Submit Article'}
          </Button>
          {tool && (
            <Button
              type='button'
              variant='contained'
              color='error'
              onClick={onReject}
              sx={{ width: 'max-content' }}
            >
              Reject Article
            </Button>
          )}
        </Stack>
      </Stack>
    </Form>
  );
};

export default SubmitArticleForm;
