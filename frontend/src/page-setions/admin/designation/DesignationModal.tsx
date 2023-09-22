import { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

// project imports
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import useRoles from '@/hooks/useRoles';

import {
  useCreateDesignationMutation,
  useUpdateDesignationMutation,
} from '@/store/services/designation.services';

const DesignationModal = ({
  open,
  close,
  designation,
  mode,
}: {
  open: boolean;
  close: () => void;
  designation: any;
  mode: string;
}) => {
  const [name, setName] = useState(designation?.name ?? '');

  // setting alert for CREATE request
  const [
    createDesignation,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateDesignationMutation();

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
    updateDesignation,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateDesignationMutation();

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
    setName(designation?.name ?? '');
  }, [designation]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createDesignation({
        name,
      });
    } else if (mode === 'UPDATE') {
      updateDesignation({
        id: designation?.id,
        name,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Designation' : 'Edit Designation'}
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

export default DesignationModal;
