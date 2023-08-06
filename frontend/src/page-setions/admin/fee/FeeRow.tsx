import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import dayjs from 'dayjs';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type FeeRowProps = {
  fee: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const FeeRow: FC<FeeRowProps> = ({ fee, setModal, setMode, setData }) => {
  const {
    sl,
    amount,
    year,
    month,
    accommodations: {
      isActive,
      students: {
        studentProfiles: { name, studentNo },
      },
      seats: {
        no: seatNo,
        rooms: { no: roomNo },
      },
    },
  } = fee;

  const handleOnEdit = () => {
    setData(fee);
    setMode('UPDATE');
    setModal(true);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{amount + '/-'}</StyledTableCell>

      <StyledTableCell align="center">
        {dayjs()
          .set('year', year)
          .set('month', month - 1)
          .format('MMMM, YYYY')}
      </StyledTableCell>

      <StyledTableCell align="center">{isActive.toString()}</StyledTableCell>

      <StyledTableCell align="center">{`${name} (${studentNo})`}</StyledTableCell>

      <StyledTableCell align="center">{`${roomNo} (${seatNo})`}</StyledTableCell>

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

export default FeeRow;
