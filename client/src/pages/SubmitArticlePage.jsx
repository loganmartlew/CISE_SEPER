import { Typography, Stack, styled } from '@mui/material';
import Card from '../components/Card';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Form = styled('form')({});

const SubmitArticlePage = () => {
  return (
    <>
      <Typography variant='h1' component='h2'>
        Submit An Article
      </Typography>
      <Card sx={{ maxWidth: '500px' }}>
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
            <Button
              type='submit'
              variant='contained'
              sx={{ width: 'max-content' }}
            >
              Submit Article
            </Button>
          </Stack>
        </Form>
      </Card>
    </>
  );
};

export default SubmitArticlePage;
