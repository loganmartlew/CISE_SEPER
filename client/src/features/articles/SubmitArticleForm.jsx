import { useForm, Controller } from 'react-hook-form';
import {
  Select,
  Stack,
  MenuItem,
  styled,
  FormControl,
  FormHelperText,
} from '@mui/material';
import Button from '../../components/Button';
import TextInput, {
  StyledInput,
  StyledLabel,
} from '../../components/TextInput';

const Form = styled('form')({});

const SubmitArticleForm = ({ tool, onSubmit, onReject, defaultValues }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...defaultValues, practice: 'default' } });

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

        {tool && (
          <Controller
            name='practice'
            control={control}
            defaultValue='default'
            rules={{
              required: { value: true, message: 'Practice is required' },
              validate: (value) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                value !== 'default' || 'Please select a practice',
            }}
            render={({ field }) => (
              <FormControl variant='standard'>
                <StyledLabel htmlFor='practice'>SE Practice</StyledLabel>
                <Select
                  {...field}
                  input={
                    <StyledInput id='practice' error={!!errors?.practice} />
                  }
                >
                  <MenuItem value='default' disabled hidden>
                    Please choose an SE practice
                  </MenuItem>
                  <MenuItem value='1'>Practice 1</MenuItem>
                  <MenuItem value='2'>Practice 2</MenuItem>
                  <MenuItem value='3'>Practice 3</MenuItem>
                  <MenuItem value='4'>Practice 4</MenuItem>
                </Select>
                <FormHelperText error={!!errors?.practice}>
                  {errors?.practice?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
        )}

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
