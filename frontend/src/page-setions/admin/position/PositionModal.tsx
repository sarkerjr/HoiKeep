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
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import {
  useCreatePositionMutation,
  useUpdatePositionMutation,
} from '@/store/services/position.services';

const POSITION_CATEGORY = [
  {
    value: 'AUTHORITY',
    label: 'Authority',
  },
  {
    value: 'STAFF',
    label: 'Staff',
  },
  {
    value: 'OPERATOR',
    label: 'Operator',
  },
];

const PositionModal = ({
  open,
  close,
  position,
  mode,
}: {
  open: boolean;
  close: () => void;
  position: any;
  mode: string;
}) => {
  const [name, setName] = useState(position?.name ?? '');
  const [category, setCategory] = useState(position?.category ?? '');

  // setting alert for CREATE request
  const [
    createPosition,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreatePositionMutation();

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
    updatePosition,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdatePositionMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setName(position?.name ?? '');
    setCategory(position?.category ?? '');
  }, [position]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createPosition({
        name,
        category,
      });
    } else if (mode === 'UPDATE') {
      updatePosition({
        id: position?.id,
        name,
        category,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Position' : 'Edit Position'}
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
          <FormControl fullWidth>
            <InputLabel id="position-category-select-label">
              Category
            </InputLabel>
            <Select
              label="Category"
              labelId="position-category-select-label"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              fullWidth
            >
              {POSITION_CATEGORY?.map((category: any) => (
                <MenuItem value={category?.value} key={category?.value}>
                  {category?.label}
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

export default PositionModal;
