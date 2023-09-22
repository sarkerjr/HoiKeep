import { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import useRoles from '@/hooks/useRoles';

import {
  useCreateStaffMutation,
  useUpdateStaffMutation,
} from '@/store/services/staff.services';
import { useReadPositionsQuery } from '@/store/services/position.services';

const StaffModal = ({
  open,
  close,
  staff,
  mode,
}: {
  open: boolean;
  close: () => void;
  staff: any;
  mode: string;
}) => {
  const [name, setName] = useState(staff?.staffDetails?.name ?? '');
  const [email, setEmail] = useState(staff?.staffDetails?.email ?? '');
  const [joinedAt, setJoinedAt] = useState(staff?.staffDetails?.joinedAt ?? '');
  const [leftAt, setLeftAt] = useState(staff?.staffDetails?.leftAt ?? '');
  const [positionsId, setPositionsId] = useState(staff?.positionsId ?? '');
  const { data: positions } = useReadPositionsQuery();

  // setting alert for CREATE request
  const [
    createStaff,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateStaffMutation();

  useAlert(
    createData,
    createError,
    createIsLoading,
    createIsSucess,
    createIsError,
    createReset
  );

  //setting alert for UPDATE request
  const [
    updateStaff,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateStaffMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset,
    () => close()
  );

  const { role } = useRoles();

  useEffect(() => {
    setName(staff?.staffDetails?.name ?? '');
    setEmail(staff?.staffDetails?.email ?? '');
    setJoinedAt(staff?.staffDetails?.joinedAt ?? '');
    setLeftAt(staff?.staffDetails?.leftAt ?? '');
    setPositionsId(staff?.positionsId ?? '');
  }, [staff]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createStaff({
        name,
        email,
        joinedAt,
        leftAt,
        positionsId,
      });
    } else if (mode === 'UPDATE') {
      updateStaff({
        id: staff?.id,
        name,
        email,
        joinedAt,
        leftAt,
        positionsId,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Staff' : 'Edit Staff'}
      open={open}
      close={close}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Joined At"
            value={joinedAt}
            onChange={(value: Date) => setJoinedAt(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Left At"
            value={leftAt}
            onChange={(value: Date) => setLeftAt(value)}
            minDate={joinedAt}
            errorMessage={{
              minDate: 'Leaving date must be after joining date',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="position-select-label">Position</InputLabel>
            <Select
              label="Position"
              labelId="position-select-label"
              value={positionsId}
              onChange={(event) => setPositionsId(event.target.value)}
              fullWidth
            >
              {positions?.map((position: any) => (
                <MenuItem value={position.id} key={position.id}>
                  {position.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOnSubmit}
            disabled={
              role === 'VISITOR' ||
              (mode === 'CREATE' ? createIsLoading : updateIsLoading)
            }
            fullWidth
          >
            {mode}
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default StaffModal;
