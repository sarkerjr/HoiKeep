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
import { ALLOCATION_STATUS } from '@/utils/constants';
import {
  useCreateAccommodationMutation,
  useUpdateAccommodationMutation,
} from '@/store/services/accommodation.services';
import { useReadRoomsQuery } from '@/store/services/room.services';
import { useReadSeatsQuery } from '@/store/services/seat.services';
import { useReadStudentsQuery } from '@/store/services/student.services';

const AuthorityModal = ({
  open,
  close,
  mode,
  accommodation,
}: {
  open: boolean;
  close: () => void;
  accommodation: any;
  mode: string;
}) => {
  const [studentsId, setStudentsId] = useState(
    accommodation?.students?.id ?? ''
  );
  const [seatsId, setSeatsId] = useState(accommodation?.seats?.id ?? '');
  const [roomsId, setRoomsId] = useState(accommodation?.seats?.rooms?.id ?? '');
  const [isActive, setIsActive] = useState(accommodation?.isActive ?? true);
  const [status, setStatus] = useState(accommodation?.status ?? '');
  const [joiningDate, setJoiningDate] = useState(
    accommodation?.joiningDate ?? null
  );
  const [leavingDate, setLeavingDate] = useState(
    accommodation?.leavingDate ?? null
  );

  const { data: rooms } = useReadRoomsQuery();
  const { data: seats } = useReadSeatsQuery();
  const { data: students } = useReadStudentsQuery();

  // setting alert for CREATE request
  const [
    createAccommodation,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateAccommodationMutation();

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
    updateAccommodation,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateAccommodationMutation();

  useAlert(
    updateData,
    updateError,
    updateIsLoading,
    updateIsSucess,
    updateIsError,
    updateReset
  );

  useEffect(() => {
    setStudentsId(accommodation?.students?.id ?? '');
    setSeatsId(accommodation?.seats?.id ?? '');
    setRoomsId(accommodation?.seats?.rooms?.id ?? '');
    setIsActive(accommodation?.isActive ?? true);
    setStatus(accommodation?.status ?? '');
    setJoiningDate(accommodation?.joiningDate ?? null);
    setLeavingDate(accommodation?.leavingDate ?? null);
  }, [accommodation]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createAccommodation({
        studentsId,
        seatsId,
        roomsId,
        isActive,
        status,
        joiningDate,
        leavingDate,
      });
    } else if (mode === 'UPDATE') {
      updateAccommodation({
        id: accommodation?.id,
        studentsId,
        seatsId,
        roomsId,
        isActive,
        status,
        joiningDate,
        leavingDate,
      });
    }
    close();
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Accommodation' : 'Edit Accommodation'}
      open={open}
      close={close}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="-accommodation-student-select-label">
              Student
            </InputLabel>
            <Select
              label="Student"
              labelId="accommodation-student-select-label"
              value={studentsId}
              onChange={(event) => setStudentsId(event.target.value)}
              fullWidth
            >
              {students?.map((student: any) => (
                <MenuItem value={student?.id} key={student?.id}>
                  {`${student?.studentProfiles?.name} (${student?.studentProfiles?.studentNo})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="accommodation-room-select-label">Room</InputLabel>
            <Select
              label="Room"
              labelId="accommodation-room-select-label"
              value={roomsId}
              onChange={(event) => setRoomsId(event.target.value)}
              fullWidth
            >
              {rooms?.map((room: any) => (
                <MenuItem value={room?.id} key={room?.id}>
                  {room?.no}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="accommodation-seat-select-label">Seat</InputLabel>
            <Select
              label="Seat"
              labelId="accommodation-seat-select-label"
              value={seatsId}
              onChange={(event) => setSeatsId(event.target.value)}
              fullWidth
            >
              {seats?.map((seat: any) => (
                <MenuItem value={seat?.id} key={seat?.id}>
                  {seat?.no}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Is Active?"
            value={isActive}
            onChange={(event) => setIsActive(event.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="accommodation-status-select-label">
              Accommodation Status
            </InputLabel>
            <Select
              label="Accommodation Status"
              labelId="accommodation-status-select-label"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              fullWidth
            >
              {ALLOCATION_STATUS?.map((status: any) => (
                <MenuItem value={status?.value} key={status?.value}>
                  {status?.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Joining Date"
            value={joiningDate}
            onChange={(value: Date) => setJoiningDate(value)}
          />
        </Grid>

        <Grid item xs={12}>
          <DatePicker
            sx={{ width: '100%' }}
            label="Leaving Date"
            value={leavingDate}
            onChange={(value: Date) => setLeavingDate(value)}
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
