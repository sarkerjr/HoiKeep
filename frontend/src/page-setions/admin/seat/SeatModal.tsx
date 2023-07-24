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

import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';
import {
  useCreateSeatMutation,
  useUpdateSeatMutation,
} from '@/store/services/seat.services';
import { useReadRoomsQuery } from '@/store/services/room.services';

const SeatModal = ({
  open,
  close,
  seat,
  mode,
}: {
  open: boolean;
  close: () => void;
  seat: any;
  mode: string;
}) => {
  const [no, setNo] = useState(seat?.no ?? '');
  const [roomsId, setRoomsId] = useState(seat?.roomsId ?? '');

  const { data: rooms } = useReadRoomsQuery();

  // setting alert for CREATE request
  const [
    createSeat,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateSeatMutation();

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
    updateSeat,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateSeatMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setNo(seat?.no ?? '');
    setRoomsId(seat?.roomsId ?? '');
  }, [seat]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createSeat({
        no,
        roomsId,
      });
    } else if (mode === 'UPDATE') {
      updateSeat({
        id: seat?.id,
        no,
        roomsId,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Seat' : 'Edit Seat'}
      open={open}
      close={close}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Seat Number"
            value={no}
            onChange={(e) => setNo(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="room-select-label">Room</InputLabel>
            <Select
              label="Room"
              labelId="room-select-label"
              value={roomsId}
              onChange={(event) => setRoomsId(event.target.value)}
              fullWidth
            >
              {rooms?.map((room: any) => (
                <MenuItem value={room.id} key={room.id}>
                  {room.no}
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

export default SeatModal;
