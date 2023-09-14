import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { generalFormat } from '@/utils/dayjs';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

import useRoles from '@/hooks/useRoles';

type StaffRowProps = {
  staff: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const StaffRow: FC<StaffRowProps> = ({ staff, setModal, setMode, setData }) => {
  const {
    sl,
    positions: { name: positionName },
    hallsId,
    staffDetails: { name, email, joinedAt, leftAt },
  } = staff;
  const handleOnEdit = () => {
    setData(staff);
    setMode('UPDATE');
    setModal(true);
  };

  const isValid: boolean = useRoles();

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{email}</StyledTableCell>

      <StyledTableCell align="center">
        {joinedAt ? generalFormat(joinedAt) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">
        {leftAt ? generalFormat(leftAt) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">{positionName}</StyledTableCell>

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

export default StaffRow;
