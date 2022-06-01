import { useForm, Controller } from 'react-hook-form';
import {
  Box,
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

const SubmitArticleForm = ({
  tool,
  onSubmit,
  onReject,
  onAddPractice,
  defaultValues,
  practices,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...defaultValues, practiceId: 'default' } });

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
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: 'Year must be a number',
            },
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
          <Stack direction='row' spacing={2} alignItems='end'>
            <Box sx={{ flexGrow: 1 }}>
              <Controller
                name='practiceId'
                control={control}
                defaultValue='default'
                rules={{
                  required: { value: true, message: 'Practice is required' },
                  validate: (value) =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    value !== 'default' || 'Please select a practice',
                }}
                render={({ field }) => (
                  <FormControl variant='standard' sx={{ width: '100%' }}>
                    <StyledLabel htmlFor='practiceId'>SE Practice</StyledLabel>
                    <Select
                      {...field}
                      input={
                        <StyledInput
                          id='practiceId'
                          error={!!errors?.practiceId}
                        />
                      }
                    >
                      <MenuItem value='default' disabled hidden>
                        Please choose an SE practice
                      </MenuItem>
                      {practices &&
                        practices.map((practice) => (
                          <MenuItem key={practice._id} value={practice._id}>
                            {practice.name}
                          </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText error={!!errors?.practiceId}>
                      {errors?.practiceId?.message}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Box>
            <Button
              variant='outlined'
              onClick={onAddPractice}
              sx={{ display: 'block', mb: '5px !important' }}
            >
              Add Practice
            </Button>
          </Stack>
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
