import { TableHead } from '@mui/material';
import HeadRow from './HeadRow';

const Head = ({ headerGroups }) => {
  return (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <HeadRow
          headerGroup={headerGroup}
          rowProps={headerGroup.getHeaderGroupProps()}
        />
      ))}
    </TableHead>
  );
};

export default Head;
