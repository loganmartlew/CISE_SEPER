/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import HeadRow from './HeadRow';

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
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <HeadRow
              headerGroup={headerGroup}
              rowProps={headerGroup.getHeaderGroupProps()}
            />
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
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
