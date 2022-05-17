import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Stack, styled } from '@mui/material';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const Form = styled('form')({});

const SubmitArticleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.sePractice = {
      name: 'TDD',
    };

    fetch(`${import.meta.env.VITE_API_URL}/articles`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleData: data }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/search');
      });
  };

  return (
    <Form autoComplete='off' onSubmit={handleSubmit(submit)}>
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
        <Button type='submit' variant='contained' sx={{ width: 'max-content' }}>
          Submit Article
        </Button>
      </Stack>
    </Form>
  );
};

export default SubmitArticleForm;
