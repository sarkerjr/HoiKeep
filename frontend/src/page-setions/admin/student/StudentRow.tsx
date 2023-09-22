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
    departments: { nameTag: departmentNameTag },
    studentProfiles: {
      name,
      studentNo,
      session,
      semester,
      year,
      admissionDate,
      degrees: { name: degreeName },
    },
  } = student;

  const handleOnEdit = () => {
    setData(student);
    setMode('UPDATE');
    setModal(true);
  };

  const { isValid } = useRoles();

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{studentNo}</StyledTableCell>

      <StyledTableCell align="center">{session}</StyledTableCell>

      <StyledTableCell align="center">{semester}</StyledTableCell>

      <StyledTableCell align="center">{year}</StyledTableCell>

      <StyledTableCell align="center">
        {admissionDate ? generalFormat(admissionDate) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">{departmentNameTag}</StyledTableCell>

      <StyledTableCell align="center">{degreeName}</StyledTableCell>

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

export default StudentRow;
