import { TableBody } from '@mui/material';
import Row from './Row';

const Body = ({ role, rows, prepareRow }) => {
  return (
    <TableBody role={role}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <Row
            key={row.getRowProps().key}
            role={row.getRowProps().role}
            rowCells={row.cells}
          />
        );
      })}
    </TableBody>
  );
};

export default Body;
