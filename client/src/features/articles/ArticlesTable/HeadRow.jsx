import { memo } from 'react';
import { TableRow } from '@mui/material';
import HeadCell from './HeadCell';

const HeadRow = ({ headerGroup, rowProps }) => {
  return (
    <TableRow {...rowProps}>
      {headerGroup.headers.map((column) => (
        <HeadCell
          key={column.id}
          column={column}
          isSorted={column.isSorted}
          isSortedDesc={column.isSortedDesc}
        />
      ))}
    </TableRow>
  );
};

export default memo(HeadRow);
