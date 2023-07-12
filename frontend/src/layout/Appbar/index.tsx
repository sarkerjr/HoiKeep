import { styled } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

// project imports
import { DRAWER_WIDTH } from '@/utils/constants';
import { useSelector, useDispatch } from '@/store';
import { setDrawerState } from '@/store/slices/layoutSlice';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = () => {
  const { openDrawer } = useSelector((state: any) => state.layout);

  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(setDrawerState(true));
  };

  return (
    <StyledAppBar position="fixed" open={openDrawer}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Department Portal
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
