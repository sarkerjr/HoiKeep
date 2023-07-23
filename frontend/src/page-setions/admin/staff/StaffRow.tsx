import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { generalFormat } from '@/utils/dayjs';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type StaffRowProps = {
  staff: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const StaffRow: FC<StaffRowProps> = ({ staff, setModal, setMode, setData }) => {
  const {
    sl,
    positionsId,
    hallsId,
    staffDetails: { name, email, joinedAt, leftAt },
  } = staff;
  const handleOnEdit = () => {
    setData(staff);
    setMode('UPDATE');
    setModal(true);
  };

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

      <StyledTableCell align="center">{positionsId}</StyledTableCell>

      <StyledTableCell align="center">{hallsId}</StyledTableCell>

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

export default StaffRow;
