import { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
  InputLabel,
  FormControl,
  Typography,
  AutocompleteRenderInputParams,
} from '@mui/material';

// project imports
import DatePicker from '@/components/DatePicker';
import Modal from '@/components/Modal';
import useAlert from '@/hooks/useAlert';

import { ALLOCATION_STATUS, BOOLEAN_OPTIONS } from '@/utils/constants';
import {
  useCreateAccommodationMutation,
  useUpdateAccommodationMutation,
} from '@/store/services/accommodation.services';
import { useReadSeatsQuery } from '@/store/services/seat.services';
import { useReadStudentsWithAccommodationStatusQuery } from '@/store/services/student.services';

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
  const [student, setStudent] = useState(accommodation?.students ?? '');
  const [seat, setSeat] = useState(accommodation?.seats ?? '');
  const [isActive, setIsActive] = useState(accommodation?.isActive ?? true);
  const [status, setStatus] = useState(accommodation?.status ?? '');
  const [joiningDate, setJoiningDate] = useState(
    accommodation?.joiningDate ?? null
  );
  const [leavingDate, setLeavingDate] = useState(
    accommodation?.leavingDate ?? null
  );

  const { data: seats } = useReadSeatsQuery();
  const { data: students } = useReadStudentsWithAccommodationStatusQuery();

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
    students && setStudent(accommodation?.students ?? students[0]);
    seats && setSeat(accommodation?.seats ?? seats[0]);
    setIsActive(accommodation?.isActive ?? true);
    setStatus(accommodation?.status ?? '');
    setJoiningDate(accommodation?.joiningDate ?? null);
    setLeavingDate(accommodation?.leavingDate ?? null);
  }, [accommodation, seats, students]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createAccommodation({
        studentsId: student.id,
        seatsId: seat.id,
        isActive,
        status,
        joiningDate,
        leavingDate,
      });
    } else if (mode === 'UPDATE') {
      updateAccommodation({
        id: accommodation?.id,
        studentsId: student.id,
        seatsId: seat.id,
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
          {students && (
            <Autocomplete
              fullWidth
              disablePortal
              options={students}
              value={student}
              onChange={(_, newValue) => setStudent(newValue)}
              getOptionLabel={(option) => {
                return option
                  ? `${option.studentProfiles.name} (${option.studentProfiles.studentNo})`
                  : '';
              }}
              renderOption={(props, option) => (
                <Typography
                  {...props}
                  color={option?.accommodations?.isActive ? 'coral' : 'black'}
                >
                  {`${option.studentProfiles.name} (${option?.studentProfiles.studentNo})`}
                </Typography>
              )}
              isOptionEqualToValue={(option, value) => {
                return option.id === value.id;
              }}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField {...params} label="Student" />
              )}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          {seats && (
            <Autocomplete
              fullWidth
              disablePortal
              options={seats}
              value={seat}
              onChange={(_, newValue) => setSeat(newValue)}
              getOptionLabel={(option) => {
                return option ? `${option.rooms.no} (${option?.no})` : '';
              }}
              renderOption={(props, option) => (
                <Typography {...props}>
                  {option.rooms.no}{' '}
                  <span
                    style={{ color: `${option.isAvailable ? 'green' : 'red'}` }}
                  >
                    {`(${option?.no})`}
                  </span>
                </Typography>
              )}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField {...params} label="Seat" />
              )}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="accommodation-status-select-label">
              Is Active?
            </InputLabel>
            <Select
              label="Is Active?"
              labelId="accommodation-status-select-label"
              value={isActive}
              onChange={(event) => setIsActive(event.target.value)}
              fullWidth
            >
              {BOOLEAN_OPTIONS?.map((item: any) => (
                <MenuItem value={item?.value} key={item?.value}>
                  {item?.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
