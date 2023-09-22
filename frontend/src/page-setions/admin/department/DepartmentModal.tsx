import { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';

import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import useRoles from '@/hooks/useRoles';
import {
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
} from '@/store/services/department.services';

const DepartmentModal = ({
  open,
  close,
  department,
  mode,
}: {
  open: boolean;
  close: () => void;
  department: any;
  mode: string;
}) => {
  const [name, setName] = useState(department?.name ? department.name : '');
  const [nameTag, setNameTag] = useState(
    department?.nameTag ? department.nameTag : ''
  );

  // for CREATE request
  const [
    createDepartment,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateDepartmentMutation();

  useAlert(
    createData,
    createError,
    createIsLoading,
    createIsSucess,
    createIsError,
    createReset
  );

  // for UPDATE request
  const [
    updateDepartment,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateDepartmentMutation();

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
    setName(department?.name ? department.name : '');
    setNameTag(department?.nameTag ? department.nameTag : '');
  }, [department]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createDepartment({ name, nameTag });
    } else if (mode === 'UPDATE') {
      updateDepartment({ id: department.id, name, nameTag });
    }
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Department' : 'Edit Department'}
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
            label="Name Tag"
            value={nameTag}
            onChange={(e) => setNameTag(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleOnSubmit();
              close();
            }}
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

export default DepartmentModal;
