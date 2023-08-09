import { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  TextField,
  Autocomplete,
  Typography,
} from '@mui/material';

// project imports
import Modal from '@/components/Modal';
import DatePicker from '@/components/DatePicker';
import { getMonthsBetween } from '@/utils/helper';

import useAlert from '@/hooks/useAlert';
import {
  useCreateFeeMutation,
  useUpdateFeeMutation,
} from '@/store/services/fee.services';
import { useReadAccommodationsQuery } from '@/store/services/accommodation.services';

const FeeModal = ({
  open,
  close,
  fee,
  mode,
}: {
  open: boolean;
  close: () => void;
  fee: any;
  mode: string;
}) => {
  const [amount, setAmount] = useState(fee?.amount ?? '');
  const [startDate, setStartDate] = useState(new Date()); // while creating new fees
  const [endDate, setEndDate] = useState(new Date()); // while creating new fees
  const [date, setDate] = useState(new Date(fee?.year, fee?.month)); // while updating fees
  const [accommodation, setAccommodation] = useState(fee?.accommodations ?? '');

  const { data: accommodations } = useReadAccommodationsQuery();

  // setting alert for CREATE request
  const [
    createFee,
    {
      data: createData,
      error: createError,
      isLoading: createIsLoading,
      isSuccess: createIsSucess,
      isError: createIsError,
      reset: createReset,
    },
  ] = useCreateFeeMutation();

  useAlert(
    createData,
    createError,
    createIsLoading,
    createIsSucess,
    createIsError,
    createReset,
    () => close()
  );

  //setting alert for UPDATE request
  const [
    updateFee,
    {
      data: updateData,
      error: updateError,
      isLoading: updateIsLoading,
      isSuccess: updateIsSucess,
      isError: updateIsError,
      reset: updateReset,
    },
  ] = useUpdateFeeMutation();

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
    setAmount(fee?.amount ?? '');
    accommodations &&
      setAccommodation(fee?.accommodations ?? accommodations[0]);
    fee && setDate(new Date(fee?.year, fee?.month));
  }, [fee, accommodations]);

  const handleOnSubmit = () => {
    if (mode === 'CREATE') {
      createFee({
        accommodationsId: accommodation?.id,
        amount,
        months: getMonthsBetween(startDate, endDate),
      });
    } else if (mode === 'UPDATE') {
      updateFee({
        id: fee?.id,
        accommodationsId: accommodation?.id,
        amount,
        year: date.getFullYear(),
        month: date.getMonth(),
      });
    }
  };

  return (
    <Modal
      title={mode === 'CREATE' ? 'Add New Fee' : 'Edit Fee'}
      open={open}
      close={close}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          {accommodations && (
            <Autocomplete
              fullWidth
              disablePortal
              options={accommodations}
              value={accommodation}
              onChange={(_, newValue) => setAccommodation(newValue)}
              getOptionLabel={(option) => {
                return option
                  ? `${option.students.studentProfiles.name} (${option.students.studentProfiles.studentNo})`
                  : '';
              }}
              renderOption={(props, option) => (
                <Typography
                  {...props}
                  color={option?.isActive ? 'black' : 'red'}
                >
                  {`${option.students.studentProfiles.name} (${option?.students.studentProfiles.studentNo})`}
                </Typography>
              )}
              isOptionEqualToValue={(option, value) => {
                return option.id === value.id;
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select Accommodation" />
              )}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
        </Grid>

        {mode === 'CREATE' && (
          <>
            <Grid item xs={12}>
              <DatePicker
                views={['year', 'month']}
                sx={{ width: '100%' }}
                label="From"
                value={startDate}
                onChange={(value: Date) => setStartDate(value)}
                openTo="month"
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                views={['year', 'month']}
                sx={{ width: '100%' }}
                label="To"
                value={endDate}
                onChange={(value: Date) => setEndDate(value)}
                minDate={startDate}
                openTo="month"
                slotProps={{
                  textField: {
                    helperText:
                      endDate !== null && endDate < startDate
                        ? "Can not be less than 'From' date!"
                        : '',
                  },
                }}
              />
            </Grid>
          </>
        )}

        {mode === 'UPDATE' && (
          <Grid item xs={12}>
            <DatePicker
              views={['year', 'month']}
              sx={{ width: '100%' }}
              label="Fee Date"
              value={date}
              onChange={(value: Date) => setDate(value)}
              openTo="month"
            />
          </Grid>
        )}

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

export default FeeModal;
