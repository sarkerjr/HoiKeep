import { FC } from 'react';

// project imports
import {
  StyledTableRow,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type DueRowProps = {
  due: any;
};

const DueRow: FC<DueRowProps> = ({ due }) => {
  const {
    sl,
    isActive,
    students: {
      studentProfiles: { name, studentNo },
    },
    seats: {
      no: seatNo,
      rooms: { no: roomNo },
    },
    monthsDue,
  } = due;

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{`${name} (${studentNo})`}</StyledTableCell>

      <StyledTableCell align="center">{`${roomNo} (${seatNo})`}</StyledTableCell>

      <StyledTableCell align="center">{isActive.toString()}</StyledTableCell>

      <StyledTableCell align="center">
        {monthsDue + `${monthsDue === 1 ? ' month' : ' months'}`}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default DueRow;
