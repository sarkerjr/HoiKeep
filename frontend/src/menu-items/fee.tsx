import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

const fee = {
  id: 'fee_panel',
  title: 'Fee',
  type: 'group',
  children: [
    {
      id: 'fee',
      title: 'All Fee',
      type: 'item',
      url: '/fee',
      icon: PriceCheckIcon,
    },
    {
      id: 'due',
      title: 'Due Fee',
      type: 'item',
      url: '/due',
      icon: MoneyOffIcon,
    },
  ],
};

export default fee;
