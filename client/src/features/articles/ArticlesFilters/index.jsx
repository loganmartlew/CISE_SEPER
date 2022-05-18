import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const ArticlesFilters = () => {
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
          <Box>SE Practice Dropdown</Box>
          <Box>Column Toggles</Box>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ArticlesFilters;
