/* eslint-disable no-nested-ternary */
import { memo } from 'react';
import { Box, TableCell } from '@mui/material';
import {
  ExpandMore as ChevronDown,
  ExpandLess as ChevronUp,
} from '@mui/icons-material';

const HeadCell = ({ column, isSorted, isSortedDesc }) => {
  return (
    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
      <Box
        component='span'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {column.render('Header')}
        {isSorted ? (
          isSortedDesc ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )
        ) : (
          <ChevronDown sx={{ opacity: 0 }} />
        )}
      </Box>
    </TableCell>
  );
};

export default memo(HeadCell);
