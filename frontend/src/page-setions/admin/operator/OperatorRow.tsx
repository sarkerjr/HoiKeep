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

type OperatorRowProps = {
  operator: any;
  setModal: any;
  setMode: any;
  setData: any;
};

const OperatorRow: FC<OperatorRowProps> = ({
  operator,
  setModal,
  setMode,
  setData,
}) => {
  const {
    sl,
    positions: { name: positionName },
    operatorDetails: { name, email, joinedAt, leftAt },
  } = operator;
  const handleOnEdit = () => {
    setData(operator);
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

export default OperatorRow;
