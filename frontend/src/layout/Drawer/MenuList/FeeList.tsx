import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

const FeeList = [
  {
    text: 'All Fees',
    path: '/student',
    icon: <PriceCheckIcon />,
  },
  {
    text: 'Due Fees',
    path: '/accommodation',
    icon: <MoneyOffIcon />,
  },
];

export default FeeList;
