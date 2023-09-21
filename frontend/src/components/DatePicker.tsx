import { useState, useMemo } from 'react';
import dayjs from 'dayjs';

import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from '@mui/x-date-pickers';
import { DateValidationError } from '@mui/x-date-pickers/models';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePicker = (props) => {
  const [error, setError] = useState<DateValidationError | null>(null);

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'maxDate': {
        return props.errorMessage.maxDate;
      }
      case 'minDate': {
        return props.errorMessage.minDate;
      }
      default: {
        return '';
      }
    }
  }, [error]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        {...props}
        sx={props.sx}
        label={props.label}
        value={dayjs(props.value)}
        openTo={props?.openTo}
        onChange={(newValue) => {
          props.onChange(newValue ? dayjs(newValue as Date) : dayjs());
        }}
        onError={(newError) => setError(newError)}
        slotProps={{
          textField: {
            helperText: errorMessage,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
