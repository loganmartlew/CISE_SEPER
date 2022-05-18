import { memo } from 'react';
import { TableCell } from '@mui/material';

const Cell = ({ cellKey, cellRole, cellContent }) => {
  return (
    <TableCell key={cellKey} role={cellRole}>
      {cellContent}
    </TableCell>
  );
};

export default memo(Cell);
