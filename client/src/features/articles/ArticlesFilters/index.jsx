import { useReducer, useEffect } from 'react';
import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import usePractices from './usePractices';
import {
  defaultState,
  reducer,
  toggleColumn,
  setPractice,
} from './filtersReducer';

const ArticlesFilters = ({ columns }) => {
  const [filters, dispatchFilters] = useReducer(reducer, defaultState);
  const { practices } = usePractices();

  useEffect(() => {
    console.log(filters);
  }, [filters]);

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
        <Stack spacing={4}>
          <Box>
            <FormControl variant='outlined'>
              <Typography variant='h6'>SE Practice</Typography>
              <Select
                value={filters.practice}
                onChange={(e) => dispatchFilters(setPractice(e.target.value))}
                sx={{ minWidth: '300px' }}
              >
                <MenuItem value=''>None</MenuItem>
                {practices.map((practice) => (
                  <MenuItem value={practice.name} key={practice.name}>
                    {practice.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormGroup>
              <Typography variant='h6'>Shown Columns</Typography>
              {columns.map((column) => (
                <FormControlLabel
                  key={column.accessor}
                  label={column.Header}
                  control={
                    <Checkbox
                      checked={filters.columns[column.accessor]}
                      onChange={
                        () =>
                          // eslint-disable-next-line implicit-arrow-linebreak
                          dispatchFilters(toggleColumn(column.accessor))
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
                    />
                  }
                />
              ))}
            </FormGroup>
          </Box>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ArticlesFilters;
