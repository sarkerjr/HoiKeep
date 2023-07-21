import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { generalFormat } from '@/utils/dayjs';

const DatePicker = ({ sx, label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        sx={sx}
        label={label}
        value={value}
        onChange={(value) => {
          console.log(generalFormat(value));
          onChange(generalFormat(value));
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
