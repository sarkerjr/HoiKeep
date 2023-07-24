import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type SeatRowProps = {
  seat: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const SeatRow: FC<SeatRowProps> = ({ seat, setModal, setMode, setData }) => {
  const {
    sl,
    no,
    isAvailable,
    rooms: { no: roomsNo },
  } = seat;
  const handleOnEdit = () => {
    setData(seat);
    setMode('UPDATE');
    setModal(true);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{no}</StyledTableCell>

      <StyledTableCell align="center">{isAvailable.toString()}</StyledTableCell>

      <StyledTableCell align="center">{roomsNo}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={handleOnEdit}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default SeatRow;
