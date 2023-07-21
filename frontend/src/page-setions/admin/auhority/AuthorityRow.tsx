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
  setModal: any;
  setMode: any;
  setData: any;
};

const AuthorityRow: FC<AuthorityRowProps> = ({
  authority,
  setModal,
  setMode,
  setData,
}) => {
  const {
    sl,
    name,
    email,
    designation,
    joinedAt,
    leftAt,
    positionsId,
    hallsId,
    departmentsId,
  } = authority;

  const handleOnEdit = () => {
    setData(authority);
    setMode("EDIT");
    setModal(true);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{email}</StyledTableCell>

      <StyledTableCell align="center">{designation}</StyledTableCell>

      <StyledTableCell align="center">{joinedAt}</StyledTableCell>

      <StyledTableCell align="center">{leftAt}</StyledTableCell>

      <StyledTableCell align="center">{positionsId}</StyledTableCell>

      <StyledTableCell align="center">{hallsId}</StyledTableCell>

      <StyledTableCell align="center">{departmentsId}</StyledTableCell>

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

export default AuthorityRow;
