import { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

// project imports
import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import {
  useCreateAuthorityMutation,
  useUpdateAuthorityMutation,
} from '@/store/services/authority.services';

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
  const [name, setName] = useState(
    authority?.authorityDetails?.name ? authority.authorityDetails.name : ''
  );
  const [email, setEmail] = useState(
    authority?.authorityDetails?.email ? authority.authorityDetails.email : ''
  );
  const [joinedAt, setJoinedAt] = useState(
    authority?.authorityDetails?.joinedAt
      ? authority.authorityDetails.joinedAt
      : ''
  );
  const [leftAt, setLeftAt] = useState(
    authority?.authorityDetails?.leftAt ? authority.authorityDetails.leftAt : ''
  );
  const [designationsId, setDesignationsId] = useState(
    authority?.authorityDetails?.designation
      ? authority.authorityDetails.designation
      : ''
  );
  const [positionsId, setPositionsId] = useState(
    authority?.positionsId ? authority.positionsId : ''
  );
  const [hallsId, setHallsId] = useState(
    authority?.hall ? authority.hallsId : ''
  );
  const [departmentsId, setDepartmentsId] = useState(
    authority?.departmentsId ? authority.departmentsId : ''
  );

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
    updateReset
  );

  useEffect(() => {
    setName(
      authority?.authorityDetails?.name ? authority.authorityDetails.name : ''
    );
    setEmail(
      authority?.authorityDetails?.email ? authority.authorityDetails.email : ''
    );
    setJoinedAt(
      authority?.authorityDetails?.joinedAt
        ? authority.authorityDetails.joinedAt
        : ''
    );
    setLeftAt(
      authority?.authorityDetails?.leftAt
        ? authority.authorityDetails.leftAt
        : ''
    );
    setDesignationsId(
      authority?.authorityDetails?.designationsId
        ? authority.authorityDetails.designationsId
        : ''
    );
    setPositionsId(authority?.positionsId ? authority.positionsId : '');
    setHallsId(authority?.hallsId ? authority.hallsId : '');
    setDepartmentsId(authority?.departmentsId ? authority.departmentsId : '');
  }, [authority]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createAuthority({
        name,
        email,
        joinedAt,
        leftAt,
        hallsId,
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
        hallsId,
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
          <TextField
            label="Designation"
            value={designationsId}
            onChange={(event) => setDesignationsId(event.target.value)}
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
        {/* <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Left At"
            value={leftAt}
            onChange={(value: Date) => setLeftAt(value)}
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            label="Position"
            value={positionsId}
            onChange={(event) => setPositionsId(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Hall"
            value={hallsId}
            onChange={(event) => setHallsId(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Department"
            value={departmentsId}
            onChange={(event) => setDepartmentsId(event.target.value)}
            fullWidth
          />
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
