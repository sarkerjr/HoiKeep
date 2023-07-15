import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from "components/data-table/StyledComponents";

type AuthorityRowProps = {
  authority: any;
};

const AuthorityRow: FC<AuthorityRowProps> = ({ authority }) => {
  const {
    id,
    name,
    email,
    designation,
    joinedAt,
    leftAt,
    positionsId,
    hallsId,
    departmentsId,
  } = authority;

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{id}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{email}</StyledTableCell>

      <StyledTableCell align="center">{designation}</StyledTableCell>

      <StyledTableCell align="center">{joinedAt}</StyledTableCell>

      <StyledTableCell align="center">{leftAt}</StyledTableCell>

      <StyledTableCell align="center">{positionsId}</StyledTableCell>

      <StyledTableCell align="center">{hallsId}</StyledTableCell>

      <StyledTableCell align="center">{departmentsId}</StyledTableCell>

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

export default AuthorityRow;
