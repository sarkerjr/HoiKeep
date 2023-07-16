import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from "components/data-table/StyledComponents";

type OperatorRowProps = {
  operator: any;
};

const OperatorRow: FC<OperatorRowProps> = ({ operator }) => {
  const { id, name, email, joinedAt, leftAt, positionsId, hallsId } = operator;

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{id}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{email}</StyledTableCell>

      <StyledTableCell align="center">{joinedAt}</StyledTableCell>

      <StyledTableCell align="center">{leftAt}</StyledTableCell>

      <StyledTableCell align="center">{positionsId}</StyledTableCell>

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

export default OperatorRow;
