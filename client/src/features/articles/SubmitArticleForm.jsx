import { Stack, styled } from '@mui/material';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const Form = styled('form')({});

const SubmitArticleForm = () => {
  return (
    <Form autoComplete='off'>
      <Stack spacing='1.5em'>
        <TextInput name='title' label='Title' placeholder='Article Title' />
        <TextInput
          name='authors'
          label='Authors'
          placeholder='Article Authors'
        />
        <TextInput
          name='year'
          label='Year'
          placeholder='Article Publication Year'
        />
        <TextInput name='doi' label='DOI' placeholder='Article DOI' />
        <Button type='submit' variant='contained' sx={{ width: 'max-content' }}>
          Submit Article
        </Button>
      </Stack>
    </Form>
  );
};

export default SubmitArticleForm;
