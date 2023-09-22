import { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';

import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import useRoles from '@/hooks/useRoles';
import {
  useCreateDegreeMutation,
  useUpdateDegreeMutation,
} from '@/store/services/degree.services';

const DegreeModal = ({
  open,
  close,
  degree,
  mode,
}: {
  open: boolean;
  close: () => void;
  degree: any;
  mode: string;
}) => {
  const [name, setName] = useState(degree?.name ?? '');

  // setting alert for CREATE request
  const [
    createDegree,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateDegreeMutation();

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
    updateDegree,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateDegreeMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setName(degree?.name ?? '');
  }, [degree]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createDegree({
        name,
      });
    } else if (mode === 'UPDATE') {
      updateDegree({
        id: degree?.id,
        name,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Degree' : 'Edit Degree'}
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

export default DegreeModal;
