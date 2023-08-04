import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        {...props}
        sx={props.sx}
        label={props.label}
        value={dayjs(props.value)}
        minDate={props.minDate ? dayjs(props.minDate) : null}
        openTo={props?.openTo}
        onChange={(newValue) => {
          props.onChange(newValue ? dayjs(newValue as Date) : dayjs());
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
