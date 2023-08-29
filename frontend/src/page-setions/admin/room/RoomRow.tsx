import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

import useRoles from '@/hooks/useRoles';

type RoomRowProps = {
  room: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const RoomRow: FC<RoomRowProps> = ({ room, setModal, setMode, setData }) => {
  const { sl, no, seatQuantity } = room;
  const handleOnEdit = () => {
    setData(room);
    setMode('UPDATE');
    setModal(true);
  };

  const isValid: boolean = useRoles();

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{no}</StyledTableCell>

      <StyledTableCell align="center">{seatQuantity}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton disabled={!isValid} onClick={handleOnEdit}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton disabled={!isValid}>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default RoomRow;
