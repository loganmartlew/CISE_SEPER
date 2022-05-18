import { TableContainer, Table, Typography } from '@mui/material';
import Head from './Head';
import Body from './Body';

const ArticlesTable = (props) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    props;

  return (
    <>
      <Typography variant='h5' fontWeight={600} sx={{ mb: 2 }}>
        Results
      </Typography>
      <TableContainer>
        <Table {...getTableProps()}>
          <Head headerGroups={headerGroups} />
          <Body
            role={getTableBodyProps().role}
            rows={rows}
            prepareRow={prepareRow}
          />
        </Table>
      </TableContainer>
    </>
  );
};

export default ArticlesTable;
