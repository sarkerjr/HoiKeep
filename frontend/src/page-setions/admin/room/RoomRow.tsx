import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from "components/data-table/StyledComponents";

type RoomRowProps = {
  room: any;
};

const RoomRow: FC<RoomRowProps> = ({ room }) => {
  const { id, no, seatQuantity, hallsId } = room;

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{id}</StyledTableCell>

      <StyledTableCell align="center">{no}</StyledTableCell>

      <StyledTableCell align="center">{seatQuantity}</StyledTableCell>

      <StyledTableCell align="center">{hallsId}</StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
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