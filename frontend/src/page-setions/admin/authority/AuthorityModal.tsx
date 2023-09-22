import { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

// project imports
import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import useRoles from '@/hooks/useRoles';
import {
  useCreateAuthorityMutation,
  useUpdateAuthorityMutation,
} from '@/store/services/authority.services';
import { useReadDepartmentsQuery } from '@/store/services/department.services';
import { useReadDesignationsQuery } from '@/store/services/designation.services';
import { useReadPositionsQuery } from '@/store/services/position.services';

const AuthorityModal = ({
  open,
  close,
  authority,
  mode,
}: {
  open: boolean;
  close: () => void;
  authority: any;
  mode: string;
}) => {
  const [name, setName] = useState(authority?.authorityDetails?.name ?? '');
  const [email, setEmail] = useState(authority?.authorityDetails?.email ?? '');
  const [joinedAt, setJoinedAt] = useState(
    authority?.authorityDetails?.joinedAt ?? ''
  );
  const [leftAt, setLeftAt] = useState(
    authority?.authorityDetails?.leftAt ?? ''
  );
  const [designationsId, setDesignationsId] = useState(
    authority?.authorityDetails?.designations?.id ?? ''
  );
  const [positionsId, setPositionsId] = useState(
    authority?.positions?.id ?? ''
  );
  const [departmentsId, setDepartmentsId] = useState(
    authority?.departments?.id ?? ''
  );

  const { data: departments } = useReadDepartmentsQuery();
  const { data: designations } = useReadDesignationsQuery();
  const { data: positions } = useReadPositionsQuery();

  // setting alert for CREATE request
  const [
    createAuthority,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateAuthorityMutation();

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
    updateAuthority,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateAuthorityMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset,
    () => close()
  );

  useEffect(() => {
    setName(authority?.authorityDetails?.name ?? '');
    setEmail(authority?.authorityDetails?.email ?? '');
    setJoinedAt(authority?.authorityDetails?.joinedAt ?? '');
    setLeftAt(authority?.authorityDetails?.leftAt ?? '');
    setDesignationsId(authority?.authorityDetails?.designations?.id ?? '');
    setPositionsId(authority?.positions?.id ?? '');
    setDepartmentsId(authority?.departments?.id ?? '');
  }, [authority]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createAuthority({
        name,
        email,
        joinedAt,
        leftAt,
        departmentsId,
        designationsId,
        positionsId,
      });
    } else if (mode === 'UPDATE') {
      updateAuthority({
        id: authority?.id,
        name,
        email,
        joinedAt,
        leftAt,
        departmentsId,
        designationsId,
        positionsId,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Authority' : 'Edit Authority'}
      open={open}
      close={close}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="designation-select-label">Designation</InputLabel>
            <Select
              label="Designation"
              labelId="designation-select-label"
              value={designationsId}
              onChange={(event) => setDesignationsId(event.target.value)}
              fullWidth
            >
              {designations?.map((designation: any) => (
                <MenuItem value={designation.id} key={designation.id}>
                  {designation.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <FormControl fullWidth>
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select
              label="Department"
              labelId="department-select-label"
              value={departmentsId}
              onChange={(event) => setDepartmentsId(event.target.value)}
              fullWidth
            >
              {departments?.map((department: any) => (
                <MenuItem value={department.id} key={department.id}>
                  {department.name}
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
            disabled={mode === 'CREATE' ? createIsLoading : updateIsLoading}
            fullWidth
          >
            {mode}
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AuthorityModal;
