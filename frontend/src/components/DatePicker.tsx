import dayjs from 'dayjs';
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePicker = ({ sx, label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        sx={sx}
        label={label}
        value={dayjs(value)}
        onChange={(value) => {
          onChange(value ? dayjs(value) : dayjs());
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
