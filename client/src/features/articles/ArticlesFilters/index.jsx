import { useState } from 'react';
import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  FormGroup,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import usePractices from './usePractices';

const ArticlesFilters = () => {
  const [value, setValue] = useState('');
  const { practices } = usePractices();

  return (
    <Accordion
      sx={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
    >
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ padding: 0 }}>
        <Typography variant='h5' fontWeight={600}>
          Filter Results
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <Stack>
          <Box>
            <FormControl variant='outlined'>
              <FormLabel>SE Practice</FormLabel>
              <Select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{ minWidth: '300px' }}
              >
                <MenuItem value=''>None</MenuItem>
                {practices.map((practice) => (
                  <MenuItem value={practice.name}>{practice.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormGroup></FormGroup>
          </Box>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ArticlesFilters;
