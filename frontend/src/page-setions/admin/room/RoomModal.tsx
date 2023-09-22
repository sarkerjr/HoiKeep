import { useState, useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';

import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import useRoles from '@/hooks/useRoles';
import {
  useCreateRoomMutation,
  useUpdateRoomMutation,
} from '@/store/services/room.services';

const RoomModal = ({
  open,
  close,
  room,
  mode,
}: {
  open: boolean;
  close: () => void;
  room: any;
  mode: string;
}) => {
  const [no, setNo] = useState(room?.no ?? '');
  const [seatQuantity, setSeatQuantity] = useState(room?.seatQuantity ?? '');

  // setting alert for CREATE request
  const [
    createRoom,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateRoomMutation();

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
    updateRoom,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateRoomMutation();

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
    setNo(room?.no ?? '');
    setSeatQuantity(room?.seatQuantity ?? '');
  }, [room]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createRoom({
        no,
        seatQuantity,
      });
    } else if (mode === 'UPDATE') {
      updateRoom({
        id: room?.id,
        no,
        seatQuantity,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Room' : 'Edit Room'}
      open={open}
      close={close}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Room Number"
            value={no}
            onChange={(e) => setNo(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Seat Quantity"
            value={seatQuantity}
            onChange={(e) => setSeatQuantity(e.target.value)}
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

export default RoomModal;
