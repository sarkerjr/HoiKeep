import { FC } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { generalFormat } from '@/utils/dayjs';

// project imports
import {
  StyledTableRow,
  StyledIconButton,
  StyledTableCell,
} from 'components/data-table/StyledComponents';

type StudentRowProps = {
  student: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const StudentRow: FC<StudentRowProps> = ({
  student,
  setModal,
  setMode,
  setData,
}) => {
  const {
    sl,
    departments: { name: departmentName },
    studentProfiles: {
      name,
      email,
      studentNo,
      session,
      semester,
      year,
      admissionDate,
      studentImages: { url },
      degrees: { name: degreeName },
    },
  } = student;

  const handleOnEdit = () => {
    setData(student);
    setMode('EDIT');
    setModal(true);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{email}</StyledTableCell>

      <StyledTableCell align="center">{studentNo}</StyledTableCell>

      <StyledTableCell align="center">{session}</StyledTableCell>

      <StyledTableCell align="center">{semester}</StyledTableCell>

      <StyledTableCell align="center">{year}</StyledTableCell>

      <StyledTableCell align="center">
        {admissionDate ? generalFormat(admissionDate) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">{url || 'N/A'}</StyledTableCell>

      <StyledTableCell align="center">{departmentName}</StyledTableCell>

      <StyledTableCell align="center">{degreeName}</StyledTableCell>

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

export default StudentRow;
