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
    positions: { name: positionName },
    departments: { name: departmentName },
    authorityDetails: {
      name,
      email,
      joinedAt,
      leftAt,
      designations: { name: designationName },
    },
  } = authority;

  const handleOnEdit = () => {
    setData(authority);
    setMode('UPDATE');
    setModal(true);
  };

  const { isValid } = useRoles();

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="center">#{sl}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">{email}</StyledTableCell>

      <StyledTableCell align="center">{designationName}</StyledTableCell>

      <StyledTableCell align="center">
        {joinedAt ? generalFormat(joinedAt) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">
        {leftAt ? generalFormat(leftAt) : 'N/A'}
      </StyledTableCell>

      <StyledTableCell align="center">{positionName}</StyledTableCell>

      <StyledTableCell align="center">{departmentName}</StyledTableCell>

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

export default AuthorityRow;
