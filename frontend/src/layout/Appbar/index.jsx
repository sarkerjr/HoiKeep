import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

// project imports
import { useDispatch } from '@/store';
import { toggleDrawerState } from '@/store/slices/layoutSlice';

const AppBar = () => {
  const dispatch = useDispatch();

  const handleDrawerState = () => {
    dispatch(toggleDrawerState());
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: 'none' }, mr: 2 }}
          onClick={handleDrawerState}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Department Portal
        </Typography>
        <Button variant="outlined" color="inherit">
          Login
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
