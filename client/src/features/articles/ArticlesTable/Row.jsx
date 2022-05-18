import { memo } from 'react';
import { TableRow } from '@mui/material';
import Cell from './Cell';

const Row = ({ role, rowCells }) => {
  return (
    <TableRow role={role}>
      {rowCells.map((cell) => (
        <Cell
          key={cell.getCellProps().key}
          cellRole={cell.getCellProps().role}
          cellContent={cell.render('Cell')}
        />
      ))}
    </TableRow>
  );
};

export default memo(Row);
