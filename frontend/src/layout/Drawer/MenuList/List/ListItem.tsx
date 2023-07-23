import { useNavigate } from 'react-router-dom';
import {
  ListItem as MuiListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material/';

const ListItem = ({ text, icon, path }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const listItemStyle = {
    color: theme.palette.primary.main,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
    ':hover': {
      bgcolor: theme.palette.primary.main,
      color: '#ffffff',
      '& .MuiListItemIcon-root': {
        color: '#ffffff',
      },
    },
  };

  return (
    <MuiListItem key={text} disablePadding>
      <ListItemButton sx={listItemStyle} onClick={() => navigate(path)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </MuiListItem>
  );
};

export default ListItem;
