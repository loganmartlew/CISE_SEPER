/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { TableContainer, Table } from '@mui/material';
import Head from './Head';
import Body from './Body';

const ArticlesTable = ({ data = useMemo(() => [], []) }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Article Name',
        accessor: 'title',
      },
      {
        Header: 'SE Practice',
        accessor: 'sePractice',
      },
      {
        Header: 'Authors',
        accessor: 'authors',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'DOI',
        accessor: 'doi',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
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
  );
};

export default ArticlesTable;
