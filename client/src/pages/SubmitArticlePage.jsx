import { Box, Typography, Stack, styled } from '@mui/material';
import Card from '../components/Card';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Form = styled('form')({});

const SubmitArticlePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <Typography variant='h1' component='h2'>
        Submit An Article
      </Typography>
      <Card>
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
    </Box>
  );
};

export default SubmitArticlePage;
