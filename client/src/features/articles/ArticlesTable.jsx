/* eslint-disable no-nested-ternary */
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import {
  ExpandMore as ChevronDown,
  ExpandLess as ChevronUp,
} from '@mui/icons-material';

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
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Box
                    component='span'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )
                    ) : (
                      <ChevronDown sx={{ opacity: 0 }} />
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
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
