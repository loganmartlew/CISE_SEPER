import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import Card from '../../components/Card';
import SubmitArticleForm from '../articles/SubmitArticleForm';

const AnalystTools = ({ onSubmit, onReject, article }) => {
  return (
    <Card>
      <Stack spacing={2}>
        <Typography
          variant='h5'
          component='h3'
          fontWeight={700}
          fontSize='2rem'
        >
          Analysis Tools
        </Typography>
        <SubmitArticleForm
          tool
          onSubmit={onSubmit}
          onReject={onReject}
          defaultValues={article}
        />
      </Stack>
    </Card>
  );
};

export default memo(AnalystTools);
