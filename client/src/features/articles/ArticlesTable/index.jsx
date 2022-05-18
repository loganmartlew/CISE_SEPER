/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { TableContainer, Table, TableBody, TableRow } from '@mui/material';
import Head from './Head';
import Cell from './Cell';

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
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Cell
                      cellKey={cell.getCellProps().key}
                      cellRole={cell.getCellProps().role}
                      cellContent={cell.render('Cell')}
                    />
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArticlesTable;
