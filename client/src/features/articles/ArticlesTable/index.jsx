/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { TableContainer, Table, TableBody } from '@mui/material';
import Head from './Head';
import Row from './Row';

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
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Row
                key={row.getRowProps().key}
                rowProps={row.getRowProps()}
                rowCells={row.cells}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArticlesTable;
