import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type DegreeRowProps = {
  degree: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const DegreeRow: FC<DegreeRowProps> = ({
  degree,
  setModal,
  setMode,
  setData,
}) => {
  const { sl, name } = degree;
  const handleOnEdit = () => {
    setData(degree);
    setMode('UPDATE');
    setModal(true);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

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

export default DegreeRow;
