import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from "components/data-table/StyledComponents";

type SeatRowProps = {
  seat: any;
};

const SeatRow: FC<SeatRowProps> = ({ seat }) => {
  const { id, no, roomsId } = seat;

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{id}</StyledTableCell>

      <StyledTableCell align="center">{no}</StyledTableCell>

      <StyledTableCell align="center">{roomsId}</StyledTableCell>

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

export default SeatRow;
