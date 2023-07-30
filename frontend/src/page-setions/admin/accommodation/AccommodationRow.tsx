import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { generalFormat } from '@/utils/dayjs';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type AccommodationRowProps = {
  accommodation: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const AccommodationRow: FC<AccommodationRowProps> = ({
  accommodation,
  setModal,
  setMode,
  setData,
}) => {
  const {
    sl,
    isActive,
    status,
    joiningDate,
    laevingDate,
    students: {
      studentProfiles: { name, studentNo },
    },
    seats: {
      no: seatNo,
      rooms: { no: roomNo },
    },
  } = accommodation;

  const handleOnEdit = () => {
    setData(accommodation);
    setMode('UPDATE');
    setModal(true);
  };

  const setStatusColor = (status: string) => {
    switch (status) {
      case 'ALLOCATED':
        return 'green';
      case 'UNALLOCATED':
        return 'yellow';
      case 'ILLEGAL':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{`${roomNo} (${seatNo})`}</StyledTableCell>

      <StyledTableCell align="center">{`${name} - ${studentNo}`}</StyledTableCell>

      <StyledTableCell align="center">{isActive.toString()}</StyledTableCell>

      <StyledTableCell
        align="center"
        sx={{ color: `${setStatusColor(status)}` }}
      >
        {status}
      </StyledTableCell>

      <StyledTableCell align="center">
        {joiningDate ? generalFormat(joiningDate) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">
        {laevingDate ? generalFormat(laevingDate) : 'N/A'}
      </StyledTableCell>

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

export default AccommodationRow;
