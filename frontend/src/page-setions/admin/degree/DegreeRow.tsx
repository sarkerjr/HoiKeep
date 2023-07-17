import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from "components/data-table/StyledComponents";

type DegreeRowProps = {
  degree: any;
};

const DegreeRow: FC<DegreeRowProps> = ({ degree }) => {
  const { id, name } = degree;

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{id}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

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

export default DegreeRow;
