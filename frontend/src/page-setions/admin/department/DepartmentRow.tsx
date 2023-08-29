import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

import useRoles from '@/hooks/useRoles';

type DepartmentRowProps = {
  department: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const DepartmentRow: FC<DepartmentRowProps> = ({
  department,
  setModal,
  setMode,
  setData,
}) => {
  const { sl, name, nameTag } = department;

  const handleOnEdit = () => {
    setData(department);
    setMode('UPDATE');
    setModal(true);
  };

  const isValid: boolean = useRoles();

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{nameTag}</StyledTableCell>

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

export default DepartmentRow;
