import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type RoomRowProps = {
  room: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const RoomRow: FC<RoomRowProps> = ({ room, setModal, setMode, setData }) => {
  const { sl, no, seatQuantity, hallsId } = room;
  const handleOnEdit = () => {
    setData(room);
    setMode('UPDATE');
    setModal(true);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{no}</StyledTableCell>

      <StyledTableCell align="center">{seatQuantity}</StyledTableCell>

      <StyledTableCell align="center">{hallsId}</StyledTableCell>

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

export default RoomRow;
