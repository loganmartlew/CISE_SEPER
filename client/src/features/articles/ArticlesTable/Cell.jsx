import { memo } from 'react';
import { TableCell } from '@mui/material';

const Cell = ({ cellRole, cellContent }) => {
  return <TableCell role={cellRole}>{cellContent}</TableCell>;
};

export default memo(Cell);
